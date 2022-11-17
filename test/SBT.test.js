const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('SBT', function () {

  before(async () => {
    [owner,user1,user2,user3] = await ethers.getSigners();
    const SBTContract = await ethers.getContractFactory('SBT');
    sbt = await SBTContract.deploy();
  });


  it('hasSoul should return false for new query', async function () {
    expect(await sbt.hasSoul(user1.address)).to.equal(false);
  });

  it('Should mint a new soul', async function () {
    const soul = ['James Bachini', 'https://jamesbachini.com', 99, new Date().getTime()];
    await sbt.mint(user1.address,soul);
  });

  it('hasSoul should return true', async function () {
    expect(await sbt.hasSoul(user1.address)).to.equal(true);
  });

  it('getSoul should return the correct identifier', async function () {
    const soul = await sbt.getSoul(user1.address);
    //console.log(soul);
    expect(soul[0]).to.equal('James Bachini');
  });

  it('Soulowner should be able to update soul', async function () {
    //console.log(user1.address);

    const soul = ['James Bachini', 'https://jamesbachini.com', 80, new Date().getTime()];
    await sbt.connect(user1).update(user1.address,soul);
  });

  it('getSoul should return the updated value', async function () {
    const soul = await sbt.getSoul(user1.address);
    //console.log(soul);
    expect(soul[2]).to.equal(80);
  });


  it('Should not mint an SBT for user2', async function () {
    await expect(sbt.attest(user2.address,true, "is good")).to.be.revertedWith('Cannot send SBT to Soul that has not been minted');
   });

  it('Should mint another soul for user2 ', async function () {
    const soul = ['Alice Smith', 'https://github.com', 42, new Date().getTime()];
    await sbt.mint(user2.address,soul);
  });

  it('Should not mint an SBT for user2', async function () {
    await expect(sbt.attest(user2.address,true, "is good")).to.be.revertedWith('Attester has to have a Soul themselves');
   });  

  it('Should mint an SBT for user2', async function () {
  await sbt.connect(user1).attest(user2.address,true, "token // zero");
  //console.log(await sbt.sbts(0))

  });

  it('Should selfmint an SBT for user2', async function () {
    await sbt.connect(user2).attest(user2.address,true, "I AM THE BEST s good");
    //console.log(await sbt.sbts(1))
  });

  it('user2 should have two sbt now', async function() {
    expect(await sbt.soulSbtCount(user2.address)).to.equal(2);
  });

  it('Should return a list of tokens owned by user2' , async function() {
    //console.log(await sbt.getSbtsBySoul(user2.address));
    let [tokenId, attester, reputation, explanation_url, active] = await sbt.sbts(0)
    //console.log(attester);
    expect(await sbt.soulSbtCount(sbt.SbtToSoul(tokenId))).to.equal(2);
  });

  it('Should throw error due to bad tokenId', async function() {
    await expect(sbt.connect(user3).revoke(23)).to.be.revertedWith('Entered TokenId does not exist');
  });

  it('FOREIGN user cant REVOKE foreign SBT', async function() {
    await expect(sbt.connect(user3).revoke(0)).to.be.revertedWith('Only attester may revoke Token');
  });

  it('Should be able to revoke user1 sbt', async function() {
    await sbt.connect(user1).revoke(0);

  });

  it('Should not be able to revoke user1 sbt again', async function() {
    await expect(sbt.connect(user1).revoke(0)).to.be.revertedWith('SBT has already been revoked');

  });

  it('user2 should have 2 sbt still, but one should be false', async function() {
    expect(await sbt.soulSbtCount(user2.address)).to.equal(2);
  });

  it('Should display active:false ' , async function() {
    let [tokenId, attester, reputation, explanation_url, active] = await sbt.sbts(0)
    expect (active).to.equal(false);
  });

  it('Should return a list of tokens owned by user2' , async function() {
    console.log(await sbt.getSbtsBySoul(user2.address));
  });

  it('Foreign User should not be able to delete data', async function () {
    await expect(sbt.connect(user1).burn(user2.address)).to.be.revertedWith('Only Soul Owner have rights to delete their data');
  });
  
  it('User should be able to delete their data', async function () {
    await sbt.connect(user2).burn(user2.address);
  });

  it('Should not have any SBTs after burning anymore' , async function() {
    expect(await sbt.hasSbt(user2.address)).to.equal(false);
  });

  it('Should give an empty list for user2s sbts' , async function() {
    console.log(await sbt.getSbtsBySoul(user2.address));
  });
  
  it('hasSoul should return false after delete', async function () {
    expect(await sbt.hasSoul(user2.address)).to.equal(false);
  }); 
  
/* 
  it('3rd party should be able to create a profile', async function () {
    const soul = ['Alice', 'https://google.com', 92, new Date().getTime()];
    await sbt.connect(user1).setProfile(user2.address,soul);
  });

  it('getProfile should return profile', async function () {
    const soul = await sbt.getProfile(user1.address,user2.address);
    expect(soul[2]).to.equal(92);
  });

  it('hasProfile should return true', async function () {
    expect(await sbt.hasProfile(user1.address,user2.address)).to.equal(true);
  });

  it('listProfiles should return profile addresses', async function () {
    const profiles = await sbt.listProfiles(user2.address);
    expect(profiles[0]).to.equal(user1.address);
  });

  it('User should be able to delete their profiles data', async function () {
    await sbt.connect(user2).removeProfile(user1.address,user2.address);
  });

  it('hasProfile should return false after removal', async function () {
    expect(await sbt.hasProfile(user1.address,user2.address)).to.equal(false);
  });

  it('burn should remove all profiles too', async function () {
    const soul = ['Bob Smith', 'https://ethereum.org', 37, new Date().getTime()];
    await sbt.mint(user3.address,soul);
    await sbt.connect(user1).setProfile(user3.address,soul);
    expect(await sbt.hasProfile(user1.address,user3.address)).to.equal(true);
    await sbt.connect(user3).burn(user3.address);
    expect(await sbt.hasProfile(user1.address,user3.address)).to.equal(false);
  });
 */
});
