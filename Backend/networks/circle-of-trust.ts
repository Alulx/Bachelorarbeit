// File to host different Souls of the personalities
import { Soul } from '../models/soul';

// createNetwork();
/**
 *  Creates test network for a circle of trust
 */


// timestamp is 02.03.2022
const Alice: Soul = {
  identity: 'Alice A.', url: 'AliceA@testsouls.com', score: 0, timestamp: 1_646_206_905 * 1000 };

// timestamp is 13.05.2022
const Bob: Soul = {
  identity: 'Bob B.', url: 'BobB@testsouls.com', score: 0, timestamp: 1_652_424_105 * 1000 };

// timestamp is 10.07.2022, 1_657_435_305 * 1000
const Charlie: Soul = {
  identity: 'Charlie C.', url: 'CharlieC@testsouls.com', score: 0, timestamp: Date.now() };

export const circleOfTrustSouls: Soul[] = [
  Alice,
  Bob,
  Charlie,
];


