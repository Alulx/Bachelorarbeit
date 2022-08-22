<script lang=ts>

import TextInput from "$lib/universal/TextInput.svelte";


function changePage(event: { detail: { search: string; }; }) {
     let route = event.detail.search;
    window.location.href = "/souls/"+route
}

</script>

<div class="navbar bg-primary w-full">
    <p class="btn btn-ghost normal-case text-xl">Decentralized Reputation</p>
    <a href="/about">About</a>
    <div  style="margin-left: auto;  margin-right: 0;">
        <TextInput on:searchEntered={changePage}> </TextInput>
    </div>
    
</div>