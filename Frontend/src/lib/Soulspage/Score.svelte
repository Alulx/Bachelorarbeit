<script lang="ts">
    
        export let score: string
        export let searchedSoul: string;
        const reputation = score.split(',');
</script>

 
<div class="shadow-md shadow-accent border bg-primary bg-gradient-to-r from-primary to-neutral text-center justify-center w-full h-2/4  left-10 top-10">
  <!--   <p class="text-lg font-bold">
        Ratings for {searchedSoul}
    </p> -->
    

    
    <div class=""> 

        <div class="flex flex-row justify-center items-center pt-5 ">
            <div class="flex flex-col justify-center items-center ">
                <p class="font-bold text-2xl">Score based on SBT Quantity</p>
                <p class="text-2xl font-bold ">{(parseFloat(reputation[1]) *100).toFixed(0)}%</p>
            </div>
            <div class="flex flex-col justify-center items-center ">
                <p class="text-2xl font-bold">Score based on SBT Quality</p>
                <p class="text-2xl font-bold ">{(parseFloat(reputation[2]) *100).toFixed(0)}%</p>
            </div>
           <!--  <div class ="flex flex-col justify-center items-center pt-10">
                <img src="/img/caution.png" alt="danger" >
            </div> -->
        </div>


        <div class="flex flex-row justify-center items-center pt-5">
            <div class="flex flex-col justify-center items-center ">
                <p class="text-2xl font-bold">Final Reputation Score</p>
                <p class="text-2xl font-bold">{(parseFloat(reputation[0]) *100).toFixed(0)}%</p>
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