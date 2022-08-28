<script lang=ts>
import {  user } from "$lib/stores";


import ButtonPrimary from "$lib/universal/button-primary.svelte";
import TextInput from "$lib/universal/TextInput.svelte";
import { onMount } from "svelte";
import { web3,connected, defaultEvmStores, selectedAccount } from "svelte-web3";
import { writable } from "svelte/store";
import SBT_ABI from "../../contracts/SBT.json";
import contractAddress from "../../contracts/contract-address.json";
import type { AbiItem } from "web3-utils/types";

function changePage(event: { detail: { search: string; } }) {
    let route = event.detail.search;
    window.location.href = "/souls/"+route
}
/* defaultEvmStores.attachContract('sbtcontract',contractAddress.SBT, SBT_ABI.abi as AbiItem[])
 */
/**
 * Disconnect all connections form metamask
 */
async function disconnect(){
    await defaultEvmStores.disconnect()
    user.set("No Account Connected")
    localStorage.setItem('isWalletConnected', "false");
}

async function connect(){
         await defaultEvmStores.setProvider() 
         localStorage.setItem('isWalletConnected', "true");
         let address =  await $web3.eth.getAccounts()
         user.set(address[0]);

    }

/**
 *  Check if User is still connected after page reload
*/
onMount(async () => {
		if (localStorage?.getItem('isWalletConnected') === 'true'){
            try{
                console.log("Reconnecting...")
                await defaultEvmStores.setProvider();
                let address = await $web3.eth.getAccounts();
                user.set(address[0]);

                localStorage.setItem('isWalletConnected', "true");
            } catch (ex){
                console.log(ex);
            }
        }
	});

let address: string;

user.subscribe(value => {
    address = value;
});

</script>

<div class="navbar bg-primary w-full">
    <p class="btn btn-ghost normal-case text-xl"><a href ='/' >Decentralized Reputation</a></p>
    
    <a href="/about">About</a>
    <!-- use this instead of user store here-->
    <p class="ml-auto">{$selectedAccount}</p>

    <div class="ml-auto mr-0">
        {#if $connected}
        <button  on:click={disconnect} class="btn btn-ghost">Disconnect </button>
        {:else}
        <button  on:click={connect} class="btn btn-ghost">Connect </button>
        {/if}
        
        <TextInput on:searchEntered={changePage}> </TextInput>
    </div>
    
</div>