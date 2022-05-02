<h1 align="center">
  degenDeploy
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/node-v16.14.0-orange"></img>
  <img src="https://img.shields.io/badge/npm-v8.3.1-pink"></img>
</p>

<p align="center">🍄 In this app, we deploy a contract as an anon to the harmony testnet, using zero knowledge proofs 🍄</p>

<p align="center">🍄 This tool will do it all for you, except the physical IP handling. For that you will need a burner computer and an internet cafe 🍄</p>

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

The repo has been setup with the proving and verifier keys generated from tornado cash's trusted setup ceremony

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

## Add deposit to mixer

> `depositNativeAnchor.js`: This script will make a deposit to the mixer and return the secret note used to withdraw, using funds from the wallet in `.env`

> > note: you should have at least `0.1 ONE` tokens for this

```
cd ~/degenDeploy/scripts
node depositNativeAnchor.js 0x00C40795A6646694899F2Df73c0B51b8E3C666a9
```

> `.secretNote`: this is updated when  `depositNativeAnchor.js` is called

## Fund burner account

> `withdrawNativeAnchor.js`: This script will withdraw from the mixer, and deposit to `.burnerAddress`

> >  note: this will not work until many people have committed deposits to the contract ... you may have to be patient!
```
cd ~/degenDeploy/scripts
node withdrawNativeAnchor.js 0x00C40795A6646694899F2Df73c0B51b8E3C666a9
```

## Deploy new contract with burner wallet

```
cd ~/degenDeploy/deployer
npx hardhat run scripts/deploy.js --network harmony
```

> deploys `test.sol`

-----------

The majority of this repo forked from [webb protocol](https://github.com/webb-tools/tornado-core)

----------
----------

# IPFS

To host this on IPFS, you can use the WebUI by [following this explanation](https://docs.ipfs.io/how-to/command-line-quick-start/#prerequisites), and then cloning this repo and importing it to your node in the `FILES` tab of the WebUI, and pinning the files to the node

-----------

# mainnet deployment details

> on [harmony explorer](https://explorer.harmony.one/), search for: 

`hasher: 0x55eAd9DC9Af0D08F84311d9F29CE66f91752F0CC`

`verifier: 0x219027864f07CE643D1C59428ec711f1dA52a6BE`

`nativeAnchor: 0x00C40795A6646694899F2Df73c0B51b8E3C666a9`

----------
