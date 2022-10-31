<script lang="ts">
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();


let tokenId: number ;


function revokeSBTFront() {
    dispatch('revokeSbt', {
        tokenId: tokenId,
    });

}

</script>

<div class="shadow-md shadow-accent bg-gradient-to-r from-neutral to-secondary p-1 border justify-items-center grid bg-primary w-full h-2/4 ">
            <p class=" text-center text-2xl font-bold">
                Revoke an SBT that you previously attested to this Soul here.
            </p>

            <label class="text-1xl text-white">
                <input
                    bind:value={tokenId}
                    type="number"
                    min="0"
                    class=" input input-bordered input-accent w-full max-w-xs"
                    placeholder="TokenId"

                />
            </label>

            <button
                on:click={revokeSBTFront}
                class="  w-48 h-12 btn btn-accent fontsize-100 "
                ><span class=" text-3xl text-white">Revoke</span>
            </button>
</div>

