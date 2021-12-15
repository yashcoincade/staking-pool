#!/bin/bash
sourceCode=$(cat flattened_contracts_patronKYC)

echo $sourceCode

curl -d "{addressHash:'0xbD3720EF6E91321afb68D751412211a644cd11b1', compilerVersion:'0.8.6+commit.11564f7e', contractSourceCode:sourceCode, name:'StakingPool', optimization:false}" -H "Content-Type: application/json" -X POST "https://blockscout.com/poa/sokol/api?module=contract&action=verify"