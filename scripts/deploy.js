const {
  deployContract,
  intializeContract,
} = require("./utils/deployUtils");

async function main() {
  const stakingPoolContract = await deployContract("StakingPool");
  if (stakingPoolContract) {
   await intializeContract(stakingPoolContract);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
