<script lang="ts">
import { onMount } from "svelte";
import {  user } from "$lib/stores";
import {browser} from "$app/env";
import { web3, connected, defaultEvmStores } from "svelte-web3";
import type { AbiItem } from "web3-utils";
import SBT_ABI from "../../contracts/SBT.json";
import contractAddress from "../../contracts/contract-address.json";
import type Contract from "web3/eth/contract";
import type {Sbt} from "../../../../Backend/sbt"
import type {Soul} from "../../../../Backend/soul"
import { attestSBT, getSbtsBySoul } from "$lib/sbtfunctions";


let sbtcontract: any;
let reputation: boolean;
let description: string;

let soul: string;
    onMount(async () => {
        console.log("here is a soul")
         soul = localStorage.getItem('soulSearched');
        }
    );
    
    async function showSbts(){
      sbtcontract =  new $web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress.SBT)
        console.log(await getSbtsBySoul(soul, sbtcontract));
    }

    async function AttestSBTFront(){
      sbtcontract =  new $web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress.SBT)
        console.log(await attestSBT(soul,$user ,reputation, description, sbtcontract));
    }


</script>
<div style="background-image: url(/img/purple.jpg); " class="w-full h-full bg-cover fixed flex">
    <div class="relative flex-col w-1/4 h-1/4 pl-5 left-10 top-10">
        <label class="text-1xl text-white">
            <input bind:checked={reputation} type="checkbox" class="mb-5 input input-bordered input-accent w-full max-w-xs" /> Check to Mark SBT as inherent positive
        </label>
        
        <input bind:value={description} type="text" placeholder="SBT Description" class="mb-5 input input-bordered input-accent w-full max-w-xs" />
    </div>
   
    <button  on:click={showSbts} class="w-48 h-12 btn btn-accent fontsize-100 " ><span class=" text-3xl text-white">show</span>  </button>  
    
    <button  on:click={AttestSBTFront} class="w-48 h-12 btn btn-accent fontsize-100 " ><span class=" text-3xl text-white">Attest SBT to that Soul</span>  </button>  


</div>