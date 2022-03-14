const Web3 = require("web3");
const { rpcURL, address } = require("./env"); // Your RCkP URL goes here
const web3 = new Web3(rpcURL);
web3.eth.getBalance(address, (err, wei) => {
  balance = web3.utils.fromWei(wei, "ether");
  console.log(balance);
  console.log(balance);
  console.log(balance);
});
