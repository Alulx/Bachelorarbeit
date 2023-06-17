<script lang="ts">
  import Minthint from '../../lib/Mintpage/Minthint.svelte';

  import Soulinfo from '../../lib/Mintpage/Soulinfo.svelte';

  import Header from '../../lib/universal/Header.svelte';

  import Mintbox from '../../lib/Mintpage/Mintbox.svelte';

  import { user } from "$lib/stores";
  import { defaultEvmStores as evm, connected,  web3, contracts , selectedAccount } from 'svelte-web3'
  import type { AbiItem } from "web3-utils";
  import SBT_ABI from "../../contracts/SBT.json";
  import contractAddress from "../../contracts/contract-address.json";
  import { hasSoul, mintSoul } from "$lib/sbtfunctions";
  import type {Soul} from "../../../../Backend/models/soul"
  import {page} from "$app/stores";

  evm.attachContract('sbtcontract',contractAddress.SBT, SBT_ABI.abi as AbiItem[])

  let SoulObject: Soul;
  let sbtcontract: any;
  let soulExists: boolean;
  let searchedSoul: string;
  searchedSoul =  $page.params.soul

  let identity ='';
  let url =''; 

  async function mintSoulFront(){
      sbtcontract =  new $web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress.SBT)
      if (identity  === '' || url === ''){
          alert('Please fill in all fields');
          return;
      }
      if (await hasSoul($user, sbtcontract)){
          alert('You already have a soul');
          return;
      }
        console.log(await mintSoul($user,{identity: identity, url: url, score: 0,timestamp: Date.now()},sbtcontract));
    }

    let data = getData();

async function getData() {   

    connected.subscribe(async value => {
            if (!value) return
            soulExists = await $contracts.sbtcontract.methods.hasSoul($selectedAccount).call();
            console.log('target has Soul:', soulExists);
        })
    
    contracts.subscribe(async $contracts => {
        if (!$contracts.sbtcontract) return;
        SoulObject = await $contracts.sbtcontract.methods.getSoul($selectedAccount).call();
    })
       // Just an empty promise to make svelte wait for the data to be loaded
       return new Promise(resolve => {
        setTimeout(async () => {
        resolve({});
        }, 1000);
    });
    }
  
</script>



{#await data}
 <p>Loading..</p> <!-- TODO: make loading page nice -->
{:then value}
<div class=" w-full h-full fixed bg-gradient-to-r from-transparent via-neutral to-transparent">
  
 <Header> 
    <p style="white-space: pre-line" class="bg-gradient-to-l hover:from-secondary hover:to-primary hover:via-neutral font-bold text-2xl bg-neutral p-5 ">
      Register by minting a Soul on this page. 
      A Soul is needed to help identify you on DeRep and start attesting and collecting SBTs.
      All you need is a name for your profile and an external source of reference (website, twitter, email, etc).
    </p>
  </Header>
 
  <div style="height: 93%" class="w-full h-full bg-cover fixed flex gap-3 p-5">
    {#if soulExists} 
      <Soulinfo SoulObject={SoulObject}></Soulinfo>
    {:else}
      <Minthint></Minthint>
    {/if}

  <Mintbox></Mintbox>
  </div>
</div> 
{/await}


   <!--  <div class="relative flex-col w-1/4 h-1/4 pl-5 left-10 top-10">
        <input bind:value={identity} type="text" placeholder="Put your name here" class="mb-5 input input-bordered input-accent w-full max-w-xs" />
        <input bind:value={url} type="text" placeholder="Put your url to link to here" class="mb-5 input input-bordered input-accent w-full max-w-xs" />
    </div>
    <div class="relative flex-col w-3/4 h-24 pt-5 left-10 top-10">
      <button  on:click={checkSoul} class=" btn btn-accent fontsize-100 " ><span class="top-50 left-50 text-3xl text-white">Check Soul Status </span>  </button>  
    </div>

    <div class="bg-gradient-to-r from-neutral to-secondary p-1 border justify-items-center grid bg-primary w-full h-2/4 ">
      <p class=" text-center text-2xl font-bold">
          Revoke an SBT that you previously attested to this Soul here.
      </p>
      <button  on:click={mintSoulFront} class="w-1/2 h-full btn btn-accent fontsize-100 " ><span class="top-50 left-50 text-3xl text-white">mint </span>  </button>  

    </div> -->



    <!--  <div style="margin-left:auto;margin-right:auto;" class="hover:from-secondary hover:to-primary hover:via-neutral hover:ring-2 hover:ring-white shadow-md shadow-neutral bg-gradient-to-r from-primary via-neutral to-secondary mt-16 m-5    italic text-center justify-center w-3/6">
    <p style="white-space: pre-line" class="font-bold text-2xl  ">
      On this page you can mint a soul for your wallet address to get startedt attesting and collectings SBTs
    </p>

  </div>
 
-->

 