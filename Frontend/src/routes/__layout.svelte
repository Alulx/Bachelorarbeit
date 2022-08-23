<script lang=ts>

    import '../app.css';
    import NavigationBar from '../lib/layout/navigation-bar.svelte';
    import { web3 } from "svelte-web3";
    import type { AbiItem } from "web3-utils";
    import SBT_ABI from '../contracts/SBT.json';
    import { onMount } from 'svelte';

    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

    interface Soul {
    identity: string,
    url: string,
    score: number,
    timestamp: number,
    }
    interface Sbt {
        tokenId: number;
        attester: string;
        reputation: boolean;
        explanation_url: string;
        active: boolean;
    }
    
    async function getSbt(tokenId: number): Promise<Sbt> {
    return await sbt.methods.getSbt(tokenId).call();
    }

    /**
     * Function to see if a soul has any sbts
     *
     * @param address - The address of the soul
     */
    async function hasSbt(address: string): Promise<Sbt> {
    return await sbt.methods.hasSbt(address).call();
    }

    async function getSoul(address: string): Promise<Soul> {
    return await sbt.methods.getSoul(address).call();
    }
let test: any;
let sbt: any;

    onMount(async () => {
        sbt =  new $web3.eth.Contract(SBT_ABI.abi as AbiItem[], contractAddress); //  ?????
        test = await getSoul('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
        console.log(test)
        console.log("getSoul()");
        console.log(await sbt.methods.getSoul('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266').call());
	});

</script>

<NavigationBar> </NavigationBar>
<slot />
