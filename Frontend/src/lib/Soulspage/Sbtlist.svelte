<script lang="ts">
    import type { Sbt } from "../../../../Backend/sbt";

    export let sbt: Sbt[];

</script>

<div id="AffiliatedSouls"
    class="flex-col border overflow-y-auto w-full h-full left-10 top-10">
        {#each sbt as s}
            <div class="{s.reputation ? 'positive' : 'negative'}">
                <p class="font-bold ">TokenId: {s.tokenId} </p> 
                <p class="font-bold "> Attested by {s.attester} </p> 
                <p class="font-bold "> Description: {s.explanation_url} </p> 
            </div>
        {/each} 
    
</div>
<style>
    .positive{
        border-width: 2px;
        border-color: rgb(74 222 128);
        flex: 1 1 0%;
        flex-direction: row;
        margin: 0.25rem;
        background-color: rgb(209 250 229);


    }

    .negative{
        border-width: 2px;
        border-color: rgb(185 28 28);
        flex: 1 1 0%;
        flex-direction: row;
        margin: 0.25rem;
        background-color: rgb(251 207 232);

    }


</style>