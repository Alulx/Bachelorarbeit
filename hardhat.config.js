require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
const { ALCHEMY_API_KEY, USER2_PRIVATE_KEY } = process.env;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.13" },
      { version: "0.7.6" },
      { version: "0.6.6" }
    ]
  },
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
      chainId: 1337 // We set 1337 to make interacting with MetaMask simpler
    },
    goerli: {
      url: ALCHEMY_API_KEY,
      accounts: [`0x${USER2_PRIVATE_KEY}`]
    }
  }
};
