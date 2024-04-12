import { Web3 } from 'web3';
import {
  privateKeyToAddress,
  signTransaction,
  Transaction,
} from 'web3-eth-accounts';

// Replace with your own provider in case of rate limit or following provider unavailability
const web3 = new Web3('https://eth.llamarpc.com');

/**
 * Following has demostration of few Web3 Wallet and Accounts methods, for more details visit :
 * https://docs.web3js.org/libdocs/Accounts
 */

(async () => {
  // Generate and returns a Web3Account object that includes the private and public key
  const account = web3.eth.accounts.create();
  console.log(account.address);

  // Decrypt a v3 keystore JSON, and creates the account.
  web3.eth.accounts
    .decrypt(
      {
        version: 3,
        id: 'c0cb0a94-4702-4492-b6e6-eb2ac404344a',
        address: 'cda9a91875fc35c8ac1320e098e584495d66e47c',
        crypto: {
          ciphertext:
            'cb3e13e3281ff3861a3f0257fad4c9a51b0eb046f9c7821825c46b210f040b8f',
          cipherparams: { iv: 'bfb43120ae00e9de110f8325143a2709' },
          cipher: 'aes-128-ctr',
          kdf: 'scrypt',
          kdfparams: {
            n: 8192,
            r: 8,
            p: 1,
            dklen: 32,
            salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
          },
          mac: 'efbf6d3409f37c0084a79d5fdf9a6f5d97d11447517ef1ea8374f51e581b7efd',
        },
      } as any,
      '123'
    )
    .then(console.log);

  // Encrypt a private key with a password, returns a V3 JSON Keystore
  web3.eth.accounts
    .encrypt(
      '0x67f476289210e3bef3c1c75e4de993ff0a00663df00def84e73aa7411eac18a6',
      '123',
      {
        n: 8192,
        iv: web3.utils.hexToBytes('0xbfb43120ae00e9de110f8325143a2709'),
        salt: web3.utils.hexToBytes(
          '0x210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd'
        ),
      }
    )
    .then(console.log);

  // Hash given message
  console.log(web3.eth.accounts.hashMessage('Hello world'));
  console.log(
    web3.eth.accounts.hashMessage(web3.utils.utf8ToHex('Hello world'))
  ); // Will be hex decoded in hashMessage

  // Private key to account
  console.log(
    web3.eth.accounts.privateKeyToAccount(
      '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709'
    )
  );

  // Private key to address
  console.log(
    privateKeyToAddress(
      '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709'
    )
  );

  // Recover the Ethereum address which was used to sign the given data
  const data = 'Some data';
  const sigObj = web3.eth.accounts.sign(
    data,
    '0xbe6383dad004f233317e46ddb46ad31b16064d14447a95cc1d8c8d4bc61c3728'
  );
  console.log(sigObj);

  // Recover the Ethereum address which was used to sign the given RLP encoded transaction
  console.log(
    web3.eth.accounts.recoverTransaction(
      '0xf869808504e3b29200831e848094f0109fc8df283027b6285cc889f5aa624eac1f55843b9aca008025a0c9cf86333bcb065d140032ecaab5d9281bde80f21b9687b3e94161de42d51895a0727a108a0b8d101465414033c3f705a9c7b826e596766046ee1183dbc8aeaa68'
    )
  );

  // Sign arbitrary data with a given private key.
  console.log(
    web3.eth.accounts.sign(
      'Some data',
      '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318'
    )
  );

  // Sign an Ethereum transaction with a given private key.
  const result = signTransaction(
    new Transaction({
      to: '0x118C2E5F57FD62C2B5b46a5ae9216F4FF4011a07',
      value: '0x186A0',
      gasLimit: '0x520812',
      gasPrice: '0x09184e72a000',
      data: '',
      nonce: 0,
    }),
    '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318'
  );
  console.log(result);

  // Add an account using a private key or account object to the web3 wallet.
  const wallet = web3.eth.accounts.wallet.add(
    '0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387'
  );
  console.log(wallet);

  // Clear the wallet
  const clearResult = web3.eth.accounts.wallet.clear();
  console.log(clearResult);

  // Generate one or more accounts in the wallet. If wallets already exist they will not be overridden.
  const createResult = web3.eth.accounts.wallet.create(2);
  console.log(createResult);

  // Decrypt keystore v3 objects.
  web3.eth.accounts.wallet
    .decrypt(
      [
        {
          version: 3,
          id: '83191a81-aaca-451f-b63d-0c5f3b849289',
          address: '06f702337909c06c82b09b7a22f0a2f0855d1f68',
          crypto: {
            ciphertext:
              '7d34deae112841fba86e3e6cf08f5398dda323a8e4d29332621534e2c4069e8d',
            cipherparams: { iv: '497f4d26997a84d570778eae874b2333' },
            cipher: 'aes-128-ctr',
            kdf: 'scrypt',
            kdfparams: {
              dklen: 32,
              salt: '208dd732a27aa4803bb760228dff18515d5313fd085bbce60594a3919ae2d88d',
              n: 262144,
              r: 8,
              p: 1,
            },
            mac: '0062a853de302513c57bfe3108ab493733034bf3cb313326f42cf26ea2619cf9',
          },
        },
        {
          version: 3,
          id: '7d6b91fa-3611-407b-b16b-396efb28f97e',
          address: 'b5d89661b59a9af0b34f58d19138baa2de48baaf',
          crypto: {
            ciphertext:
              'cb9712d1982ff89f571fa5dbef447f14b7e5f142232bd2a913aac833730eeb43',
            cipherparams: { iv: '8cccb91cb84e435437f7282ec2ffd2db' },
            cipher: 'aes-128-ctr',
            kdf: 'scrypt',
            kdfparams: {
              dklen: 32,
              salt: '08ba6736363c5586434cd5b895e6fe41ea7db4785bd9b901dedce77a1514e8b8',
              n: 262144,
              r: 8,
              p: 1,
            },
            mac: 'd2eb068b37e2df55f56fa97a2bf4f55e072bef0dd703bfd917717d9dc54510f0',
          },
        },
      ],
      'test'
    )
    .then(console.log);

  // Encrypt all wallet accounts to an array of encrypted keystore v3 objects.
  web3.eth.accounts.wallet.create(1);
  web3.eth.accounts.wallet.encrypt('abc').then(console.log);

  // Remove an account from the wallet.
  web3.eth.accounts.wallet.add(
    '0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387'
  );
  web3.eth.accounts.wallet.remove('0x85D70633b90e03e0276B98880286D0D055685ed7');
})();
