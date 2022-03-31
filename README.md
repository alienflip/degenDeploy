<h1 align="center">
  degenDeploy
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/node-v16.14.0-orange"></img>
  <img src="https://img.shields.io/badge/npm-v8.3.1-pink"></img>
</p>

<p align="center">🍄 In this app, we deploy a contract as an anon to the harmony testnet, using zero knowledge proofs 🍄</p>

<p align="center">🍄 This tool will do it all for you, except the physical IP handling. For that you will need a burner computer and an internet cafe. 🍄</p>

> Protocol 
> > The application will create a burner account, and then use a zero-knowledge mixer in order to fund the burner wallet, then deploy your contract anonymously with the new wallet

------------

## Install

```
git clone git@github.com:alienflip/degenDeploy.git
cd degenDeploy
```

## Configuration files 🛠️

Before starting, you should add your funding wallet to `.env.example`, then do

```
cp .env.example .env 
```

>
> `.addressNativeAnchor` : this is the mixer address, updted on new deployments
>
> `.secretNote` : this is updated when  `depositNativeAnchor.js` is called
>
> `.burnerAddress` / `.burnerPrivate` : these are updated when a new burner is created

## Build 👷

The repo has been setup with the proving and verifier keys generated from tornado cash's trusted setup ceremony.

```
npm i
truffle compile
cd deployer 
npm i
```

## Edit anon contract

> edit
`deployer/contracts/test.sol`

## Set up burner

```
cd ~/degenDeploy
node deployer/scripts/burner.js
```

## Deploy and fund mixer

```
cd scripts
node deployNativeAnchor.js
node multipleDeposit.js
```

## Add deposit to mixer

```
node depositNativeAnchor.js
```

## Fund burner account

```
node withdrawNativeAnchor.js
```

## Deploy new contract with burner wallet

> deploys `test.sol`

```
cd ~/degenDeploy/deployer
npx hardhat run scripts/deploy.js --network harmony
```

## Script legend

Some scripts have been provided in the `scripts/` directory to interact with mixer contracts.
To use these scripts, `cd scripts` and run `node <script> <...args>`. 

> deploying new mixer:

- `deployNativeAnchor.js`: This script will deploy a new mixer. The user may optionally provide the command-line arguments of addresses for the hasher and verifier, so as to not waste gas on redeployments. Simply modify the denomination to easily create mixers of different sizes, using the wallet in `.env`.

- `multipleDeposit.js`: This script will fund a new mixer with lots of harmonyONE, using the wallet in `.env`.

> using existing mixer:

- `depositNativeAnchor.js`: This script will make a deposit to the mixer at the passed in address and return the secret note used to withdraw, using funds from the wallet in `.env`.

- `withdrawNativeAnchor.js`: This script will withdraw from the mixer at the address given the secret note and recipient, and deposit to `burnerAddress`.

> majority of this repo forked from [webb protocol](https://github.com/webb-tools/tornado-core)
