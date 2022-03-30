require("@nomiclabs/hardhat-waffle");

const BURNER_PRIVATE_KEY = fs_.readFileSync(".burnerPrivate").toString().trim();

module.exports = {
  solidity: "0.7.6",
  networks: {
    harmony: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [`${BURNER_PRIVATE_KEY}`]
    }
  }
};