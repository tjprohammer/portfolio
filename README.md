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
(`.github/workflows/deploy.yml`) — same AWS key pattern as the
`tjprohammer-us` photo site workflow.

### One-time setup: copy secrets from the photo repo

You already have deploy credentials on `tjprohammer-us`. Copy them onto
`portfolio`:

1. Open  
   `https://github.com/tjprohammer/tjprohammer-us/settings/secrets/actions`
2. Note that `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` exist  
   (GitHub won’t show the values — you’ll need the original keys from
   wherever you stored them, or create a new IAM access key)
3. Open  
   `https://github.com/tjprohammer/portfolio/settings/secrets/actions`
4. Click **New repository secret** and add:
   - `AWS_ACCESS_KEY_ID` — same value as the photo repo
   - `AWS_SECRET_ACCESS_KEY` — same value as the photo repo
5. (Optional) `AWS_CLOUDFRONT_DISTRIBUTION_ID` — portfolio’s CloudFront ID  
   If omitted, the workflow looks it up by alias `portfolio.tjprohammer.us`  
   (do **not** reuse the photo site ID `E31AR5COOJWOTE`)

Then merge the deploy PR (or re-run the workflow on `main`).

### IAM permissions needed

Same IAM user as the photo site is fine if it can also:

- `s3:ListBucket` on `arn:aws:s3:::portfolio.tjprohammer.us`
- `s3:GetObject`, `s3:PutObject`, `s3:DeleteObject` on that bucket’s objects
- `cloudfront:CreateInvalidation`
- `cloudfront:ListDistributions` (only if you skip the distribution ID secret)

### Manual deploy

```bash
npm run build:prod
aws s3 cp ./build/ s3://portfolio.tjprohammer.us/ --recursive
```

Infra lives in `terraform/` (S3 website bucket + CloudFront + Route53).
