<script contex="module" lang=ts>

    export async function load({ fetch: any }){
        const result = await fetch('https://jsonplaceholder.typicode.com/posts');
        const souls = await result.json();

    if (result.ok){
        return{
            props: souls
        }
    }
    return {
        status: result.status,
        error: new Error(' Could not fetch the souls'),
    }
}
export let souls: any;
</script>


<div> This is where an address should be
   <!--  <ul>
            {#each souls as soul}
            <li>
                <a href ="/">{soul.title} </a>
            </li>
            {/each}
    </ul> -->

</div>