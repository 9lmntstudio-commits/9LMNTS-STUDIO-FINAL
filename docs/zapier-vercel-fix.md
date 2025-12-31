# ZAPIER AUTOMATION WORKFLOW - Vercel.json Fix

## TRIGGER: File Creation in GitHub
- **Trigger**: New commit pushed to 9LMNTS-STUDIO-FINAL repository
- **Filter**: Only when vercel.json file is modified

## ACTION 1: Validate JSON
- **Action**: Use JSON Validator API
- **Input**: Raw vercel.json content from GitHub
- **Output**: Validation result + Clean JSON

## ACTION 2: Fix JSON Formatting
- **Action**: Use Code by Zapier or JavaScript
- **Code**: 
```javascript
// Clean and fix JSON formatting
const cleanJson = (input) => {
  try {
    // Remove line breaks and extra spaces
    const cleaned = input.replace(/\s+/g, ' ').trim();
    const parsed = JSON.parse(cleaned);
    return JSON.stringify(parsed, null, 2);
  } catch (error) {
    return '{"version": 2, "name": "9LMNTS-ULTIMATE", "builds": [{"src": "apps/website/package.json", "use": "@vercel/static-build", "config": {"distDir": "dist"}}], "routes": [{"src": "/event-os", "dest": "/apps/website"}, {"src": "/event-os/culture-clash", "dest": "/apps/website"}, {"src": "/event-os/pitch-battle", "dest": "/apps/website"}, {"src": "/event-os/runway", "dest": "/apps/website"}, {"src": "/event-os/sports-clash", "dest": "/apps/website"}, {"src": "/(.*)", "dest": "/apps/website/$1"}]}';
  }
};
```

## ACTION 3: Commit Fixed JSON
- **Action**: GitHub Commit
- **Repository**: 9lmntstudio-commits/9LMNTS-STUDIO-FINAL
- **File**: vercel.json
- **Message**: "fix: Auto-correct vercel.json formatting via Zapier automation"

## ACTION 4: Trigger Vercel Redeploy
- **Action**: Vercel API Call
- **Endpoint**: POST /v13/deployments
- **Project**: 9LMNTS-ULTIMATE
- **Result**: Automatic redeploy with fixed configuration

## BACKUP PLAN: Manual Fix
If automation fails, use this manual JSON:
```json
{
  "version": 2,
  "name": "9LMNTS-ULTIMATE",
  "builds": [
    {
      "src": "apps/website/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/event-os",
      "dest": "/apps/website"
    },
    {
      "src": "/event-os/culture-clash",
      "dest": "/apps/website"
    },
    {
      "src": "/event-os/pitch-battle",
      "dest": "/apps/website"
    },
    {
      "src": "/event-os/runway",
      "dest": "/apps/website"
    },
    {
      "src": "/event-os/sports-clash",
      "dest": "/apps/website"
    },
    {
      "src": "/(.*)",
      "dest": "/apps/website/$1"
    }
  ]
}
```

## SETUP INSTRUCTIONS:
1. Create Zapier account
2. Connect GitHub and Vercel accounts
3. Set up webhook trigger for GitHub pushes
4. Configure JSON validation and fixing steps
5. Test with sample invalid JSON
6. Activate workflow

## ALTERNATIVE: Use GitHub Actions
Create `.github/workflows/fix-vercel.yml`:
```yaml
name: Fix vercel.json
on:
  push:
    paths:
      - 'vercel.json'
jobs:
  fix-vercel:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Fix JSON formatting
        run: |
          python3 -c "
import json
with open('vercel.json', 'r') as f:
    data = json.load(f)
with open('vercel.json', 'w') as f:
    json.dump(data, f, indent=2)
"
      - name: Commit fix
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add vercel.json
          git commit -m "fix: Auto-format vercel.json"
          git push
```
