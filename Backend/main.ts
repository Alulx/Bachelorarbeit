import { accounts, networkSouls } from './network-souls';
import { Soul } from 'soul';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import SBT_ABI from '../artifacts/contracts/SBT.sol/SBT.json';
import { Sbt } from 'sbt';
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const user2 = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
const user1 = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

const soul1: Soul = {
  identity: 'TESTEST', url: 'hochschule-mittweida.de', score: Math.floor(Math.random() * 100), timestamp: Date.now() };
const soul2: Soul = {
  identity: 'Jezz Befos', url: 'amzon-mittweida.de', score: Math.floor(Math.random() * 100), timestamp: Date.now() };

let web3;
let sbt;

main();
/**
 *  The Main function;
 */
async function main(): Promise<void> {
  console.log('Starting DeRep...');
  initializeContract();
  // await createNetwork();/* 
  await mintSoul('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', soul2);
  await mintSoul('0x70997970C51812dc3A010C7d01b50e0d17dc79C8', soul1);
  await attestSBT('0x70997970C51812dc3A010C7d01b50e0d17dc79C8', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', true, 'test SBT');
  await attestSBT('0x70997970C51812dc3A010C7d01b50e0d17dc79C8', '0x70997970C51812dc3A010C7d01b50e0d17dc79C8', true, 'test self mint');

  console.log(await sbt.methods.getSbtsBySoul('0x70997970C51812dc3A010C7d01b50e0d17dc79C8').call());
  // console.log(await sbt.methods.sbts(0).call());
  console.log(await getSbt(0));
  console.log(await hasSbt('0x70997970C51812dc3A010C7d01b50e0d17dc79C8'));
  console.log(await hasSbt('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'));

  await revokeSBT(5, '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
  await revokeSBT(4, '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');

  await burnSoul('0x70997970C51812dc3A010C7d01b50e0d17dc79C8');
  await burnSoul('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');// IF YOU BURN OYU HAVE TO REMOV SBT S

  console.log(await hasSbt('0x70997970C51812dc3A010C7d01b50e0d17dc79C8'));
  console.log(await hasSbt('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'));
  console.log(await getSbt(4));

  console.log(await sbt.methods.getSbtsBySoul('0x70997970C51812dc3A010C7d01b50e0d17dc79C8').call()); */
  /* await updateSoul('0x70997970C51812dc3A010C7d01b50e0d17dc79C8', {
    identity: 'PJEFF JEEZUS', url: 'Micr0s0ft.sss', score: 0, timestamp: Date.now() });

  console.log(await getSoul('0x70997970C51812dc3A010C7d01b50e0d17dc79C8'));
    */


  //  User 2
  //  console.log(await hasSoul('0x70997970C51812dc3A010C7d01b50e0d17dc79C8'));


  /*  console.log(await hasSoul('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'));
  await updateSoul('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', soul1);
  // console.log(await hasSoul('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'));
  console.log(await getSoul('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')); */
}

/**
 *  The function to initalize Web3 provider and the sbt contract
 */
function initializeContract(): void {
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  sbt =  new web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress); //  ?????
  if ( web3.eth.net.isListening()) {
    console.log('We are live! ');
  } else {
    console.log('Something went wrong connecting to Web3...');
  }

}

/**
 *  Mints a new Soul of the specified user
 *
 * @param address - The wallet addres of the soul
 * @param soulData - The Data of the specified sOul
 */
async function mintSoul(address: string, soulData: Soul): Promise<void> {
  console.log(`Minting Soul for  ${address}`);
  await sbt.methods.mint(address, soulData).send({ from: address, gasPrice: '20000000000' }).
    catch((error) => {
      console.error(error.data.message);
    });
}

/**
 *  Burns the new Soul of the specified user
 *
 * @param address - The wallet addres of the soul
 */
async function burnSoul(address: string): Promise<void> {
  console.log(`Burning ${address}'s Soul...`);

  await sbt.methods.burn(address).send({ from: address, gasPrice: '20000000000' })
    .catch((error) => {
      console.error(error.data.message);
    });
}

/**
 *  Burns the new Soul of the specified user
 *
 * @param address - The wallet addres of the soul
 */
async function hasSoul(address: string): Promise<boolean> {
  return !!(await sbt.methods.hasSoul(address).call());

}

/**
 *  Function to update data of a users soul
 *
 * @param address - The wallet addres of the soul
 * @param soulData - The data to be changed about the soul
 */
async function updateSoul(address: string, soulData: Soul): Promise<void> {
  await sbt.methods.update(address, soulData).send({ from: address, gasPrice: '20000000000' })
    .catch((error) => {
      console.error(error.data.message);
    });
}

/**
 *  Function to get the soul of a user
 *
 * @param address - The wallet addres of the soul
 */
async function getSoul(address: string): Promise<Soul> {
  return await sbt.methods.getSoul(address).call();
}

/**
 *  Function to attest an SBT to a soul
 *
 * @param target_address -The wallet addres of the soul
 * @param attester_address - The addres of the attester
 * @param reputation - The value to indivate psoitive/negative sbt
 * @param explanation_url - The link to a text explanation
 */
async function attestSBT(
  target_address: string,
  attester_address: string,
  reputation: boolean,
  explanation_url: string,
): Promise<void> {
  await sbt.methods.attest(target_address, reputation, explanation_url).send({ from: attester_address, gasPrice: '20000000000' })
    .catch((error) => {
      console.error(error.data.message);
    });
}

/**
 *  Function to revoke an attested SBT
 *
 * @param tokenId - the unique tokenId of the attested SBT
 * @param attester_address - The addrs of the attester
 */
async function revokeSBT(tokenId: number, attester_address: string): Promise<void> {
  await sbt.methods.revoke(tokenId).send({ from: attester_address, gasPrice: '20000000000' })
    .catch((error) => {
      console.error(error.data.message);
    });
}

/**
 * Function to get a list of SBTs of a specified soul
 *
 * @param address - The addres of the soul whose sbt it's looking for
 */
async function getSbtsBySoul(address: string): Promise<Sbt[]> {
  return await sbt.methods.getSbtsBySoul(address).call();
}

/**
 * Function to return a specified sbt via tokenId
 *
 * @param tokenId - The Id of the sbt to be retrieved
 */
async function getSbt(tokenId: number): Promise<Sbt> {
  return await sbt.methods.getSbt(tokenId).call();
}

/**
 * Function to see if a soul has any sbts
 *
 * @param address - The address of the soul
 */
async function hasSbt(address: string): Promise<Sbt> {
  return await sbt.methods.hasSbt(address).call();
}

/**
 *  Simulates an established network of Souls with dedicated SBTs to create personalities
 */
async function createNetwork(): Promise<void> {
  let index = 0;
  for (const networkSoul of networkSouls) {
    await mintSoul(accounts[index], networkSoul);
    console.log(await getSoul(accounts[index]));
    index++;
  }
}
/**
 *  Simulates an established network of Souls with dedicated SBTs to create personalities
 *
 * @param address - The wallet addres of the soul
 * @param soulData
 */
async function setProfile(address: string, soulData: Soul): Promise<void> {
  await sbt.methods.setProfile(address, soulData).send({ from: address, gasPrice: '20000000000' });

}

/**
 *
 * @param profileAddress
 * @param soulAddress  -The wallet addres of the soul
 */
async function getProfile(profileAddress: string, soulAddress: string): Promise<void> {
  await sbt.methods.getProfile(profileAddress, soulAddress).call();
}

/**
 *
 * @param address - The wallet addres of the soul
 */
async function listProfiles(address: string): Promise<void> {
  await sbt.methods.listProfiles(address).call();
}

/**
 *
 * @param profileAddress
 * @param soulAddress - The wallet addres of the soul
 */
async function hasProfile(profileAddress: string, soulAddress: string): Promise<void> {
  await sbt.methods.hasProfile(profileAddress, soulAddress).call();
}

/**
 *
 * @param profileAddress
 * @param soulAddress
 */
async function removeProfile(profileAddress: string, soulAddress: string): Promise<void> {
  await sbt.methods.removeProfile(profileAddress, soulAddress).send({ from: soulAddress, gasPrice: '20000000000' });
}

