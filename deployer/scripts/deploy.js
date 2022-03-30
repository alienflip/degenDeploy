const {promises:fs} = require('fs');

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Contract = await ethers.getContractFactory("test");
    const test = await Contract.deploy();
  
    console.log("test contract address:", test.address);
    await fs.writeFile('../.anonContractAddress', test.address, (err) => {
        if (err) throw err;
    });
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});