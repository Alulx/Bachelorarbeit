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
var network_souls_1 = require("./networks/network-souls");
var web3_1 = require("web3");
var SBT_json_1 = require("../artifacts/contracts/SBT.sol/SBT.json");
var circle_of_trust_1 = require("./networks/circle-of-trust");
var rich_network_1 = require("./networks/rich-network");
var contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
var web3 = new web3_1["default"](new web3_1["default"].providers.HttpProvider('http://localhost:8545'));
var sbt = new web3.eth.Contract(SBT_json_1["default"].abi, contractAddress);
var user1 = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
var user2 = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
var user3 = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC';
var user4 = '0x90F79bf6EB2c4f870365E785982E1f101E93b906';
var user5 = '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65';
var user6 = '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc';
var user7 = '0x976EA74026E726554dB657fA54763abd0C3a0aa9';
var user8 = '0x14dC79964da2C08b23698B3D3cc7Ca32193d9955';
var user9 = '0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f';
var user10 = '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720';
var description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';
main();
/**
 *  The Main function;
 */
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Starting DeRep...');
                    initializeContract();
                    return [4 /*yield*/, hasSoul(user1)];
                case 1:
                    if (!!(_a.sent())) return [3 /*break*/, 3];
                    return [4 /*yield*/, createCircleOfTrust()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [4 /*yield*/, hasSoul(user4)];
                case 4:
                    if (!!(_a.sent())) return [3 /*break*/, 6];
                    return [4 /*yield*/, createRichNetwork()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
/**
 *  The function to initalize Web3 provider and the sbt contract
 */
function initializeContract() {
    if (web3.eth.net.isListening()) {
        console.log('We are live! ');
    }
    else {
        console.log('Something went wrong connecting to Web3...');
    }
}
/**
 *  Simulates an established network of Souls with dedicated SBTs to create personalities
 */
function createNetwork() {
    return __awaiter(this, void 0, void 0, function () {
        var index, _i, networkSouls_1, networkSoul, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    index = 0;
                    _i = 0, networkSouls_1 = network_souls_1.networkSouls;
                    _c.label = 1;
                case 1:
                    if (!(_i < networkSouls_1.length)) return [3 /*break*/, 5];
                    networkSoul = networkSouls_1[_i];
                    return [4 /*yield*/, mintSoul(network_souls_1.accounts[index], networkSoul)];
                case 2:
                    _c.sent();
                    _b = (_a = console).log;
                    return [4 /*yield*/, getSoul(network_souls_1.accounts[index])];
                case 3:
                    _b.apply(_a, [_c.sent()]);
                    index++;
                    _c.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5: return [4 /*yield*/, attestSBT(user2, user1, true, 'test SBT')];
                case 6:
                    _c.sent();
                    return [4 /*yield*/, attestSBT(user3, user2, true, 'test self mint')];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, attestSBT(user1, user3, true, 'Nein DU!')];
                case 8:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 *  Function to create a Circle of Trust Network
 */
function createCircleOfTrust() {
    return __awaiter(this, void 0, void 0, function () {
        var index, _i, circleOfTrustSouls_1, Soul, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log('Initiating ambigous Circle of Trust');
                    index = 0;
                    _i = 0, circleOfTrustSouls_1 = circle_of_trust_1.circleOfTrustSouls;
                    _c.label = 1;
                case 1:
                    if (!(_i < circleOfTrustSouls_1.length)) return [3 /*break*/, 5];
                    Soul = circleOfTrustSouls_1[_i];
                    return [4 /*yield*/, mintSoul(network_souls_1.accounts[index], Soul)];
                case 2:
                    _c.sent();
                    _b = (_a = console).log;
                    return [4 /*yield*/, getSoul(network_souls_1.accounts[index])];
                case 3:
                    _b.apply(_a, [_c.sent()]);
                    index++;
                    _c.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5: return [4 /*yield*/, attestSBT(user2, user1, true, description)];
                case 6:
                    _c.sent();
                    return [4 /*yield*/, attestSBT(user3, user2, true, description)];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, attestSBT(user1, user3, true, description)];
                case 8:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 *  Function to create a rich Trust Network
 */
function createRichNetwork() {
    return __awaiter(this, void 0, void 0, function () {
        var index, _i, richNetworkSouls_1, Soul, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log('Initiating  rich Network of Trust');
                    index = 3;
                    _i = 0, richNetworkSouls_1 = rich_network_1.richNetworkSouls;
                    _c.label = 1;
                case 1:
                    if (!(_i < richNetworkSouls_1.length)) return [3 /*break*/, 5];
                    Soul = richNetworkSouls_1[_i];
                    return [4 /*yield*/, mintSoul(network_souls_1.accounts[index], Soul)];
                case 2:
                    _c.sent();
                    _b = (_a = console).log;
                    return [4 /*yield*/, getSoul(network_souls_1.accounts[index])];
                case 3:
                    _b.apply(_a, [_c.sent()]);
                    index++;
                    _c.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5: return [4 /*yield*/, attestSBT(user4, user5, true, 'A most wonderful friend of mine. Love her with all my might, god bless this person.')];
                case 6:
                    _c.sent();
                    return [4 /*yield*/, attestSBT(user4, user6, true, 'A very capable trader and fetcher. Sold me an item being sold at much higher prices usually, but gave me a fair deal. Would definitely make business with again.')];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, attestSBT(user4, user7, true, 'A most wonderful friend of mine. Love her with all my might, god bless this person.')];
                case 8:
                    _c.sent();
                    return [4 /*yield*/, attestSBT(user4, user8, true, 'Very due diligent. Certified in the use of advanced machine learning algorithms and able to handle loads of stress when it comes to Data Minin. Overall a superb Worker.')];
                case 9:
                    _c.sent();
                    return [4 /*yield*/, attestSBT(user4, user9, true, 'Attended Devcon in the Year 2021. Accomplished 3 out of 4 possible Modules.')];
                case 10:
                    _c.sent();
                    return [4 /*yield*/, attestSBT(user4, user10, true, 'Graduated University in 2019 in Computer Science and finished a course on advanced machine learning pattern. GPA: 4.0')];
                case 11:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 *  Mints a new Soul of the specified user
 *
 * @param address - The wallet addres of the soul
 * @param soulData - The Data of the specified sOul
 */
function mintSoul(address, soulData) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Minting Soul for  " + address);
                    return [4 /*yield*/, sbt.methods.mint(address, soulData).send({ from: address, gasPrice: '20000000000' })["catch"](function (error) {
                            console.error(error.data.message);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 *  Burns the new Soul of the specified user
 *
 * @param address - The wallet addres of the soul
 */
function burnSoul(address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Burning " + address + "'s Soul...");
                    return [4 /*yield*/, sbt.methods.burn(address).send({ from: address, gasPrice: '20000000000' })["catch"](function (error) {
                            console.error(error.data.message);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 *  Burns the new Soul of the specified user
 *
 * @param address - The wallet addres of the soul
 */
function hasSoul(address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.hasSoul(address).call()];
                case 1: return [2 /*return*/, !!(_a.sent())];
            }
        });
    });
}
exports.hasSoul = hasSoul;
/**
 *  Function to update data of a users soul
 *
 * @param address - The wallet addres of the soul
 * @param soulData - The data to be changed about the soul
 */
function updateSoul(address, soulData) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.update(address, soulData).send({ from: address, gasPrice: '20000000000' })["catch"](function (error) {
                        console.error(error.data.message);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateSoul = updateSoul;
/**
 *  Function to get the soul of a user
 *
 * @param address - The wallet addres of the soul
 */
function getSoul(address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.getSoul(address).call()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSoul = getSoul;
/**
 *  Function to attest an SBT to a soul
 *
 * @param target_address -The wallet addres of the soul
 * @param attester_address - The addres of the attester
 * @param reputation - The value to indivate psoitive/negative sbt
 * @param explanation_url - The link to a text explanation
 */
function attestSBT(target_address, attester_address, reputation, explanation_url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.attest(target_address, reputation, explanation_url).send({ from: attester_address, gasPrice: '20000000000' })["catch"](function (error) {
                        console.error(error.data.message);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 *  Function to revoke an attested SBT
 *
 * @param tokenId - the unique tokenId of the attested SBT
 * @param attester_address - The addrs of the attester
 */
function revokeSBT(tokenId, attester_address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.revoke(tokenId).send({ from: attester_address, gasPrice: '20000000000' })["catch"](function (error) {
                        console.error(error.data.message);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Function to get a list of SBTs of a specified soul
 *
 * @param address - The addres of the soul whose sbt it's looking for
 */
function getSbtsBySoul(address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.getSbtsBySoul(address).call()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSbtsBySoul = getSbtsBySoul;
/**
 * Function to return a specified sbt via tokenId
 *
 * @param tokenId - The Id of the sbt to be retrieved
 */
function getSbt(tokenId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.getSbt(tokenId).call()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSbt = getSbt;
/**
 * Function to return a specified sbt via tokenId
 *
 * @param address - The addres of the soul whose Sbts should be counted
 */
function getSbtCount(address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.soulSbtCount(address).call()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSbtCount = getSbtCount;
/**
 * Function to see if a soul has any sbts
 *
 * @param address - The address of the soul
 */
function hasSbt(address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.hasSbt(address).call()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.hasSbt = hasSbt;
