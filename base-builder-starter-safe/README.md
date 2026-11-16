# Base Builder Starter (Gnosis Safe Integration)

This repo is packaged for automated multi-contract deployment **via a Gnosis Safe** on Base, with auto-verification on BaseScan and a one-command first-activity script that also publishes a Farcaster frame.

**Important:** Do NOT commit any secrets. Set GitHub repository secrets as described below before running workflows.

## Repo contents
- `contracts/` - example contracts (HelloWorld, Token, MyOtherContract)
- `contractsArgs.json` - constructor args for each contract
- `scripts/deployViaSafe.js` - deployment script that submits transactions to your Gnosis Safe
- `.github/workflows/deploy-safe.yml` - GitHub Actions workflow to deploy via Safe and verify on BaseScan
- `first-activity-full.sh` - one-command script to trigger first-activity (commit & push + warpcast publish)
- `frames/frame.js` - Farcaster frame starter
- `.env.example` - template for local testing (do not commit real keys)

## GitHub Secrets (add these in repo Settings → Secrets → Actions)
- `BASE_SAFE_ADDRESS`  - your Base Gnosis Safe address
- `BASE_OWNER_KEY`     - EOA owner private key used to sign Safe transactions (keep minimal funds)
- `RPC_URL`            - e.g. https://mainnet.base.org
- `BASESCAN_API_KEY`   - API key from BaseScan for verification

## How it works
1. Push to `main` triggers the workflow.
2. Workflow compiles contracts, prepares deploy txns, submits them to your Safe via the Safe SDK, waits for execution, and then verifies on BaseScan.
3. Use `first-activity-full.sh` to commit a README update and publish the frame with Warpcast CLI (manual set up required for Warpcast CLI).

## WARNING
- `BASE_OWNER_KEY` is an EOA key **used only to sign Safe transactions**. Protect this key carefully and keep minimal funds in it.
- Do not expose your Safe owner private key in public places.
