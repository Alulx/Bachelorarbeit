"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var web3_1 = require("web3");
var SBT_json_1 = require("../artifacts/contracts/SBT.sol/SBT.json");
var main_1 = require("./main");
var contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
var web3 = new web3_1["default"](new web3_1["default"].providers.HttpProvider('http://localhost:8545'));
var sbt = new web3.eth.Contract(SBT_json_1["default"].abi, contractAddress);
var score = 0;
var SBTCOUNTCAP = 15;
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
 *
 * sbtcount
 * (limit impact of sbts from same people )
 *  diverse souls help
 * max out at 20 sbts form different people( each sbt from same person yields diminising returns with -20% sbt; capped at 20%)
 * over 50% of sbts need to be attested by different souls e.g. 6 sbts ( 3 from user 1, 1 from user 2,user 3, user 4,)
 * sbts from people without sbts get lower score (maybe should not be considered)
 * ~ 45%
 *
 * len of desc (prolly like 50 char for max score)
 *  ~ 20%
 *
 *
 * sbt timestamp  (max out at 1 month with 100% impact)
 * ~ 15%
 *
 *
 *
 * @param address - The souls address to be generated a score for
 * @param depth
 */
function generateScore(address, depth) {
    return __awaiter(this, void 0, void 0, function () {
        var soul, sbts, soulScore, sbtScore;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, main_1.getSoul(address)];
                case 1:
                    soul = _a.sent();
                    return [4 /*yield*/, main_1.getSbtsBySoul(address)];
                case 2:
                    sbts = _a.sent();
                    soulScore = calculateSoulTimestampScore(soul.timestamp);
                    return [4 /*yield*/, calculateSbtScore(sbts, address)];
                case 3:
                    sbtScore = _a.sent();
                    // Output Phase
                    score = 0.2 * soulScore + 0.8 * sbtScore;
                    return [2 /*return*/, score];
            }
        });
    });
}
exports.generateScore = generateScore;
/**
 *  The function generates 20% of final score based on the age of the soul
 *
 * @param timestamp -  The minted Souls date of creation in unix timestamp seconds
 */
function calculateSoulTimestampScore(timestamp) {
    var today = Date.now();
    /*   console.log('today:', today);
    console.log('today:', new Date(today).toLocaleDateString('en-GB'));
  
    console.log('soul creation:', timestamp );
    console.log('soul creation:', new Date((timestamp * 1000 )).toLocaleDateString('en-GB'));
   */
    // Unix timestamps will be considered for Date() Object when it is displayed in miliseconds, hence timestamp * 1000
    var difference = ((today - timestamp * 1000) / (1000 * 3600 * 24 * 365));
    console.log('soultimestampscore:', difference);
    return difference > 1 ?
        1 :
        difference;
}
/**
 *  Function to calculate points based on the number of sbts the soul has
 *
 * @param sbts - The Array of sbts of the soul
 * @param address - string - The souls address
 */
function calculateSbtScore(sbts, address) {
    return __awaiter(this, void 0, void 0, function () {
        var score, quantityScore, qualityScore;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // only consider sbts with active flag true , true reputation and attester != soul
                    sbts = sbts.filter(function (sbt) { return sbt.active && sbt.reputation && sbt.attester !== address; });
                    score = 0;
                    quantityScore = calculateSbtQuantityScore(sbts);
                    return [4 /*yield*/, calculateSbtQualityScore(sbts)];
                case 1:
                    qualityScore = _a.sent();
                    score = quantityScore * 0.55 + qualityScore * 0.45; // 55% quantity, 45% quality, because quantity is easier to measure
                    return [2 /*return*/, score];
            }
        });
    });
}
/**
 *  Function to calculate points based on the number of sbts the soul has
 *
 * @param sbts - The Array of sbts of the soul
 */
