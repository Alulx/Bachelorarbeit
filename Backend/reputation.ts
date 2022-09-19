import { Soul } from './models/soul';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import SBT_ABI from '../artifacts/contracts/SBT.sol/SBT.json';
import { Sbt } from 'models/sbt';
import { getSbtCount, getSbtsBySoul, getSoul } from './main';
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const sbt =  new web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress);
let score = 0;


/**
 * Algorithm to get Score
 * output: number from 0-100
 * a trust level: trusted, cautious, danger (for frontend icons)
 * parameters: sbts, soul timestamp, affiliated souls
 * 75% sbt quality, 25% soul quality
 *
 * 20% ------
 * timestamp of soul
 * if 1 year > timestamp then 100% points
 * less than a week = 0 points
 * then linear up
 *
 * 80% ------------
 * sbtcount
 * (limit impact of sbts from same people )
 *  diverse souls help
 * max out at 20 sbts form different people( each sbt from same person yields diminising returns with -20% sbt; capped at 20%)
 * over 50% of sbts need to be attested by different souls e.g. 6 sbts ( 3 from user 1, 1 from user 2,user 3, user 4,)
 * sbts from people without sbts get lower score (maybe should not be considered)
 *
 * ~ 45%
 *
 * len of desc (prolly like 50 char for max score)
 *  ~ 20%
 *
 *
 * sbt timestamp  (max out at 1 month with 100% impact) ~ 15%
 *
 *
 *
 * @param address - The souls address to be generated a score for
 * @param depth
 */
export async function generateScore(address: string, depth?: number): Promise<number> {
  // Fetching Phase
  const soul = await getSoul(address);
  const sbts = await getSbtsBySoul(address);
  const sbtCount = await getSbtCount(address);

  const soulTimestampScore = calculateSoulTimestampScore(soul.timestamp);


  // console.log(soul, sbts, sbtCount);
  score = 0.2 *  soulTimestampScore;
  return score;
}

/**
 *  generates 20% of final score based on the age of the soul
 *
 * @param timestamp -  The minted Souls date of creation in unix timestamp seconds
 */
function calculateSoulTimestampScore(timestamp: number): number {
  const today = Date.now();
  /*   console.log('today:', today);
  console.log('today:', new Date(today).toLocaleDateString('en-GB'));

  console.log('soul creation:', timestamp );
  console.log('soul creation:', new Date((timestamp * 1000 )).toLocaleDateString('en-GB'));
 */
  // Unix timestamps will be considered for Date() Object when it is displayed in miliseconds, hence timestamp * 1000
  const difference = ((today - timestamp * 1000) / ( 1000 * 3600 * 24 * 365)) ;
  console.log(difference);
  
  if (difference > 1 ) {
    //  console.log('older than a year');
    return 1;
  } else {
    //  console.log('less than a year');
    return difference;
  }
}