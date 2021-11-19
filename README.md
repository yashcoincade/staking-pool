# Staking Pool v1

This repository contains the implementation of the staking pool with hourly compounding, hardcap, contribution limits and expiry date.

## Building

In order to build after a successful `clone`:

* npm install
* npm run compile

## Testing

* npm run test

## Local deployment

* npm run deploy:dev

## Volta deployment steps

* Create a `.env` file and set the variable
>DEPLOYER_PRIV_KEY = <private_key>
* Make sure the corresponding address has enough funds on `Volta` testnet. If needed, get some `Volta tokens (VT) ` on [Volta faucet](https://voltafaucet.energyweb.org/).

* run following command
> `npm deploy:volta`

More information to come...
