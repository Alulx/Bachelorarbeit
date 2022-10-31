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
  
   
    
  </script>
  
    <div class=" w-full h-full fixed bg-gradient-to-r from-transparent via-neutral to-transparent overflow-auto">
    


    <div class= "w-1/6 h-full  bg-gradient-to-r from-primary  to-transparent fixed"></div>

    <div style="display:flex;justify-content:flex-end;">
        <div  class= "w-1/6 h-full bg-gradient-to-r from-transparent  to-secondary fixed"></div> 
      </div>
     

    <div style="margin-left:auto;margin-right:auto;" class=" w-5/6 p-5 flex-col">
        
        <p class="w-fit font-bold text-2xl ml-40 italic  bg-transparent shadow bg-gradient-to-l "> 
            Why are we here?
        </p>
        <div style="margin-left:auto;margin-right:auto;" class=" ring-2 ring-white shadow-md shadow-neutral  m-4 italic text-center justify-center w-5/6 bg-gradient-to-l hover:from-secondary hover:to-primary hover:via-neutral">
            <p style="white-space: pre-line" class=" font-bold text-2xl p-5 ">
                "The spread of misinformation not only emerges as a challenge that is difficult to solve, but also poses a danger to the public by radicalizing individuals or by sharing misinformation about health. [...]
                  It has become clear that the major players in today's Web2-dominated landscape lack the power and good will to change this, increasing the need for decentralized reputation."
            </p>
        </div>
        
        <div class ="pt-20"></div>
        <p class="bg-transparent w-fit font-bold text-2xl ml-40 italic bg-gradient-to-l"> 
            What are Souls and SBTs? 
        </p>
        <div style="margin-left:auto;margin-right:auto;" class=" bg-gradient-to-l hover:from-secondary hover:to-primary hover:via-neutral ring-2 ring-white shadow-md shadow-accent  m-5  text-center justify-center w-5/6">
            <p style="white-space: pre-line" class=" font-bold text-2xl p-5 ">
                SBT are publicly visible, non-transferrable, but revocable tokens.
                Souls can represent different entities, such as corporations, foundations, or individuals.
                Souls can issue SBTs to themselves (like a CV) or attest other souls with them.
            </p>
        </div>

        <div class ="pt-20"></div>
        <p class="bg-transparent w-fit font-bold text-2xl ml-40 italic"> 
            Ok, but what do they do? 
        </p>
        <div style="margin-left:auto;margin-right:auto;" class="bg-gradient-to-l hover:from-secondary hover:to-primary hover:via-neutral ring-2 ring-white shadow-md shadow-accent  m-5 italic text-center justify-center w-5/6">
            <p style="white-space: pre-line" class=" font-bold text-2xl p-5 ">
               "The emerging ecosystem of souls and SBTs strengthens the development of social relationships between individuals. The created social identity opens up new applications in the Web3 area, such as the creation of undersecured credit markets with the help of reputation, the measurement of decentralization or the prevention of cooperation in voting. "
            </p>
        </div>

        <div class ="pt-20"></div>
        <p class="bg-transparent w-fit font-bold text-2xl ml-40 italic"> 
            What is DeRep?
        </p>
        <div style="margin-left:auto;margin-right:auto;" class="bg-gradient-to-l hover:from-secondary hover:to-primary hover:via-neutral ring-2 ring-white shadow-md shadow-accent  m-5 italic text-center justify-center w-5/6">
            <p style="white-space: pre-line" class=" font-bold text-2xl p-5 ">
                "After a user has created a soul using their wallet address, which serves as a decentralized identity, they can start distributing or receiving SBT to other users. The tokens can be viewed as simple ratings and can be either positive or negative, making it possible to collect a number of SBTs and build trust."            </p>
        </div>

        <div class ="pt-20"></div>


    </div>
   
   
   
  </div> 
  
 
   