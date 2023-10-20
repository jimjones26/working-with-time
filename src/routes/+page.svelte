<script lang="ts">
	import { getContext } from 'svelte';
	import * as d3 from 'd3';
	import ChartDataStats from '$lib/components/ChartDataStats.svelte';

	// grab the chart data from the store
	const chartData: any = getContext('parsedData');

	// calculate stats for chart data
	$: dataSize = Math.round(d3.csvFormat($chartData).length / 1024);
	$: numberOfItems = $chartData.length;
	$: numberOfColumns = $chartData.columns.length;
</script>

<ChartDataStats {dataSize} {numberOfItems} {numberOfColumns} />
{JSON.stringify($chartData)}
