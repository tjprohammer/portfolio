# TJ Prohammer Portfolio

React + TypeScript + Webpack site hosted on S3 + CloudFront at
[portfolio.tjprohammer.us](https://portfolio.tjprohammer.us).

The apex hub at [tjprohammer.us](https://tjprohammer.us) lives in `hub/` and
deploys separately to the existing CloudFront distribution (bucket
`www.tjprohammer.us`).

## Local development

```bash
npm install
npm start
```

Preview the hub:

```bash
python3 -m http.server 5080 --directory hub
```

## Production build

```bash
npm run build:prod
```

## Deploy

Pushes to `main` deploy automatically via GitHub Actions
(`.github/workflows/deploy.yml`) — same AWS key pattern as the
`tjprohammer-us` photo site workflow.

Hub changes under `hub/` deploy via `.github/workflows/deploy-hub.yml`.

### One-time setup: GitHub Environment secrets

Deploy uses the GitHub Environment named `AWS_ACCESS_KEY_ID`
(Settings → Environments). That name is only the environment label —
the **secret names inside it** must be:

| Secret name | Value |
| --- | --- |
| `AWS_ACCESS_KEY_ID` | your `AKIA…` access key |
| `AWS_SECRET_ACCESS_KEY` | the matching secret key |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | optional; portfolio CloudFront ID only |
| `AWS_APEX_CLOUDFRONT_DISTRIBUTION_ID` | optional; apex `tjprohammer.us` distribution ID |

Edit: https://github.com/tjprohammer/portfolio/settings/environments

On that environment page, under **Environment secrets**, add both secrets
above (same values as `tjprohammer-us`). Do **not** reuse the photo
CloudFront ID `E31AR5COOJWOTE`.

Then merge the deploy PR (or re-run **Deploy portfolio** on `main`).

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
