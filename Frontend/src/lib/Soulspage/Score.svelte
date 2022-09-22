<script lang="ts">
    
        export let score: string
        export let searchedSoul: string;
        const reputation = score.split(',');
</script>

 
<div class="bg-secondary text-center justify-center w-full h-3/4  left-10 top-10">
    <p class=" text text-white ">
        Ratings for {searchedSoul}
    </p>
    

    
    <div class=""> 

        <div class="flex flex-row justify-center items-center pt-5 ">
            <div class="flex flex-col justify-center items-center ">
                <p class="text-2xl text-white">Score based on SBT Quantity</p>
                <p class="text-2xl text-white">{(parseFloat(reputation[1]) *100).toFixed(0)}%</p>
            </div>
            <div class="flex flex-col justify-center items-center ">
                <p class="text-2xl text-white">Score based on SBT Quality</p>
                <p class="text-2xl text-white ">{(parseFloat(reputation[2]) *100).toFixed(0)}%</p>
            </div>
           <!--  <div class ="flex flex-col justify-center items-center pt-10">
                <img src="/img/caution.png" alt="danger" >
            </div> -->
        </div>


        <div class="flex flex-row justify-center items-center pt-5">
            <div class="flex flex-col justify-center items-center ">
                <p class="text-2xl text-white">Final Reputation Score</p>
                <p class="text-2xl text-white">{(parseFloat(reputation[0]) *100).toFixed(0)}%</p>
            </div>
        </div>

        {#if Number(reputation[0]) < 0.6 && Number(reputation[0]) > 0.2}
        <div class="flex flex-row justify-center items-center pt-5">
            <img class=""src="/img/caution.png" alt="danger" width="150"  >
        </div>
        {:else if Number(reputation[0]) <= 0.2}
        <div class="flex flex-row justify-center items-center pt-5">
            <img class=" "src="/img/RedDanger.png" alt="danger" width="150"  >
        </div>
        {:else}
        <div class="flex flex-row justify-center items-center pt-5">
            <img class=""src="/img/GreenCheck.png" alt="danger" width="100"  >
        </div>
        {/if}



    </div>
</div>