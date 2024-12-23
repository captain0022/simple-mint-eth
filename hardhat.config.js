require("@nomicfoundation/hardhat-toolbox");

const { vars } = require('hardhat/config')


const INFURA_API_KEY = "00ecddcb756d41b1a6f2a4da347dd52f";

// const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");
const SEPOLIA_PRIVATE_KEY = '784865b0b990f79514ae62ededec7185f9197e39101c858dd158401c23e9fd4d';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://base-sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`],
    },
  },
};
