import { BlockTags, FMT_BYTES, FMT_NUMBER, Web3 } from 'web3';

// Replace with your own provider in case of rate limit or following provider unavailability
const web3 = new Web3('https://eth.llamarpc.com');

/**
 * Following has demostration of few Web3 Eth methods, for more details visit :
 * https://docs.web3js.org/libdocs/Web3Eth
 */

(async () => {
  // Calculates the current Fee Data
  web3.eth.calculateFeeData().then(console.log);

  // Simulates the transaction within the EVM to estimate the amount of gas to be used by the transaction.
  const transaction = {
    from: '0x0000000000000000000000000000000000000000',
    to: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
    value: '0x1',
    nonce: '0x1',
    type: '0x0',
  };

  web3.eth.estimateGas(transaction).then(console.log);
  web3.eth
    .estimateGas(transaction, undefined, {
      number: FMT_NUMBER.NUMBER,
      bytes: FMT_BYTES.HEX,
    })
    .then(console.log);

  // A list of accounts the node controls
  web3.eth.getAccounts().then(console.log);

  // Get the balance of an address at a given block.
  web3.eth
    .getBalance('0x0000000000000000000000000000000000000000')
    .then(console.log);
  // Get balance in Hex
  web3.eth
    .getBalance('0x0000000000000000000000000000000000000000', undefined, {
      number: FMT_NUMBER.HEX,
      bytes: FMT_BYTES.HEX,
    })
    .then(console.log);

  // Get block
  web3.eth.getBlock(BlockTags.LATEST).then(console.log);
  // Get block with data formatted to hex
  web3.eth
    .getBlock(BlockTags.LATEST, true, {
      number: FMT_NUMBER.HEX,
      bytes: FMT_BYTES.HEX,
    })
    .then(console.log);

  // Get current block number
  web3.eth.getBlockNumber().then(console.log);
  // Get current block number in hex
  web3.eth
    .getBlockNumber({ number: FMT_NUMBER.HEX, bytes: FMT_BYTES.HEX })
    .then(console.log);

  // Get Tx count
  web3.eth
    .getBlockTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1')
    .then(console.log);

  // Get chain id
  web3.eth.getChainId().then(console.log);

  // Get the code at a specific address.
  web3.eth
    .getCode('0xdAC17F958D2ee523a2206206994597C13D831ec7')
    .then(console.log);

  // Get Fee history
  web3.eth
    .getFeeHistory(4, BlockTags.FINALIZED, [0, 25, 75, 100])
    .then(console.log);

  // Get gas price
  web3.eth.getGasPrice().then(console.log);
  // Get gas price in hex
  web3.eth
    .getGasPrice({ number: FMT_NUMBER.HEX, bytes: FMT_BYTES.HEX })
    .then(console.log);

  // Get max priority fee per gas
  web3.eth.getMaxPriorityFeePerGas().then(console.log);

  // Get logs
  /* 
    valid filter object in following to see results
    web3.eth.getPastLogs({
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        topics: ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"]
    }).then(console.log);
    */

  // Get transaction
  web3.eth
    .getTransaction(
      '0x1ec3a7f535bfe63516830350f30aa117ae15e02555d30b7f9e215f57b50be1dc'
    )
    .then(console.log);

  // Get transaction count
  web3.eth
    .getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1')
    .then(console.log);

  // Get transaction from block
  web3.eth.getTransactionFromBlock(BlockTags.LATEST, 0).then(console.log);

  // Get transaction receipt
  web3.eth
    .getTransactionReceipt(
      '0x1ec3a7f535bfe63516830350f30aa117ae15e02555d30b7f9e215f57b50be1dc'
    )
    .then(console.log);

  // Send signed transaction
  /* 
    //Replace following with valid transaction for sending Tx
     const signedTransaction = "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f";
     web3.eth.sendSignedTransaction(signedTransaction).then(console.log);
    */

  // Send transaction
  /* 
    Replace following with valid transaction and account with funds for sending Tx
    const transaction = {
        from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
        to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
        value: '0x1'
      }
      web3.eth.sendTransaction(transaction).then(console.log);
       */

  // Make the Ethcall using web3.eth.call
  /* 
    Replace following with valid transaction for sending eth call
    const tx = {
        from: '0x0000000000000000000000000000000000000000',
        data: '0xa9059cbb0000000000000000000000007e047f4129fde52c067b68506e080ce06c173d270000000000000000000000000000000000000000000000000000000077359400',
        to: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      };
      web3.eth.call(tx).then(console.log);;
    */

  // This method generates an access list for a transaction.
  /* Replace following with valid transaction for getting access list 
    web3.eth.createAccessList({
        from: '0xDe95305a63302C3aa4d3A9B42654659AeA72b694',
        data: '0x9a67c8b100000000000000000000000000000000000000000000000000000000000004d0',
        gasPrice: '0x3b9aca00',
        gas: '0x3d0900',
        to: '0x940b25304947ae863568B3804434EC77E2160b87'
        })
        .then(console.log);
    */
})();
