terraform {
  required_version = ">= 1.4.4"

  required_providers {
    aws = {
        source = "hashicorp/aws"
        version = "~> 4.59.0"
    }
  }
  backend "s3" {
    bucket = "portfolio-terraform-v1"
    key    = "prod/terraform.tfstate"
    region = "us-west-2"
  }
}

provider "aws" {
  region = "us-west-2"
}

provider "aws" {
    alias  = "acm_provider"
    region = "us-east-1"
}