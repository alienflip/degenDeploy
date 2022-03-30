const {promises:fs} = require('fs');

const Accounts = require('web3-eth-accounts');

const accounts = new Accounts('wss://api.s0.b.hmny.io');

async function createBurnerAccount() {
  var burnerAccount = accounts.create();
  await fs.writeFile('./.burnerPrivate', burnerAccount.privateKey, (err) => {
    if (err) throw err;
  });
  await fs.writeFile('./.burnerAddress', burnerAccount.address, (err) => {
    if (err) throw err;
  });
}

createBurnerAccount()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});