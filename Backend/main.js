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
var network_souls_1 = require("./network-souls");
var web3_1 = require("web3");
var SBT_json_1 = require("../artifacts/contracts/SBT.sol/SBT.json");
var contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
var user2 = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
var user1 = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
var soul1 = {
    identity: 'TESTEST', url: 'hochschule-mittweida.de', score: Math.floor(Math.random() * 100), timestamp: Date.now()
};
var soul2 = {
    identity: 'Jezz Befos', url: 'amzon-mittweida.de', score: Math.floor(Math.random() * 100), timestamp: Date.now()
};
var web3;
var sbt;
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
                    return [4 /*yield*/, createNetwork()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 *  The function to initalize Web3 provider and the sbt contract
 */
function initializeContract() {
    web3 = new web3_1["default"](new web3_1["default"].providers.HttpProvider('http://localhost:8545'));
    sbt = new web3.eth.Contract(SBT_json_1["default"].abi, contractAddress); //  ?????
    if (web3.eth.net.isListening()) {
        console.log('We are live! ');
    }
    else {
        console.log('Something went wrong connecting to Web3...');
    }
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
                    console.log("Minting Soul for  ".concat(address));
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
                    console.log("Burning ".concat(address, "'s Soul..."));
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
                case 5: return [2 /*return*/];
            }
        });
    });
}
/**
 *  Simulates an established network of Souls with dedicated SBTs to create personalities
 *
 * @param address - The wallet addres of the soul
 * @param soulData
 */
function setProfile(address, soulData) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.setProfile(address, soulData).send({ from: address, gasPrice: '20000000000' })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 *
 * @param profileAddress
 * @param soulAddress  -The wallet addres of the soul
 */
function getProfile(profileAddress, soulAddress) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.getProfile(profileAddress, soulAddress).call()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 *
 * @param address - The wallet addres of the soul
 */
function listProfiles(address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.listProfiles(address).call()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 *
 * @param profileAddress
 * @param soulAddress - The wallet addres of the soul
 */
function hasProfile(profileAddress, soulAddress) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.hasProfile(profileAddress, soulAddress).call()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 *
 * @param profileAddress
 * @param soulAddress
 */
function removeProfile(profileAddress, soulAddress) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sbt.methods.removeProfile(profileAddress, soulAddress).send({ from: soulAddress, gasPrice: '20000000000' })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
