---
on:
  schedule:
    - cron: "0 10 * * 1"   # Monday 10 AM UTC
    - cron: "0 10 * * 4"   # Thursday 10 AM UTC
  workflow_dispatch:
permissions:
  contents: read
  actions: read
  issues: read
  pull-requests: read
engine: copilot
tools:
  edit:
  bash:
    - "npm outdated:*"
    - "npm update:*"
    - "npm install:*"
    - "npm ls:*"
    - "npm run build:*"
    - "cat package.json"
    - "cat package-lock.json"
network:
  allowed:
    - node
safe-outputs:
  create-pull-request:
    labels: [aw]
    draft: false
timeout-minutes: 15
---

# Dependency Update Agent

You are a dependency management agent for this Node.js project.

## Task

1. **Check for outdated dependencies**
   Run `npm outdated` to identify packages with available updates.

2. **Update dependencies**
   If updates are available:
   - Run `npm update` to update packages within semver ranges
   - For major version updates, use `npm install <package>@latest` selectively
   - Prefer updating devDependencies first, then dependencies

3. **Validate changes**
   - Ensure `package.json` and `package-lock.json` are updated correctly
   - Run `npm ls` to verify the dependency tree is valid
   - Run `npm run build` to ensure the project still builds successfully

4. **Create a pull request**
   If any dependencies were updated and validation passes, create a PR with:
   - Title: "chore(deps): update dependencies"
   - Body: List of updated packages with old → new versions

## Guidelines

- Only update packages that have available updates
- If no updates are available, report completion without creating a PR
- If the build fails after updates, do not create a PR and report the failure
- Do not modify any other files besides package.json and package-lock.json
