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

-----------

## Configuration files 🛠️

Before starting, you should add your funding wallet to `.env.example`, then do

```
cp .env.example .env 
```

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

> `.burnerAddress` / `.burnerPrivate`: these are updated when a new burner is created

## Deploy and fund mixer

> `deployNativeAnchor.js`: This script will deploy a new mixer, using the wallet in `.env`.

> `multipleDeposit.js`: This script will fund a new mixer with lots of harmonyONE, using the wallet in `.env`. 
>  > NOTE: this is obviously not what should be done in production, as it is obvious who is adding and removing funds. In production, all deposits should come from different addresses. This is for demo purposes.

```
cd scripts
node deployNativeAnchor.js
node multipleDeposit.js
```

> `.addressNativeAnchor`: this is the mixer address, updated on new deployments

## Add deposit to mixer

> `depositNativeAnchor.js`: This script will make a deposit to the mixer and return the secret note used to withdraw, using funds from the wallet in `.env`.

```
node depositNativeAnchor.js
```

> `.secretNote`: this is updated when  `depositNativeAnchor.js` is called

## Fund burner account

> `withdrawNativeAnchor.js`: This script will withdraw from the mixer, and deposit to `.burnerAddress`.

```
node withdrawNativeAnchor.js
```

## Deploy new contract with burner wallet

```
cd ~/degenDeploy/deployer
npx hardhat run scripts/deploy.js --network harmony
```

> deploys `test.sol`

-----------

# IPFS

To host this on IPFS, you can use the WebUI by [following this explanation](https://docs.ipfs.io/how-to/command-line-quick-start/#prerequisites), and then cloneing this repo and importing it to your node in the `FILES` tab of the WebUI.

-----------

The majority of this repo forked from [webb protocol](https://github.com/webb-tools/tornado-core)
