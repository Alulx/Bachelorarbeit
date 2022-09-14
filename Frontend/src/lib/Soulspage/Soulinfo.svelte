<script lang="ts">
import type { Soul } from "../../../../Backend/soul";
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();


    export let soul: Soul;

    async function showSbts(){
        dispatch('showSbts', {
		});
    }

</script> 


<div class="border-b text-center justify-center w-full h-1/4  left-10 top-10">
     <p class="font-bold text-xl pb-2 underline">Basic Information</p>
     <p class="font-bold text-xl pb-2"  > Identity: {soul.identity}</p> 
     <p class="font-bold text-xl pb-2 "> URL: {soul.url} </p> 
     <p class="font-bold text-xl pb-2"> Created at: { new Date(Number(soul.timestamp)).toLocaleDateString("en-GB")}</p> 
</div>