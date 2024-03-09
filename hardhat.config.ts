import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "dotenv/config";

const {
  ETHERSCAN_API_KEY,
  INFURA_API_KEY,
  TESTNET_PRIVATE_KEY,
  MAINNET_PRIVATE_KEY,
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [TESTNET_PRIVATE_KEY!],
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [TESTNET_PRIVATE_KEY!],
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [MAINNET_PRIVATE_KEY!],
    },
  },
};

export default config;
