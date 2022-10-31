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

<div style="left:42%" class= "absolute  w-80">
    <input on:keyup={manageEnter} bind:value={$soulSearched} type="text" placeholder="Search for Soul..." class="input input-bordered  input-accent w-full max-w-xs" />
</div>
