import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import SBT_ABI from './SBT.json';
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

interface Soul {
  identity: string,
  url: string,
  score: number,
  timestamp: number,
}

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
  console.log(await sbt.methods.name.call().call());
  console.log(await sbt.methods.ticker.call().call());
  console.log(await sbt.methods.operator.call().call());



  console.log(await sbt.methods.mint('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', {
    identity: 'Alex', url: 'hochschule-mittweida.de', score: 100, timestamp: 1143 }
  ).send({ from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', value: web3.utils.toWei('0.001', 'ether')}));
  
    console.log(await sbt.methods.hasSoul('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266').call());


}

