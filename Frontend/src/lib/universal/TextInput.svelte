<script lang=ts>

    import { createEventDispatcher } from "svelte";
    import { writable } from "svelte/store";
    import {browser} from "$app/env"

    export const soulSearched = writable(
        browser && (localStorage.getItem('soulSearched') || ''));
    soulSearched.subscribe((val) => browser && localStorage.setItem("soulSearched", val));

    const dispatch = createEventDispatcher();

    
    function manageEnter(event: any){
        event.preventDefault();
        //Code 13 = Enter
        if (event.keyCode === 13) {
            dispatch('searchEntered', {
                search: $soulSearched
            });
            console.log($soulSearched);

        } 
    }

</script>
<div class= "w-full justify-center">
    <input on:keyup={manageEnter} bind:value={$soulSearched} type="text" placeholder="Search for Soul..." class="input input-bordered w-full max-w-xs " />
</div>
