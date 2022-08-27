<script lang="ts">
  import { user } from "$lib/stores";
  import { onMount } from "svelte";
  import { web3, connected, defaultEvmStores } from "svelte-web3";
  import type { AbiItem } from "web3-utils";
  import SBT_ABI from "../../contracts/SBT.json";
  import contractAddress from "../../contracts/contract-address.json";
  import type Contract from "web3/eth/contract";
  import type {Sbt} from "../../../../Backend/sbt"
  import type {Soul} from "../../../../Backend/soul"
  import { getSoul, hasSoul, mintSoul } from "$lib/sbtfunctions";
  
  let soul = {identity: 'Richard Stallman', url: 'gnu.org', score: Math.floor(Math.random() * 100), timestamp: Date.now() };
  let sbtcontract: any;
  
  let identity ='';
  let url =''; 
  $: console.log(identity)
  async function checkSoul(){
      sbtcontract =  new $web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress.SBT); 
      if(await hasSoul($user, sbtcontract)){
        soul = await getSoul($user, sbtcontract);
        alert("You already have a soul. Here it is: soul.identity: " + soul.identity + " soul.url: " + soul.url + " soul.score: " + soul.score + " soul.timestamp: " + soul.timestamp);
      
        
      } else{
        alert("You don't have a soul")
      }
  }

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

<div style="background-image: url(/img/index-bg.png); " class="w-full h-full bg-cover fixed flex">
    <div class="relative flex-col w-1/4 h-1/4 pl-5 left-10 top-10">
        <input bind:value={identity} type="text" placeholder="Put your name here" class="mb-5 input input-bordered input-accent w-full max-w-xs" />
        <input bind:value={url} type="text" placeholder="Put your url to link to here" class="mb-5 input input-bordered input-accent w-full max-w-xs" />
    </div>
    <div class="relative flex-col w-3/4 h-24 pt-5 left-10 top-10">
      <button  on:click={mintSoulFront} class="w-1/2 h-full btn btn-accent fontsize-100 " ><span class="top-50 left-50 text-3xl text-white">mint your soul</span>  </button>  
      <button  on:click={checkSoul} class=" btn btn-accent fontsize-100 " ><span class="top-50 left-50 text-3xl text-white">Check Soul Status </span>  </button>  
    </div>

</div>




