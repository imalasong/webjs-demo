import { Web3 } from 'web3';

const web3 = new Web3();

/**
 * Following has demostration of few Web3 ABI methods, for more details visit :
 * https://docs.web3js.org/libdocs/ABI
 */

(async () => {
  // Decode ABI-encoded log data and indexed topic data.
  const decodedLog = web3.eth.abi.decodeLog(
    [
      {
        type: 'string',
        name: 'myString',
      },
      {
        type: 'uint256',
        name: 'myNumber',
        indexed: true,
      },
      {
        type: 'uint8',
        name: 'mySmallNumber',
        indexed: true,
      },
    ],
    '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000748656c6c6f252100000000000000000000000000000000000000000000000000',
    [
      '0x000000000000000000000000000000000000000000000000000000000000f310',
      '0x0000000000000000000000000000000000000000000000000000000000000010',
    ]
  );
  console.log(decodedLog);

  // Decode an ABI encoded parameter.
  const decodedParam1 = web3.eth.abi.decodeParameter(
    'uint256',
    '0x0000000000000000000000000000000000000000000000000000000000000010'
  );
  console.log(decodedParam1);

  const decodedParam2 = web3.eth.abi.decodeParameter(
    {
      ParentStruct: {
        propertyOne: 'uint256',
        propertyTwo: 'uint256',
        childStruct: {
          propertyOne: 'uint256',
          propertyTwo: 'uint256',
        },
      },
    },
    '0x000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000002d000000000000000000000000000000000000000000000000000000000000004e'
  );
  console.log(decodedParam2);

  // Decode ABI encoded parameters to its JavaScript types.
  let resParams = web3.eth.abi.decodeParameters(
    ['string', 'uint256'],
    '0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000ea000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000'
  );
  console.log(resParams);
  let resParams2 = web3.eth.abi.decodeParameters(
    [
      {
        type: 'string',
        name: 'myString',
      },
      {
        type: 'uint256',
        name: 'myNumber',
      },
    ],
    '0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000ea000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000'
  );
  console.log(resParams2);

  // Encode the event name to its ABI signature, which are the sha3 hash of the event name including input types.
  const event = web3.eth.abi.encodeEventSignature({
    name: 'myEvent',
    type: 'event',
    inputs: [
      {
        type: 'uint256',
        name: 'myNumber',
      },
      {
        type: 'bytes32',
        name: 'myBytes',
      },
    ],
  });
  console.log(event);

  const event2 = web3.eth.abi.encodeEventSignature({
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
  });
  console.log(event2);

  // Encode a function call using its JSON interface object and given parameters.
  const sig = web3.eth.abi.encodeFunctionCall(
    {
      name: 'myMethod',
      type: 'function',
      inputs: [
        {
          type: 'uint256',
          name: 'myNumber',
        },
        {
          type: 'string',
          name: 'myString',
        },
      ],
    },
    ['2345675643', 'Hello!%']
  );
  console.log(sig);

  // Encode the function name to its ABI representation,
  const signature = web3.eth.abi.encodeFunctionSignature({
    name: 'myMethod',
    type: 'function',
    inputs: [
      {
        type: 'uint256',
        name: 'myNumber',
      },
      {
        type: 'string',
        name: 'myString',
      },
    ],
  });
  console.log(signature);

  // Encode a parameter based on its type to its ABI representation
  const resParams44 = web3.eth.abi.encodeParameter('uint256', '2345675643');
  console.log(resParams44);

  // Encode a parameter based on its type to its ABI representation.
  const res3 = web3.eth.abi.encodeParameters(
    ['uint256', 'string'],
    ['2345675643', 'Hello!%']
  );

  console.log(res3);
})();
