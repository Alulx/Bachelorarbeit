<script lang=ts>
import { user } from "$lib/stores";


import ButtonPrimary from "$lib/universal/button-primary.svelte";
import TextInput from "$lib/universal/TextInput.svelte";
import { onMount } from "svelte";
import { web3,connected, defaultEvmStores } from "svelte-web3";


function changePage(event: { detail: { search: string; }; }) {
    let route = event.detail.search;
    window.location.href = "/souls/"+route
}

function disconnect(){
    defaultEvmStores.disconnect()
    user.set("No Account Connected")
    localStorage.setItem('isWalletConnected', "false");

}

onMount(async () => {
    console.log("ola")
		if (localStorage?.getItem('isWalletConnected') === 'true'){
            try{
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
    
    <p class="ml-auto">{address}</p>

    <div class="ml-auto mr-0">
        {#if $connected}
        <button  on:click={disconnect} class="btn btn-ghost">Disconnect </button>
        {:else}
        <button  on:click={disconnect} class="btn btn-ghost cursor-not-allowed">Disconnect </button>
        {/if}
        
        <TextInput on:searchEntered={changePage}> </TextInput>
    </div>
    
</div>