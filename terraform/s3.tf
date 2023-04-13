# S3 bucket for website.
resource "aws_s3_bucket" "www_bucket" {
  bucket = "www.${var.bucket_name}"

  tags = var.common_tags
}

resource "aws_s3_bucket_policy" "www_bucket_policy" {
    bucket = aws_s3_bucket.www_bucket.id
    policy = templatefile("s3-policy.json", { bucket = "www.${var.bucket_name}" })
}

resource "aws_s3_bucket_public_access_block" "www_bucket_public_access_block" {
  bucket = aws_s3_bucket.www_bucket.id
  block_public_acls       = true
  ignore_public_acls      = true
  block_public_policy     = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_ownership_controls" "bucket_ownership_controls" {
  bucket = aws_s3_bucket.www_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_acl" "bucket_acl" {
  depends_on = [
    aws_s3_bucket_ownership_controls.bucket_ownership_controls,
    aws_s3_bucket_public_access_block.www_bucket_public_access_block,
  ]

  bucket = aws_s3_bucket.www_bucket.id
  acl    = "public-read"
}

resource "aws_s3_bucket_website_configuration" "www_bucket_website" {
  bucket = aws_s3_bucket.www_bucket.id
  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_cors_configuration" "www_bucket_cors" {
  bucket = aws_s3_bucket.www_bucket.id

  cors_rule {
    allowed_headers = ["Authorization", "Content-Length"]
    allowed_methods = ["GET", "POST"]
    allowed_origins = ["https://www.${var.domain_name}"]
    max_age_seconds = 3000
  }
}

# S3 bucket for redirecting non-www to www.
# resource "aws_s3_bucket" "root_bucket" {
#   bucket = var.bucket_name
#   acl    = "public-read"
#   policy = templatefile("s3-policy.json", { bucket = var.bucket_name })

#   website {
#     redirect_all_requests_to = "https://www.${var.domain_name}"
#   }

#   tags = var.common_tags
# }