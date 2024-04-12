import { Web3 } from 'web3';

const web3 = new Web3();

/**
 * Following has demostration of few Web3 IBAN methods, for more details visit :
 * https://docs.web3js.org/libdocs/Iban
 */

(async () => {
  const iban = new web3.eth.Iban('XE81ETHXREGGAVOFYORK');

  // IBAN checksum of the early provided IBAN
  console.log(iban.checksum());

  // get client identifier within institution
  console.log(iban.client());

  // institution identifier from the early provided IBAN
  console.log(iban.institution());

  // An instance method that checks if iban number is Direct.
  console.log(iban.isDirect());

  // check if iban number is indirect
  console.log(iban.isIndirect());

  // check if IBAN is valid
  console.log(iban.isValid());

  // create the equivalent ethereum address for the early provided Direct IBAN address.
  //console.log(iban.toAddress());
})();