function calculateSbtQuantityScore(sbts) {
    var score = 0;
    var sbtCount = sbts.length;
    score = sbtCount > SBTCOUNTCAP ?
        1 :
        sbtCount / SBTCOUNTCAP;
    console.log('sbtcountscore based only on quantity:', score);
    /*
    * Calculate Uniqueness Factor
    */
    var sbtSouls = sbts.map(function (sbt) { return sbt.attester; });
    var uniqueSoulCount = new Set(sbtSouls).size;
    // uniqueness factor is a new value indicating sbt diversity, the higher the better
    // Having a uniqueness Factor of 0.8 is sufficient. it approaches zero the wors it gets, we will cap the penalty at 0.2
    var uniquenessFactor = uniqueSoulCount / sbtSouls.length;
    console.log('uniqueness Factor', uniquenessFactor);
    if (uniquenessFactor < 0.8) {
        score = score * ((uniqueSoulCount / sbtSouls.length) + 0.2);
    }
    console.log('sbtcountscore based on quantity and uniqueness:', score);
    return score;
}
/**
 *  Function to calculate points based on the quality of sbts the soul has
 *  I.E. Desription parameters and timestamp, the older an sbt the less value
 *
 * @param sbts - The Array of sbts of the soul
 */
function calculateSbtQualityScore(sbts) {
    score = 0;
    var timestampScore = 0;
    // get element with highest timestamp for each unique attester
    var newestSbts = sbts.reduce(function (accumulator, sbt) {
        if (!accumulator[sbt.attester] || accumulator[sbt.attester].timestamp < sbt.timestamp) {
            accumulator[sbt.attester] = sbt;
        }
        return accumulator;
    }, {});
    // calculate average timestamp of sbts
    var today = Date.now();
    for (var _i = 0, _a = Object.values(newestSbts); _i < _a.length; _i++) {
        var sbt_1 = _a[_i];
        var difference = ((today - sbt_1.timestamp * 1000) / (1000 * 3600 * 24 * 365));
        timestampScore += difference;
    }
    timestampScore = 1 - timestampScore / sbts.length;
    console.log('timestamp Score:', timestampScore);
    // check the length of the description of sbts a soul has, the longer the sbt the more value
    // accumulate score of all sbts and then use average  as score for the description parameter
    var descritpionScore = 0;
    for (var _b = 0, sbts_1 = sbts; _b < sbts_1.length; _b++) {
        var sbt_2 = sbts_1[_b];
        var sbtDescriptionScore = void 0;
        var sbtDescription = sbt_2.explanation_url;
        var descriptionLength = sbtDescription.length;
        var wordcount = sbtDescription.split(' ').length;
        // eslint-disable-next-line unicorn/prefer-ternary
        if (descriptionLength > 100 && wordcount > 20) {
            sbtDescriptionScore = 1; // 100% score for sbts with a description of 100 characters and 20 words or more
        }
        else {
            sbtDescriptionScore = descriptionLength / 100 * 0.5 + wordcount / 20 * 0.5;
        }
        descritpionScore += sbtDescriptionScore;
    }
    console.log('accumulated descritpionScore:', descritpionScore);
    descritpionScore = descritpionScore / sbts.length;
    console.log('final descritpionScore:', descritpionScore);
    //  calculate final quality score
    score = 0.45 * descritpionScore + 0.55 * timestampScore;
    console.log('final quality score:', score);
    return score;
}
/*   //  check how many attesters have no sbts themselves and disregard them for score if it is 0
  const affiliatedSoulsSbts = await Promise.all(sbts.map(async(sbt) => await getSbtsBySoul(sbt.attester)));
  const affiliatedSoulsThatHabeSbts = affiliatedSoulsSbts.map((affiliatedSoulsSbts) => affiliatedSoulsSbts.length);
  const affiliatedSoulsThatHabeSbtsSum = affiliatedSoulsThatHabeSbts.reduce((a, b) => a + b, 0);
  console.log('affiliatedSoulsThatHabeSbtsSum:', affiliatedSoulsThatHabeSbtsSum);
  console.log('affiliatedSoulsThatHabeSbts:', affiliatedSoulsThatHabeSbts);
  console.log('affiliatedSoulsThatHabeSbts:', affiliatedSoulsThatHabeSbts.length);
  console.log('affiliatedSoulsThatHabeSbts score', affiliatedSoulsThatHabeSbtsSum / affiliatedSoulsThatHabeSbts.length );
  score = score * ( affiliatedSoulsThatHabeSbtsSum / affiliatedSoulsThatHabeSbts.length );
  console.log('sbtcountscore:', score); */
