<script lang="ts">
  import { user } from "$lib/stores";
  import { defaultEvmStores as evm, connected,  web3, contracts , selectedAccount } from 'svelte-web3'
  import type { AbiItem } from "web3-utils";
  import SBT_ABI from "../../contracts/SBT.json";
  import contractAddress from "../../contracts/contract-address.json";
  import { hasSoul, mintSoul } from "$lib/sbtfunctions";
  import type {Soul} from "../../../../Backend/models/soul"
import {page} from "$app/stores";


  let sbtcontract: any;
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

  
</script>

<div class=" w-1/2 h-1/2 bg-gradient-to-r from-neutral to-secondary border justify-items-center grid bg-primary p-5 gap-5 shadow-md shadow-accent">
      <p class="pb-5 text-center text-2xl font-bold">
          Mint your Soul here
      </p>
      
      <div class="pb-20  grid grid-cols-2 gap-5 ">
        <p class="text-center text-2xl font-bold">
          Enter a Name:
        </p> 
          <input
                bind:value={identity}
                type="text"
                placeholder="Put your name here..."
                class="input input-bordered input-accent "
            />
        <p class="text-center text-2xl font-bold">
          Enter a reference:
        </p> 
            <input
                bind:value={url}
                type="text"
                placeholder="Put your reference link here..."
                class="input input-bordered input-accent w-80 "
            />
      </div>

      <button
          on:click={mintSoulFront}
          class="w-48 h-12 btn btn-accent fontsize-100 "
          ><span class=" text-3xl text-white">Mint</span>
      </button>

</div>