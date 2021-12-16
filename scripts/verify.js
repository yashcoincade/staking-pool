const path = require('path');
const axios = require("axios");
const { readFileSync } = require('fs');

const flattenedContract = path.join(__dirname, '/utils/flattened_contracts_patronKYC');

const verifyContract = async (_verifyParameters) => {
    const baseUrlApi = "https://volta-explorer.energyweb.org/api/";

    const result = await axios({
        method: 'post',
        url:`${baseUrlApi}`,
        data: _verifyParameters,
        // data: JSON.stringify(_verifyParameters),
        headers: {
            'Content-Type': 'application/json',
        }
     });

   return result;
}

const getSourceCode = () => {
    const sourceCode = readFileSync(flattenedContract, {encoding: 'utf-8'});
    console.log("SOURCE Code >>> ", sourceCode);
    return sourceCode;
}

const verifyParameters = {
    module: "contract",
    action: "verify",
    addressHash: "0x13847EA5BEE8fcaEEDE2F40b77DFD4c9d8F0792a",
    name: "testVerif",
    compilerVersion: "0.8.6+commit.11564f7e",
    optimization: false,
    contractSourceCode: getSourceCode(),
    autodetectConstructorArguments: false,
    constructorArguments: "000000000000000000000000000000000000000000000000000000000000002a",
    //onChain Constructor args 000000000000000000000000162f8241694fa4a2345cd2504ca631eaf7d3ec40000000000000000000000000561785174df7f564f2591ba52b253c0f663427ab
    // evmVersion: "istanbul",
};

(async function verify(){
    const verificationReport = await verifyContract(verifyParameters);

   console.log("Verification Report : ", verificationReport);
})()
