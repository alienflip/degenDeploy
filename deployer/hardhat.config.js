require("@nomiclabs/hardhat-waffle");

const fs_ = require('fs');
const BURNER_PRIVATE_KEY = fs_.readFileSync("../.burnerPrivate").toString().trim();

module.exports = {
  solidity: "0.7.6",
  networks: {
    harmony: {
      url: `https://api.harmony.one`,
      accounts: [`${BURNER_PRIVATE_KEY}`]
    }
  }
};
