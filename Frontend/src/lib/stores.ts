import { makeContractStore } from 'svelte-web3';
import { writable, derived, readable } from 'svelte/store';
import type { AbiItem } from 'web3-utils';
import SBT_ABI from  '../contracts/SBT.json';
import contractAddress from '../contracts/contract-address.json';

/**
 * Tracks the currently logged in user.
 */
export const user = writable('No Account Connected');

/* export const test = makeContractStore(SBT_ABI.abi as AbiItem[], contractAddress.SBT);
 */