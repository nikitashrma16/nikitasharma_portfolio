# Deploy to GitHub Pages - Quick Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `Portfolio` (or your preferred name)
3. Set visibility to **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

## Step 2: Connect and Push to GitHub

After creating the repository, run these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Go to **Actions** tab and wait for the deployment workflow to complete
5. Under **Settings** → **Pages** → **Custom domain**, enter: `nikitasharma.tech`
6. Check **Enforce HTTPS** when it becomes available

## Step 4: Configure DNS

In your domain registrar (where you bought nikitasharma.tech), add these DNS records:

**For Apex Domain (nikitasharma.tech):**
- Type: A
- Name: @
- Value: 185.199.108.153
- TTL: 3600

Repeat with these additional IPs:
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**Alternative: CNAME (if your registrar supports it for apex domains):**
- Type: CNAME
- Name: @
- Value: YOUR_USERNAME.github.io
- TTL: 3600

## Step 5: Wait and Verify

- DNS propagation can take up to 48 hours (usually much faster)
- Your site will be live at: https://nikitasharma.tech
- The GitHub Actions workflow will automatically deploy on every push to main

## Troubleshooting

- If the site doesn't load: Check GitHub Actions for deployment errors
- If DNS doesn't resolve: Verify DNS records with: `dig nikitasharma.tech`
- If HTTPS doesn't work: Wait a few minutes after enabling the custom domain
