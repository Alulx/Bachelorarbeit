<script lang="ts">
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();


let reputation = false;
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

<div class="pl-1 border  bg-primary w-full h-2/4 ">
            <p class="text-2xl text-white">
                Attest an SBT to that Soul here
            </p>

            <label class="text-1xl text-white">
                <input
                    bind:checked={reputation}
                    type="checkbox"
                    class="border  input input-bordered input-accent w-full max-w-xs"
                />
            </label>

            <input
                bind:value={description}
                type="text"
                placeholder="SBT Description"
                class="mb-5 input input-bordered input-accent w-full max-w-xs"
            />
            <button
                on:click={AttestSBTFront}
                class="w-48 h-12 btn btn-accent fontsize-100 "
                ><span class=" text-3xl text-white">Attest</span>
            </button>
        </div>

