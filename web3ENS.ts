import { Web3 } from 'web3';

const web3 = new Web3('https://eth.llamarpc.com');

/**
 * Following has demostration of few Web3 ENS methods, for more details visit :
 * https://docs.web3js.org/libdocs/ENS
 */

(async () => {
  // Check if the current used network is synced and looks for ENS support there. Throws an error if not.
  web3.eth.ens.checkNetwork().then(console.log);

  // Resolve an ENS name to an Ethereum address.
  web3.eth.ens.getAddress('ethereum.eth').then(console.log);

  // Get the content hash object associated with an ENS node.
  web3.eth.ens.getContenthash('ethereum.eth').then(console.log);

  // Get the owner by the given name and current configured or detected Registry
  web3.eth.ens.getOwner('ethereum.eth').then(console.log);

  // Get the caching TTL (time-to-live) of an ENS name.
  web3.eth.ens.getTTL('ethereum.eth').then(console.log);

  // Check for record
  web3.eth.ens.recordExists('ethereum.eth').then(console.log);

  // Return true if the related Resolver does support the given signature or interfaceId.
  const supports = await web3.eth.ens.supportsInterface(
    'ethereum.eth',
    'addr(bytes32'
  );
  console.log(supports);
})();
