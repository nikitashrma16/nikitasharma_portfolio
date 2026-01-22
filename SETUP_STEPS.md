# Complete Setup Guide for nikitasharma.tech

## ✅ Step 1: Push Workflow File (Required)

You need a Personal Access Token with `workflow` scope to push the deployment workflow.

**Create Token:**
1. Go to: https://github.com/settings/tokens/new
2. Name: `Portfolio Deploy Workflow`
3. Expiration: `90 days`
4. **Check these scopes:**
   - ✅ `repo` (all checkboxes)
   - ✅ `workflow` (important!)
5. Generate and copy the token

**Push the workflow:**
```bash
git push origin main
```
(Use your new token with workflow scope when prompted)

## ✅ Step 2: Enable GitHub Pages

1. Go to: https://github.com/nikitashrma16/nikitasharma_portfolio/settings/pages

2. Under **"Source"**:
   - Select: **"GitHub Actions"** (NOT "Deploy from a branch")
   - This enables automatic deployment

3. Wait for the first deployment:
   - Go to: https://github.com/nikitashrma16/nikitasharma_portfolio/actions
   - Wait for the "Deploy to GitHub Pages" workflow to complete (green checkmark)

4. Under **"Custom domain"**:
   - Enter: `nikitasharma.tech`
   - Check ✅ **"Enforce HTTPS"** when it becomes available (may take a few minutes)

## ✅ Step 3: Configure DNS for nikitasharma.tech

You need to configure DNS at your domain registrar (where you bought nikitasharma.tech).

### Option A: A Records (Apex Domain)

Add these **4 A records**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

### Option B: CNAME (if supported for apex)

Some registrars support CNAME for apex domains:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | @ | nikitashrma16.github.io | 3600 |

## ✅ Step 4: Verify & Test

1. **Check DNS propagation:**
   ```bash
   dig nikitasharma.tech
   ```
   Or use: https://www.whatsmydns.net/#A/nikitasharma.tech

2. **Wait for DNS to propagate:**
   - Usually takes 5-30 minutes
   - Can take up to 48 hours (rare)

3. **Verify HTTPS:**
   - After enabling custom domain, wait 5-10 minutes
   - Then enable "Enforce HTTPS" in GitHub Pages settings

4. **Test your site:**
   - https://nikitasharma.tech (your custom domain)
   - https://nikitashrma16.github.io/nikitasharma_portfolio/ (GitHub Pages URL)

## 🔒 Security: Revoke Old Token

**IMPORTANT:** Revoke the token you shared earlier:
1. Go to: https://github.com/settings/tokens
2. Find and delete the old token
3. Keep only the new one with workflow scope

## 🎉 You're Done!

After DNS propagates, your portfolio will be live at:
- **https://nikitasharma.tech**
- **https://www.nikitasharma.tech** (if you set up www subdomain)

The site will automatically redeploy whenever you push changes to the `main` branch!
