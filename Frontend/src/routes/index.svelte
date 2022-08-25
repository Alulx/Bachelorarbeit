<script  lang=ts>
    import { onMount } from 'svelte';
    import ButtonPrimary from '$lib/universal/button-primary.svelte';
    import { connected, web3, selectedAccount, chainId, chainData, defaultEvmStores } from 'svelte-web3'

	import { user } from '$lib/stores';


</script>



<div style="background-image: url(/img/index-bg.png);" class="w-full h-full bg-cover fixed flex">
    <div class="relative top-28 left-28">
        <ButtonPrimary>
             <a href ='/mint' >  Find your Soul now </a> 
        </ButtonPrimary>
        {#if !$connected}

        <p>My application is not yet connected</p>

        {:else}

        <p>Connected to chain with id {$chainId}</p>
        
        {/if}
        <div>
            <img src="/img/tap.png" alt="Tap here" class="w-10 h-10 relative -right-3/4 -top-3">
        </div>
    </div>
</div>