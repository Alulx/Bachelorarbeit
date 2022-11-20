<script lang="ts">
import type { Soul } from "../../../../Backend/models/soul";

    export let soul: Soul;
    export let searchedSoul: string;
</script> 


<div class="bg-gradient-to-r from-primary to-neutral border bg-primary text-center justify-center w-full h-2/4 pt-5 left-10 top-10">
     <p class="font-bold text-xl pb-5 underline">Basic Information</p>
     <p class="font-bold text-lg pb-2"  > Address: {searchedSoul}</p> 
     <p class="font-bold text-xl pb-5 pt-7"  > Identity: {soul.identity}</p> 
     <p class="font-bold text-xl pb-5 "> URL: {soul.url} </p> 
     <p class="font-bold text-xl pb-5"> Created at: {new Date(Number(soul.timestamp )).toLocaleDateString("en-GB")}</p> 
</div>