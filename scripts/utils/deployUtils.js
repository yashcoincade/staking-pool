const { ethers } = require("hardhat");

const displayContractInfos = async (_contractName, _contract) => {
    console.log(`\n[ ${_contractName}'s infos ]`);
    console.log(`\tAddress: ${_contract.address}\n`);
}

const deployContract = async (contractName) => {

    const Contract = await ethers.getContractFactory(contractName);
    try {
        const deployedContract = await Contract.deploy();
        displayContractInfos(contractName, deployedContract);
        console.log(`${contractName} deployed`);

        return deployedContract;
    } catch (error) {
        console.log("An error occurred during contract deployment : ", error);
        return undefined;
    }
}

const intializeContract = async (_deployedContract) => {
    const { timestamp } = await ethers.provider.getBlock();
    const start = timestamp + 5;
    const end = start + 24 * 3600;
    const ratio = ethers.utils.parseUnits("0.0000225", 18);
    const hardCap = ethers.utils.parseUnits("50000", "ether");
    const contributionLimit = ethers.utils.parseUnits("5000", "ether");
    const claimManagerAddress = ethers.constants.AddressZero;

    try {
        await _deployedContract.init(
            claimManagerAddress,
            start,
            end,
            ratio,
            hardCap,
            contributionLimit,
            { value: contributionLimit }
        );
        console.log("Staking Pool initialized \n");
    } catch (error) {
        console.log("An error occurred during contract initialization : ", error);
    }
}

module.exports = {
    deployContract,
    intializeContract,
}