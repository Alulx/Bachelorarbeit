<script lang="ts">
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();


let reputation = true;
let description = '';

function AttestSBTFront() {
    dispatch('attestSbt', {
        reputation: reputation,
        description: description,
    });
    console.log(reputation)
    console.log(description)

}

</script>

<div class="pl-1 bg-gradient-to-r from-neutral to-secondary border justify-items-center grid bg-primary w-full h-2/4  ">
            <p class="text-center text-2xl font-bold">
                Attest an SBT to that Soul here. Uncheck the Checkbox to attest negative reputation.
            </p>

            <div class="justify-center flex flex-row w-full ">
                
                <input
                    bind:value={description}
                    type="text"
                    placeholder="SBT Description"
                    class="input input-bordered input-accent w-full max-w-xs"
                />

                <input
                    bind:checked={reputation}
                    type="checkbox"
                    class="border  input input-bordered input-accent w-16 "
                />

               
            </div>
            <button
                on:click={AttestSBTFront}
                class="w-48 h-12 btn btn-accent fontsize-100 "
                ><span class=" text-3xl text-white">Attest</span>
            </button>
        </div>

