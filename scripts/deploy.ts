import { ethers } from "hardhat";

async function main() {
  // Fetch the contract factory
  const SnazzyCatToken = await ethers.getContractFactory("SnazzyCatToken");

  // Deploy the contract
  const snazzyCatToken = await SnazzyCatToken.deploy();

  // Wait for the deployment to finish
  await snazzyCatToken.waitForDeployment();

  console.log("SnazzyCat Token deployed to:", snazzyCatToken.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
