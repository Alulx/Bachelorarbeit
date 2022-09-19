// File to host different Souls of the personalities

import Web3 from 'web3';
import { Soul } from '../models/soul';
import { AbiItem } from 'web3-utils';
import SBT_ABI from '../../artifacts/contracts/SBT.sol/SBT.json';
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const sbt =  new web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress);

// createNetwork();
/**
 *  Creates test network for a circle of trust
 */


// timestamp is 02.03.2022
const Alice: Soul = {
  identity: 'Alice A.', url: 'AliceA@testsouls.com', score: 0, timestamp: 1_646_206_905 };

// timestamp is 13.05.2022
const Bob: Soul = {
  identity: 'Bob B.', url: 'BobB@testsouls.com', score: 0, timestamp: 1_652_424_105 };

// timestamp is 10.07.2022
const Charlie: Soul = {
  identity: 'Charlie C.', url: 'CharlieC@testsouls.com', score: 0, timestamp: 1_657_435_305 };

export const circleOfTrustSouls: Soul[] = [
  Alice,
  Bob,
  Charlie,
];


