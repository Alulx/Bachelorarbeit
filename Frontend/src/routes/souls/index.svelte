<script lang="ts">
import { onMount } from "svelte";

    onMount(() =>{
        console.log (getCurrentURL());
    })

    function getCurrentURL () {
        return window.location.href
    }

</script>

<span> This is probably not what you are looking for!
    Try to input an address maybe
</span>