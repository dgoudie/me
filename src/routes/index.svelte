<h1>{name}</h1>
<script>
import { onMount } from "svelte";


  let name = 'Daniel'

  onMount(() => {console.log('name', name)})
</script>