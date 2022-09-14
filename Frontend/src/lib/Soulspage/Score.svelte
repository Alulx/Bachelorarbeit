<script lang="ts">
    import type { Soul } from "../../../../Backend/soul";

        export let soul: string;

    </script>

 
  <div class=" text-center justify-center w-full h-3/4  left-10 top-10">
    <p class=" text-xl text-white ">
        Score for {soul}
    </p>
    

    <div class=""> 

        <div class="flex flex-row justify-center items-center">
            <div class="flex flex-col justify-center items-center">
                <p class="text-2xl text-white">Reputation</p>
                <p class="text-2xl text-white">0</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <p class="text-2xl text-white">Trust</p>
                <p class="text-2xl text-white">0</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <p class="text-2xl text-white">Trustworthiness</p>
                <p class="text-2xl text-white">0</p>
            </div>
        </div>
    </div>
</div>