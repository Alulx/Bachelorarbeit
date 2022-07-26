import { accounts, networkSouls } from './network-souls';
import { sbtabi } from 'sbtabi';
import { Soul } from 'soul';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import SBT_ABI from './SBT.json';
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';



let web3;
let sbt;

main();
/**
 *  The Main function;
 */
async function main(): Promise<void> {
  console.log('Starting DeRep...');
  initializeContract();

  await setProfile('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', {
    identity: 'keke Stallman', url: 'gnu.org', score: Math.floor(Math.random() * 100), timestamp: Date.now() });
  console.log(await hasProfile('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' ));

  console.log(await listProfiles('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'));
  // createNetwork();
  //  User 2
  //  console.log(await hasSoul('0x70997970C51812dc3A010C7d01b50e0d17dc79C8'));

  const soul1: Soul = {
    identity: 'TESTEST', url: 'hochschule-mittweida.de', score: Math.floor(Math.random() * 100), timestamp: Date.now() };

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
