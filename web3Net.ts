import { Web3 } from 'web3';

const web3 = new Web3('https://eth.llamarpc.com');

/**
 * Following has demostration of few Web3 Net methods, for more details visit :
 * https://docs.web3js.org/libdocs/Net
 */

(async () => {
  // Get the current network ID
  web3.eth.net.getId().then(console.log);

  // Get the number of peers connected to.
  web3.eth.net.getPeerCount().then(console.log);

  // Check if the node is listening for peers
  //web3.eth.net.isListening().then(console.log);
})();
