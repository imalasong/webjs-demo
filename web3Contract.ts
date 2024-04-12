import { Web3 } from 'web3';

const web3 = new Web3('https://eth.llamarpc.com');

/**
 * Following has demostration of few Web3 Contract methods, for more details visit :
 * https://docs.web3js.org/libdocs/Contract
 */

(async () => {
  const erc20Address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

  // create contract instance
  const contract1 = new web3.eth.Contract(getERC20ABI(), erc20Address, {
    gasPrice: '12345678',
    from: '0x28c6c06298d514db089934071355e5743bf21d60',
  });

  // call method
  const callResult = await contract1.methods
    .balanceOf('0x28C6c06298d514Db089934071355E5743bf21d60')
    .call();
  console.log(callResult);

  // encode ABI
  const encodedABI = await contract1.methods
    .balanceOf('0x28C6c06298d514Db089934071355E5743bf21d60')
    .encodeABI();
  console.log(encodedABI);

  // create access list
  /*
   * //check and uncomment if provider supports this
   * const accessList = await contract1.methods.transfer("0xdAC17F958D2ee523a2206206994597C13D831ec7", 1).createAccessList();
   * console.log(accessList);
   */

  // estimate gas
  const gasEstimate = await contract1.methods
    .transfer('0xdAC17F958D2ee523a2206206994597C13D831ec7', 1)
    .estimateGas();
  console.log(gasEstimate);

  // send method, this will send actual transaction
  /*
   *
   *  contract1.methods.transfer("0xe902414F735c77D9105983F083DA15f7144a6241", 1)
   *      .send({from: '0xdAC17F958D2ee523a2206206994597C13D831ec7'})
   *  .on('transactionHash', console.log)
   *  .on('confirmation', console.log)
   *  .on('receipt', console.log)
   *  .on('error', console.log);
   */

  // clone contract
  const contract2 = contract1.clone();
  contract2.options.address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
  console.log(contract1.options.address !== contract2.options.address);

  // deploy contract
  /* 
    
    let myContract = new web3.eth.Contract(
        getERC20ABI()
    );
    
    const bytecode = '0x......'; // add contract byte code here

    myContract.deploy({
        data: bytecode,
        arguments: ['RedGoldCoin','R',8,100000] // Optional constructor arguments
      })
      .send({
            from: '0xFABB0ac9d68B0B445fB7357272Ff202C5651694a', // Replace with your own address
            value: '0x0'
        })
        .then((deployedContract) => {
            myContract = deployedContract;
            console.log('Contract deployed at address:', deployedContract.options.address);
                    })
        .catch((error) => {
            console.error('Error deploying contract:', error);
        });
     */
})();

function getERC20ABI() {
  return [
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_spender',
          type: 'address',
        },
        {
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_from',
          type: 'address',
        },
        {
          name: '_to',
          type: 'address',
        },
        {
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '_owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          name: 'balance',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_to',
          type: 'address',
        },
        {
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '_owner',
          type: 'address',
        },
        {
          name: '_spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
  ];
}
