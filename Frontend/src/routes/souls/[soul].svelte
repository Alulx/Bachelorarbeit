<script lang="ts">
  import PageNotFound from '../../lib/universal/PageNotFound.svelte';

import { onMount } from "svelte";
import {  user } from "$lib/stores";
import {browser} from "$app/env";
import { defaultEvmStores as evm, connected, chainId, chainData,  web3, contracts , selectedAccount } from 'svelte-web3'
import type { AbiItem } from "web3-utils";
import SBT_ABI from "../../contracts/SBT.json";
import contractAddress from "../../contracts/contract-address.json";
import type Contract from "web3/eth/contract";
import type {Sbt} from "../../../../Backend/sbt"
import type {Soul} from "../../../../Backend/soul"
import { attestSBT, getSbtsBySoul, getSoul, hasSoul } from "$lib/sbtfunctions";
evm.attachContract('sbtcontract',contractAddress.SBT, SBT_ABI.abi as AbiItem[])
 
let sbtcontract: any;
let reputation: boolean;
let description = '';

let soulExists;
let soul: string;
let SoulObject: Soul;  
let sbts: Sbt[];

    selectedAccount.subscribe(async $selectedAccount => {
        if (!$selectedAccount) return;

        console.log('connected to account ', $selectedAccount)
    })

   
    connected.subscribe(async value => {
        if (!value) return
        soulExists = await $contracts.sbtcontract.methods.hasSoul(soul).call();
        console.log('target has Soul:', soulExists);
    }) 
   

    contracts.subscribe(async $contracts => {
        if (!$contracts.sbtcontract) return;
        SoulObject = await $contracts.sbtcontract.methods.getSoul(soul).call();
        console.log('Soul is', SoulObject);
        showSbts();
    }) 

    onMount(async () => {
      
        soul = localStorage.getItem('soulSearched');
        console.log("here is the searched soul: ", soul);
        
    });
    
    async function showSbts(){
        console.log("Souls sbts are:",await getSbtsBySoul(soul, $contracts.sbtcontract));
    }

    async function AttestSBTFront(){
        if (description  === ''){
          alert('Please fill in a description ');
          return;
      }
      sbtcontract =  new $web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress.SBT)
       await attestSBT(soul,$user ,reputation, description, sbtcontract);
       
    }

    
    async function RevokeSBTFront(){
        if (description  === ''){
          alert('Please fill in a description ');
          return;
      }
      sbtcontract =  new $web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress.SBT)
       await attestSBT(soul,$user ,reputation, description, sbtcontract);
    }

    async function hasSoulFront(){
        sbtcontract =  new $web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress.SBT)
        console.log (await hasSoul(soul,sbtcontract));
    }


</script>

<!-- {#if !soulExists}
<PageNotFound></PageNotFound>

{:else} -->
<div style="background-image: url(/img/purple.jpg);" class="w-full h-full bg-cover fixed flex gap-3 p-5">
  
    <div id="AffiliatedSouls" class="border relative flex-col w-1/4 h-5/6  " >
        <div class="border  w-full h-2/4  left-10 top-10">
                        <button  on:click={showSbts} class=" w-48 h-12 btn btn-accent fontsize-100 " ><span class=" text-3xl text-white">show</span>  </button>  
                put identity and timestamp here
        </div>
      
        <div  id="AffiliatedSouls" class="flex-col border  w-full h-2/4 pl-5 left-10 top-10"> 
            put affiliated Souls here 
            <button  on:click={hasSoulFront} class=" w-48 h-12 btn btn-accent fontsize-100 " ><span class=" text-3xl text-white">hassoul</span>  </button>  
        </div>
    </div>
    
    <div id="Confidence Score" class="w-2/4 h-5/6 border grid gap-2 place-items-center "> 
        <label class=" text-2xl text-white ">
            Score for {soul}:
        </label>
         
        <!--   {#await hasSoulFront() then value}
    {value}
    {/await} -->
    put score here
    </div>  
    
    <div class="w-1/4 h-5/6  border relative"> 
        <div class="border  w-full h-2/4 ">
            <label class="text-2xl text-white"> Attest an SBT to that Soul here </label>

            <label class="text-1xl text-white">
                <input bind:checked={reputation} type="checkbox" class="border  input input-bordered input-accent w-full max-w-xs" /> 
            </label>
            
            <input bind:value={description} type="text" placeholder="SBT Description" class="mb-5 input input-bordered input-accent w-full max-w-xs" />
            <button  on:click={AttestSBTFront} class="w-48 h-12 btn btn-accent fontsize-100 " ><span class=" text-3xl text-white">Attest</span>  </button> 

        </div>

        <div  id="AffiliatedSouls" class="flex-col border  w-full h-2/4 left-10 top-10 p-2"> 

        </div>

    </div>

</div>
<!-- {/if}
 -->
   
