"use strict";
exports.__esModule = true;
// createNetwork();
/**
 *  Creates test network for a circle of trust
 */
// timestamp is 02.03.2022
var Alice = {
    identity: 'Alice A.', url: 'AliceA@testsouls.com', score: 0, timestamp: 1646206905 * 1000
};
// timestamp is 13.05.2022
var Bob = {
    identity: 'Bob B.', url: 'BobB@testsouls.com', score: 0, timestamp: 1652424105 * 1000
};
// timestamp is 10.07.2022, 1_657_435_305 * 1000
var Charlie = {
    identity: 'Charlie C.', url: 'CharlieC@testsouls.com', score: 0, timestamp: Date.now()
};
exports.circleOfTrustSouls = [
    Alice,
    Bob,
    Charlie,
];
