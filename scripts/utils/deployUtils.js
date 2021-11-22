const emoji = require('node-emoji');
const { ethers } = require("hardhat");
const { DateHandler } = require('./dateUtils');

const displayContractInfos = async (_contractName, _contract) => {
    console.log(`\n[ ${_contractName}'s infos ]`);
    console.log(`\tAddress: ${_contract.address}\n`);
}

const deployContract = async (contractName) => {

    const Contract = await ethers.getContractFactory(contractName);
    try {
        const deployedContract = await Contract.deploy();
        displayContractInfos(contractName, deployedContract);
        console.log(`${emoji.emojify(":large_green_circle:")} ${contractName} deployed`);

        return deployedContract;
    } catch (error) {
        console.log(`${emoji.emojify(":red_circle:")} An error occurred during contract deployment ${error}`);
        return undefined;
    }
}

const intializeContract = async (_deployedContract) => {
    const dateHandler = new DateHandler();
    
    const start = await dateHandler.now() + 42;
    const end = dateHandler.add(1, "months");
    const ratio = ethers.utils.parseUnits("0.0000225", 18);
    const hardCap = ethers.utils.parseUnits("500", "ether");
    const contributionLimit = ethers.utils.parseUnits("5", "ether");

    const claimManagerAddress = ethers.constants.AddressZero;
    try {
       await _deployedContract.init(
            claimManagerAddress,
            start,
            end,
            ratio,
            hardCap,
            contributionLimit,
            { value:  ethers.utils.parseUnits("5", "ether")}
        );
        console.log(`${emoji.emojify(":large_green_circle:")} Staking Pool initialized \n`);
    } catch (error) {
        console.log(`\n${emoji.emojify(":red_circle:")} An error occurred during contract initialization :\n\t ==> ${error}`);
    }
}

module.exports = {
    deployContract,
    intializeContract,
}
