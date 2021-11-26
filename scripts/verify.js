const path = require('path');
const axios = require("axios");
const { readFileSync } = require('fs');

const flattenedContract = path.join(__dirname, '/utils/flattened_contracts');

const verifyContract = async (_verifyParameters) => {
    const baseUrlApi = "https://volta-explorer.energyweb.org/api/";
    
   return (await axios({
       method: 'post',
       url:`${baseUrlApi}`,
       data: _verifyParameters,
    }));
}

const getSourceCode = () => {
    const sourceCode = readFileSync(flattenedContract);
    return sourceCode;
}

const verifyParameters = {
    module: "contract",
    action: "verify",
    addressHash: "0x550639901Ddd5C1610CF31e353F9Df19c261C672",
    name: "StakingPool",
    compilerVersion: "0.8.6+commit.11564f7e",
    optimization: false,
    contractSourceCode: getSourceCode(),
};

(async function verify(){
    const verificationReport = await verifyContract(verifyParameters);

   console.log("Verification Report : ", verificationReport);
})()
