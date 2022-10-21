<script  lang=ts>
    import { onMount } from 'svelte';
    import ButtonPrimary from '$lib/universal/button-primary.svelte';
    import { connected, web3, selectedAccount, chainId, chainData, defaultEvmStores } from 'svelte-web3'

	import { user } from '$lib/stores';


</script>


<div style="background-image: url(/img/index-bg.png);" class="w-full h-full bg-cover fixed">
 


    <div class=" m-5">
       
        {#if !$connected}

        <p>My application is not yet connected</p>

        {:else}

        <p>Connected to chain with {$chainData.chain}</p>
        
        {/if}
        <!-- <div>
            <img src="/img/tap.png" alt="Tap here" class="w-10 h-10 relative -right-3/4 -top-3">
        </div> -->
    </div>

  <!--   <div class="bg-black ring-2 ring-blue-500 shadow-2xl m-5 absolute  text-center justify-center ">
        <p class="font-bold text-xl text-secondary ">
            "Soulbound Tokens sind öffentlich einsehbare, nicht transferierbare, aber widerrufbare Tokens.
            Als Souls (dt. Seelen) werden Accounts oder Wallets bezeichnet, die diese Tokens halten. SBTs können eine
            Reihe von Dingen darstellen, wie zum Beispiel Bescheinigungen, Affiliationen oder anderweitige
            Zugehörigkeiten."
        </p>
        <p class="font-bold text-xl text-primary ">
            "Seelen können sich SBTs selber ausstellen (wie bei einem Lebenslauf) oder andere Seelen da-
            mit attestieren. Seelen können verschiedene Entitäten darstellen, wie zum Beispiel Unternehmen,
            Stiftungen oder Einzelpersonen.""
        </p>
        
    </div> -->
    
    <div style="margin-left:auto;margin-right:auto;" class="ring-indigo-600 bg-black ring-4 mt-10 m-5 italic text-center justify-center w-fit">
        <p class="font-bold text-2xl text-secondary ">
            "The Dao is the hearth and home
        </p>
        <p class="font-bold text-2xl text-secondary ">
            of the ten thousand things.
        </p>
        <p class="font-bold text-2xl text-secondary ">
            Good souls treasure it,
        </p>
        <p class="font-bold text-2xl text-secondary ">
            lost souls find shelter in it."
        </p>
        <p class="font-bold text-2xl text-secondary ">
            — Laozi, #62
        </p>
    </div>


</div>