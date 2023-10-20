<script lang="ts">
	import { getContext } from 'svelte';
	import * as d3 from 'd3';
	import ChartDataStats from '$lib/components/ChartDataStats.svelte';
	import type { Writable } from 'svelte/store';
	import type { DataItem } from '$lib/stores/DataItemInterface';

	// grab the chart data from the store
	const chartData: Writable<Array<DataItem>> = getContext('parsedData');

	// calculate stats for chart data
	$: dataSize = Math.round(d3.csvFormat($chartData).length / 1024);
	$: numberOfItems = $chartData.length;
	$: numberOfColumns = Object.entries($chartData[0]).length;

	console.log('Date: ', new Date($chartData[0].timestamp as string));
</script>

<ChartDataStats {dataSize} {numberOfItems} {numberOfColumns} />
{JSON.stringify($chartData)}
