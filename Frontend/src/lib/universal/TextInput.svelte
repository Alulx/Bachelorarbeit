<script lang=ts>
import { createEventDispatcher } from "svelte";



    const dispatch = createEventDispatcher();

    let input: string;
  
    function manageEnter(event: any){
        event.preventDefault();
        if (event.keyCode === 13) {
            dispatch('searchEntered', {
                search: input
            });
            console.log(input);

        } 
    }

</script>

<input on:keyup={manageEnter} bind:value={input} type="text" placeholder="Search for Soul..." class="input input-bordered w-full max-w-xs bg-primaryy" />
