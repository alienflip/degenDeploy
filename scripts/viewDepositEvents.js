const ethers = require('ethers');
require('dotenv').config({ path: '../.env' });
const fs = require('fs');

let provider = new ethers.providers.JsonRpcProvider(`${process.env.ENDPOINT}`);

const contractAddress = fs.readFileSync("../.addressNativeAchor").toString().trim();
const anchorAbi = require("../build/contracts/Anchor.json");

// Get all emitted event information about deposits
async function readDeposits() {

  const anchorInterface = new ethers.utils.Interface(anchorAbi.abi);
  const anchorInstance = new ethers.Contract(contractAddress, anchorAbi.abi, provider);

  const depositFilterResult = await anchorInstance.filters.Deposit();

  const block = await provider.getBlock();
  
  const logs = await provider.getLogs({
    fromBlock: block.number - 1000,
    toBlock: 'latest',
    address: contractAddress,
    topics: [depositFilterResult.topics]
  });

  for (var i=0; i<logs.length; i++)
  {
    console.log(anchorInterface.parseLog(logs[i]));
  }
  
}

readDeposits();
