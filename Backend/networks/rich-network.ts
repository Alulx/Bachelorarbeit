// File to host different Souls of the personalities

import { Soul } from '../models/soul';

// timestamp is 02.03.2022
const Alice: Soul = {
  identity: 'Alice A.', url: 'AliceA@testsouls.com', score: 0, timestamp: 1_646_206_905 * 1000 };

// timestamp is 13.05.2022
const Bob: Soul = {
  identity: 'Bob B.', url: 'BobB@testsouls.com', score: 0, timestamp: 1_652_424_105 * 1000 };

// timestamp is 10.07.2022
const Trent: Soul = {
  identity: 'Trent T.', url: 'TrentT@testsouls.com', score: 0, timestamp: 1_657_435_305 * 1000 };

const Charlie: Soul = {
  identity: 'Charlie C.', url: 'CharlieC@testsouls.com', score: 0, timestamp: 1_657_435_305 * 1000 };

const CEO: Soul = {
  identity: 'Zee Eh O.', url: 'CEO@genericcompany.com', score: 0, timestamp: 1_646_206_905 * 1000 };

const DevelopmentConference: Soul = {
  identity: 'DevCon', url: 'Host@devcon.com', score: 0, timestamp: 1_646_206_905 * 1000 };

const University: Soul = {
  identity: 'University Of apllied Sciences', url: 'Attesting@hs-mittweida.de', score: 0, timestamp: 1_646_206_905 * 1000 };


export const richNetworkSouls: Soul[] = [
  Alice,
  Bob,
  Charlie,
  Trent,
  CEO,
  DevelopmentConference,
  University,
];


