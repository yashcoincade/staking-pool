const path = require('path');
const axios = require("axios");
const { readFileSync } = require('fs');

const flattenedContract = path.join(__dirname, '/utils/verifyUtils');

const verifyContract = async (_verifyParameters) => {
    const baseUrlApi = "https://volta-explorer.energyweb.org/api/";
    
   return (await axios({
       method: 'post',
       url:`${baseUrlApi}`,
       data: _verifyParameters,
    }));
}

const getSourceCode = () => {
    const sourceCode = readFileSync(flattenedContract, { encoding: 'utf-8'});
    return sourceCode;
}

const verifyParameters = {
    module: "contract",
    action: "verify",
    addressHash: "0xAB3929D0212d7C4CD8269C658C334AC888A0130F",
    name: "StakingPool",
    compilerVersion: "0.8.6+commit.11564f7e",
    optimization: false,
    contractSourceCode: getSourceCode(),
};

(async function verify(){
    const verificationReport = await verifyContract(verifyParameters);

   console.log("Verification Report : ", verificationReport);
})()