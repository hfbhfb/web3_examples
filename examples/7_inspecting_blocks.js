const Web3 = require("web3");
const { rpcURL, address, contractAddress, account2Address, account2PrivateKey, transitionBlockId } = require("./env"); // Your RCkP URL goes here
const web3 = new Web3(rpcURL);

// get latest block number
web3.eth.getBlockNumber().then(console.log);

// // get latest block
web3.eth.getBlock("latest").then(console.log);

// get latest 10 blocks
web3.eth.getBlockNumber().then((latest) => {
  for (let i = 0; i < 10; i++) {
    web3.eth.getBlock(latest - i).then(console.log);
  }
});

// get transaction from specific block
// const hash = "0x66b3fd79a49dafe44507763e9b6739aa0810de2c15590ac22b5e2f0a3f502073";
web3.eth.getTransactionFromBlock(transitionBlockId, 0).then(console.log);
