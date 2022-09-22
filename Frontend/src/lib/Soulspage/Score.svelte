<script lang="ts">
    
        export let score: number
        export let searchedSoul: string;

    </script>

 
  <div class="bg-secondary text-center justify-center w-full h-3/4  left-10 top-10">
    <p class=" text text-white ">
        Score for {searchedSoul}
    </p>
    

    <div class=""> 

        <div class="flex flex-row justify-center items-center">
            <div class="flex flex-col justify-center items-center pt-10">
                <p class="text-2xl text-white">Reputation</p>
                <p class="text-2xl text-white">{score}</p>
            </div>

           <!--  <div class ="flex flex-col justify-center items-center pt-10">
                <img src="/img/caution.png" alt="danger" >
            </div> -->

        </div>
    </div>
</div>