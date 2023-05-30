provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

locals {
  s3_origin_id = "portfolio Origin Id"
}

#S3 BUCKET for WEBSITE
resource "aws_s3_bucket" "s3_portfolio_bucket" {
  bucket = var.bucket_name

}
#WEBSITE CONFIG
resource "aws_s3_bucket_website_configuration" "s3_portfolio_website_bucket" {
  bucket = aws_s3_bucket.s3_portfolio_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_acl" "s3_portfolio_website_bucket_acl" {
  depends_on = [
    aws_s3_bucket_ownership_controls.s3_portfolio_ownership,
    aws_s3_bucket_public_access_block.s3_portfolio_public_block,
  ]
  bucket = aws_s3_bucket.s3_portfolio_bucket.id

  acl = "public-read"
}

resource "aws_s3_bucket_public_access_block" "s3_portfolio_public_block" {
  bucket = aws_s3_bucket.s3_portfolio_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_ownership_controls" "s3_portfolio_ownership" {
  bucket = aws_s3_bucket.s3_portfolio_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}
resource "aws_s3_bucket_policy" "s3_portfolio_policy" {
  bucket = aws_s3_bucket.s3_portfolio_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.s3_portfolio_bucket.arn}/*"
      },
    ]
  })
}

#BUCKET CORS
resource "aws_s3_bucket_cors_configuration" "s3_cors" {
  bucket = aws_s3_bucket.s3_portfolio_bucket.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "PUT", "POST"]
    allowed_origins = ["https://${aws_cloudfront_distribution.portfolio_s3_distribution.domain_name}"]

    expose_headers  = ["ETag"]
    max_age_seconds = 3000
  }

  cors_rule {
    allowed_methods = ["POST", "GET", "PUT"]
    allowed_origins = ["https://${aws_cloudfront_distribution.portfolio_s3_distribution.domain_name}"]

  }
}

#ROUTE53

resource "aws_route53_record" "sub_domain" {
  zone_id = var.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.portfolio_s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.portfolio_s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
//ACM CERT FOR S3 WEB HOSTING
resource "aws_acm_certificate" "ssl_certificate" {
  provider = aws.us_east_1
  domain_name = var.domain_name
  subject_alternative_names = ["p.${var.domain_name}"]
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# resource "aws_acm_certificate_validation" "cert_validation" {
#   provider = aws.us_east_1
#   certificate_arn = aws_acm_certificate.ssl_certificate.arn
#   validation_record_fqdns = [aws_route53_record.sub_domain.fqdn]
# }

# Cloudfront distribution for main s3 site.
resource "aws_cloudfront_distribution" "portfolio_s3_distribution" {
  origin {
    domain_name = "${aws_s3_bucket.s3_portfolio_bucket.bucket_regional_domain_name}"
    origin_id = local.s3_origin_id

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = ["${var.domain_name}"]

  custom_error_response {
    error_caching_min_ttl = 0
    error_code            = 404
    response_code         = 200
    response_page_path    = "/404.html"
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 31536000
    default_ttl            = 31536000
    max_ttl                = 31536000
    compress               = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
    acm_certificate_arn      = aws_acm_certificate.ssl_certificate.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

