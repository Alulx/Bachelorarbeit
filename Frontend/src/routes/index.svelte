<script  lang=ts>

    import { connected,  chainData,  } from 'svelte-web3'
    
</script>


<div style="background-image: url(/img/index-bg.png);" class="w-full h-full bg-cover fixed">
 


    <div class="m-5">
       
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
    
    <div style="margin-left:auto;margin-right:auto;" class="hover:from-secondary hover:to-primary hover:via-neutral hover:ring-2 hover:ring-white shadow-md shadow-neutral bg-gradient-to-r from-primary via-neutral to-secondary mt-16 m-5    italic text-center justify-center w-3/6">
        <p style="white-space: pre-line" class="font-bold text-2xl  ">
            "The Dao is the hearth and home
            of the ten thousand things.
            Good souls treasure it,
            lost souls find shelter in it."
            — Laozi, #62
        </p>
    </div>


</div>