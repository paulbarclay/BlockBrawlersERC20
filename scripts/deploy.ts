// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const BlockBrawlersERC20 = await ethers.getContractFactory(
    "BlockBrawlersERC20"
  );

  const imaBridge = "0xD2aAA00500000000000000000000000000000000";

  const bbERC20 = await BlockBrawlersERC20.deploy(imaBridge);

  await bbERC20.deployed();

  console.log("BB ERC20 deployed to:", bbERC20.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
