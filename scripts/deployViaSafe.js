const fs = require('fs');
const { ethers } = require('hardhat');
const Safe = require('@gnosis.pm/safe-core-sdk').default;
const EthersAdapter = require('@gnosis.pm/safe-ethers-lib').default;

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  const owner = new ethers.Wallet(process.env.BASE_OWNER_KEY, provider);
  const ethAdapter = new EthersAdapter({ ethers, signer: owner });
  const safeSdk = await Safe.create({ ethAdapter, safeAddress: process.env.BASE_SAFE_ADDRESS });

  const contracts = JSON.parse(fs.readFileSync('contractsArgs.json', 'utf8'));

  for (const { name, args } of contracts) {
    console.log(`Preparing deploy for: ${name}`);
    const Factory = await ethers.getContractFactory(name, owner);
    const deployTx = Factory.getDeployTransaction(...args);

    // Build Safe transaction
    const safeTransactionData = {
      to: deployTx.to || ethers.constants.AddressZero,
      data: deployTx.data,
      value: "0"
    };

    const safeTransaction = await safeSdk.createTransaction(safeTransactionData);
    const txResponse = await safeSdk.executeTransaction(safeTransaction);
    const receipt = await txResponse.wait();

    console.log(`Deployed ${name} via Safe. TxHash: ${receipt.transactionHash}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
