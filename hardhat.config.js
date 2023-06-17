require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
const { ALCHEMY_API_KEY, USER1_PRIVATE_KEY } = process.env;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      { version: '0.8.13' },
      { version: '0.7.6' },
      { version: '0.6.6' },
    ],
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337, // We set 1337 to make interacting with MetaMask simpler
    },
    goerli: {
      url: ALCHEMY_API_KEY,
      accounts: [`f0d8b6d93be15380d6132a73b4d5845a51849b12fe14f40dfde137c4a967b658`],
    },
  },
};
