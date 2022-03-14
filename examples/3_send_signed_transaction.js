var Tx = require("ethereumjs-tx").Transaction;
const Web3 = require("web3");
const { rpcURL, address, contractAddress, account2Address, account2PrivateKey } = require("./env"); // Your RCkP URL goes here
const web3 = new Web3(rpcURL);

// const account1 = ""; // Your account address 1
// const account2 = ""; // Your account address 2

const privateKey1 = Buffer.from(account2PrivateKey, "hex");
// const privateKey2 = Buffer.from("YOUR_PRIVATE_KEY_2", "hex");

web3.eth.getTransactionCount(account2Address, (err, txCount) => {
  console.log(txCount);
  console.log(txCount);
  console.log(txCount);
  // Build the transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: address,
    value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("1", "gwei")),
  };

  web3.eth.accounts.signTransaction(txObject, account2PrivateKey).then(function (value) {
    web3.eth.sendSignedTransaction(value.rawTransaction).then(function (response) {
      console.log("response:" + JSON.stringify(response, null, " "));
    });
  });

  /*
  // Sign the transaction
  const tx = new Tx(txObject);
  tx.sign(privateKey1);
  const serializedTx = tx.serialize();
  const raw = "0x" + serializedTx.toString("hex");

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log(err);
    console.log("txHash:", txHash);
    // Now go check etherscan to see the transaction!
  });
  */
});
