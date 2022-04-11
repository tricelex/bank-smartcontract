import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const BankContractFactory = await ethers.getContractFactory("Bank");
  const BankContract = await BankContractFactory.deploy();

  await BankContract.deployed();
  console.log("BankContract deployed to:", BankContract.address);
  console.log("BankContract owner address:", owner.address);
}

main()
  .then(() => process.exit(0))

  .catch((error) => {
    console.error(error);

    process.exit(1);
  });
