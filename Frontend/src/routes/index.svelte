<script context="module" lang=ts>
    import { onMount } from 'svelte';

    import { defaultEvmStores } from 'svelte-ethers-store'
    import ButtonPrimary from '$lib/universal/button-primary.svelte';
    import { connected, provider, chainId, chainData, signer, signerAddress, contracts } from 'svelte-ethers-store'
   /*  onMount(
    () => {
      // add a test to return in SSR context
      defaultEvmStores.setProvider()
    }
    ) */

    async function connectWallet(){
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            // Ask User permission to connect to Metamask
            await window.ethereum.enable();
        };
    } 

</script>



<div style="background-image: url(/img/index-bg.png);" class="w-full h-full bg-cover fixed flex">
    <div class="relative top-28 left-28">
        <ButtonPrimary>
            <!-- <a href ='/souls' > --> Find your Soul now<!-- </a> -->
        </ButtonPrimary>
       
        <div>
            <img src="/img/tap.png" alt="Tap here" class="w-10 h-10 relative -right-3/4 -top-3">
        </div>
    </div>
</div>