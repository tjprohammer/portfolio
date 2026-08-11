# TJ Prohammer Portfolio

React + TypeScript + Webpack site hosted on S3 + CloudFront at
[portfolio.tjprohammer.us](https://portfolio.tjprohammer.us).

## Local development

```bash
npm install
npm start
```

## Production build

```bash
npm run build:prod
```

## Deploy

Pushes to `main` deploy automatically via GitHub Actions
(`.github/workflows/deploy.yml`).

### Required repository secrets

| Secret | Purpose |
| --- | --- |
| `AWS_ACCESS_KEY_ID` | IAM user/key that can write the S3 bucket and create CloudFront invalidations |
| `AWS_SECRET_ACCESS_KEY` | Matching secret key |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | Optional. If omitted, the workflow looks up the distribution by alias `portfolio.tjprohammer.us` |

Minimum IAM permissions for the deploy user:

- `s3:ListBucket` on `arn:aws:s3:::portfolio.tjprohammer.us`
- `s3:GetObject`, `s3:PutObject`, `s3:DeleteObject` on `arn:aws:s3:::portfolio.tjprohammer.us/*`
- `cloudfront:CreateInvalidation`
- `cloudfront:ListDistributions` (only needed if you skip `AWS_CLOUDFRONT_DISTRIBUTION_ID`)

### Manual deploy

```bash
npm run build:prod
aws s3 cp ./build/ s3://portfolio.tjprohammer.us/ --recursive
```

Infra lives in `terraform/` (S3 website bucket + CloudFront + Route53).
