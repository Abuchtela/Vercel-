require('@nomiclabs/hardhat-ethers');
require('@nomicfoundation/hardhat-verify');
require('dotenv').config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    base: {
      url: process.env.RPC_URL || "https://mainnet.base.org",
      chainId: 8453
    }
  },
  etherscan: {
    apiKey: {
      base: process.env.BASESCAN_API_KEY
    },
    customChains: [
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org"
        }
      }
    ]
  }
};
