<script  lang=ts>
    import { connected,  chainData,  } from 'svelte-web3'
</script>


<div style="background-image: url(/img/index-bg.png);" class="w-full h-full bg-cover fixed">
 
    <div class=" m-5">
        {#if !$connected}
            <p>My application is not yet connected</p>
        {:else}
            <p>Connected to chain with {$chainData.chain}</p>
        {/if}
    </div>

    
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