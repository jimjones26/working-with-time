<script lang="ts">
	import { getContext } from 'svelte';

	// grab the chart data from the store
	const chartData: any = getContext('parsedData');
</script>

{JSON.stringify($chartData)}
