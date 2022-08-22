<script lang=ts>
import TextInput from '$lib/universal/TextInput.svelte';

    import '../app.css';
    import NavigationBar from '../lib/layout/navigation-bar.svelte';

    function changePage(route: string) {
        return function(): void {
                window.location.href = route;
        };
    }

</script>

<NavigationBar> </NavigationBar>
<slot />
