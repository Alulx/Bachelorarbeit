import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import SBT_ABI from './SBT.json';
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

main();
/**
 *  The Main function;
 */
async function main(): Promise<void> {
  console.log('Starting DeRep...');

  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  console.log(await web3.eth.net.isListening());

  console.log(await web3.eth.getBalance('0x70997970C51812dc3A010C7d01b50e0d17dc79C8'));
  const sbt =  new web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress); //  ?????
  console.log(await sbt.methods.hasSoul('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266').call());
  console.log(await web3.eth.Contract.defaultAccount);

}

