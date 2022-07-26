// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/**
 * An experiment in Soul Bound Tokens (SBT's) following Vitalik's
 * co-authored whitepaper at:
 * https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763
 *
 * I propose for a rename to Non-Transferable Tokens NTT's
 */

contract SBT {

    struct Soul {
        string identity;
        // add issuer specific fields below
        string url;
        uint256 score;
        uint256 timestamp;

    }

    struct Sbt {
        uint tokenId;
        address attester;
        bool reputation; 
        string explanation_url;

    }

    Sbt[] public sbts;

    mapping (address => uint) soulSbtCount;

    mapping (address => Soul) private souls;
    mapping (address => mapping (address => Soul)) soulProfiles;
    mapping (address => address[]) private profiles;

    string public name;
    string public ticker;
    address public operator;
    bytes32 private zeroHash = 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470;
    
    event Attest(address _soul);
    event Mint(address _soul);
    event Burn(address _soul);
    event Update(address _soul);
    event SetProfile(address _profiler, address _soul);
    event RemoveProfile(address _profiler, address _soul);

    uint tokenId = 1; 

    constructor(string memory _name, string memory _ticker) {
      name = _name;
      ticker = _ticker;
      operator = msg.sender;
    }

    function attest(address _targetSoul, bool _reputation, string memory _explanation_url) external {
        //Target soul has to exist
        require(keccak256(bytes(souls[_targetSoul].identity)) != zeroHash, "Cannot send SBT to Soul that has not been minted");
        require(keccak256(bytes(souls[msg.sender].identity)) != zeroHash, "Attester has to have a Soul themselves");
    	sbts.push(Sbt(tokenId, msg.sender, _reputation, _explanation_url));
        tokenId++; 
        soulSbtCount[_targetSoul]++;
        emit Attest(_targetSoul);
    }

    function revoke(address _soul, Sbt memory _sbt) external {
      
    }

    function getSbtsBySoul(address _soul) external view returns (Sbt[] memory) {
        Sbt[] memory result = new Sbt[](soulSbtCount[_soul]);
        uint counter = 0;
      
        for (uint i = 0; i < sbts.length; i++) {
            if (sbts[i].attester == _soul) {
                result[counter] = sbts[i];
                counter++;
            }
        }
        return result; 
    }

    function mint(address _soul, Soul memory _soulData) external {
        require(keccak256(bytes(souls[_soul].identity)) == zeroHash, "Soul already exists");
        //require(msg.sender == operator, "Only operator can mint new souls");
        souls[_soul] = _soulData;
        emit Mint(_soul);
    }

    function burn(address _soul) external {
        require(msg.sender == _soul, "Only users have rights to delete their data");
        delete souls[_soul];
        for (uint i=0; i<profiles[_soul].length; i++) {
            address profiler = profiles[_soul][i];
            delete soulProfiles[profiler][_soul];
        }
        emit Burn(_soul);
    }

    function update(address _soul, Soul memory _soulData) external {
        require(msg.sender == _soul, "Only users can update soul data");
        souls[_soul] = _soulData;
        emit Update(_soul);
    }

    function hasSoul(address _soul) external view returns (bool) {
        if (keccak256(bytes(souls[_soul].identity)) == zeroHash) {
            return false;
        } else {
            return true;
        }
    }

    function getSoul(address _soul) external view returns (Soul memory) {
        return souls[_soul];
    }

    /**
     * Profiles are used by 3rd parties and individual users to store data.
     * Data is stored in a nested mapping relative to msg.sender
     * By default they can only store data on addresses that have been minted
     */
    function setProfile(address _soul, Soul memory _soulData) external {
        require(keccak256(bytes(souls[_soul].identity)) != zeroHash, "Cannot create a profile for a soul that has not been minted");
        soulProfiles[msg.sender][_soul] = _soulData;
        profiles[_soul].push(msg.sender);
        emit SetProfile(msg.sender, _soul);
    }

    function getProfile(address _profiler, address _soul) external view returns (Soul memory) {
        return soulProfiles[_profiler][_soul];
    }

    function listProfiles(address _soul) external view returns (address[] memory) {
        return profiles[_soul];
    }

    function hasProfile(address _profiler, address _soul) external view returns (bool) {
        if (keccak256(bytes(soulProfiles[_profiler][_soul].identity)) == zeroHash) {
            return false;
        } else {
            return true;
        }
    }

    function removeProfile(address _profiler, address _soul) external {
        require(msg.sender == _soul, "Only users have rights to delete their profile data");
        delete soulProfiles[_profiler][msg.sender];
        emit RemoveProfile(_profiler, _soul);
    }


    
}