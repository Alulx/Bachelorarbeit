<script lang="ts">
import { user } from "$lib/stores";

import ButtonPrimary from "$lib/universal/button-primary.svelte";
import { onMount } from "svelte";

import { web3 } from "svelte-web3";
import type { AbiItem } from "web3-utils";
import SBT_ABI from '../../contracts/SBT.json';

    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

    interface Soul {
    identity: string,
    url: string,
    score: number,
    timestamp: number,
    }
    interface Sbt {
        tokenId: number;
        attester: string;
        reputation: boolean;
        explanation_url: string;
        active: boolean;
    }
    
    async function getSbt(tokenId: number): Promise<Sbt> {
    return await sbt.methods.getSbt(tokenId).call();
    }

    /**
     * Function to see if a soul has any sbts
     *
     * @param address - The address of the soul
     */
    async function hasSbt(address: string): Promise<Sbt> {
    return await sbt.methods.hasSbt(address).call();
    }

    async function getSoul(address: string): Promise<Soul> {
    return await sbt.methods.getSoul(address).call();
    }

    async function mintSoul(address: string, soulData: Soul): Promise<void> {
  console.log(`Minting Soul for  ${address}`);
  await sbt.methods.mint(address, soulData).send({ from: address, gasPrice: '20000000000' }).
    catch((error) => {
      console.error(error.data.message);
    });
}
let sbt: any;
let soul = {
  identity: 'Richard Stallman', url: 'gnu.org', score: Math.floor(Math.random() * 100), timestamp: Date.now() };

async function getSouls(){
    sbt =  new $web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress); //  ?????
    console.log("getSoul");
    console.log(await sbt.methods.getSoul('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266').call());
}
async function mint(){
    sbt =  new $web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress); //  ?????
    console.log(await sbt.methods.mint(($user),soul ).send({ from:($user), gasPrice: '20000000000' }).
    catch((error: any) => {
      console.error(error.data.message);
    }));
}


</script>
<div class="w-full h-full bg-cover fixed flex">
    web3
    This should print some stuff
    <div >
        <button  on:click={getSouls} class="btn btn-primary" > GetSouls </button>
        <button  on:click={mint} class="btn btn-primary" > mintSoul </button>
        {$user}
    </div>
</div>