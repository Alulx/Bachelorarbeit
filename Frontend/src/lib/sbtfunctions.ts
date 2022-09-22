import type { Sbt } from '../../../Backend/models/sbt';
import type { Soul } from '../../../Backend/models/soul';
import { defaultEvmStores as evm, connected, chainId, chainData,  web3,  contracts, selectedAccount } from 'svelte-web3';

/* import SBT_ABI from "../contracts/SBT.json";
import contractAddress from "../contracts/contract-address.json";

evm.attachContract('sbtcontract', contractAddress.SBT, SBT_ABI.abi as AbiItem[]);
 */

/**
 *  Mints a new Soul of the specified user
 *
 * @param address - The wallet addres of the soul
 * @param soulData - The Data of the specified sOul
 */
export async function mintSoul(address: string, soulData: Soul, sbt: any): Promise<void> {
  console.log(`Minting Soul for  ${address}`);
  await sbt.methods.mint(address, soulData).send({ from: address, gasPrice: '20000000000' }).
    catch((error: { data: { message: any; }; }) => {
      console.error(error.data.message);
    });
}

/**
 *  Burns the new Soul of the specified user
 *
 * @param address - The wallet addres of the soul
 */
export async function burnSoul(address: string, sbt): Promise<void> {
  console.log(`Burning ${address}'s Soul...`);
  await sbt.methods.burn(address).send({ from: address, gasPrice: '20000000000' })
    .catch((error: { data: { message: any; }; }) => {
      console.error(error.data.message);
    });
}

/**
 *  Burns the new Soul of the specified user
 *
 * @param address - The wallet addres of the soul
 */
export async function hasSoul(address: string, sbt): Promise<boolean> {
  return !!(await sbt.methods.hasSoul(address).call());

}

/**
 *  Function to update data of a users soul
 *
 * @param address - The wallet addres of the soul
 * @param soulData - The data to be changed about the soul
 */
export async function updateSoul(address: string, soulData: Soul, sbt): Promise<void> {
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
export async function getSoul(address: string, sbt): Promise<Soul> {
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
export async function attestSBT(
  target_address: string,
  attester_address: string,
  reputation: boolean,
  explanation_url: string,
  sbt,
): Promise<void> {
  await sbt.methods.attest(target_address, reputation, explanation_url).send({ from: attester_address, gasPrice: '20000000000' })
    .catch((error) => {
      console.error(`Something went wrong:${error.data.message}`);
    });
}

/**
 *  Function to revoke an attested SBT
 *
 * @param tokenId - the unique tokenId of the attested SBT
 * @param attester_address - The addrs of the attester
 */
export async function revokeSBT(tokenId: number, attester_address: string, sbt): Promise<void> {
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
export async function getSbtsBySoul(address: string, sbt): Promise<Sbt[]> {
  return await sbt.methods.getSbtsBySoul(address).call();
}

/**
 * Function to return a specified sbt via tokenId
 *
 * @param tokenId - The Id of the sbt to be retrieved
 */
export async function getSbt(tokenId: number, sbt): Promise<Sbt> {
  return await sbt.methods.getSbt(tokenId).call();
}

/**
 * Function to see if a soul has any sbts
 *
 * @param address - The address of the soul
 */
export async function hasSbt(address: string, sbt): Promise<Sbt> {
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
  await attestSBT('0x70997970C51812dc3A010C7d01b50e0d17dc79C8', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', true, 'test SBT');
  await attestSBT('0x70997970C51812dc3A010C7d01b50e0d17dc79C8', '0x70997970C51812dc3A010C7d01b50e0d17dc79C8', true, 'test self mint');
  await attestSBT('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', '0x70997970C51812dc3A010C7d01b50e0d17dc79C8', true, 'Nein DU!');

}

