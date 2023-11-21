terraform {
  required_version = ">= 1.3.9"

  required_providers {
    aws = {
        source = "hashicorp/aws"
        version = "~> 4.66.0"
    }
  }
  backend "s3" {
    bucket = "portfolio-terraform-v1"
    key    = "prod/terraform.tfstate"
    region = "us-west-2"
  }
}