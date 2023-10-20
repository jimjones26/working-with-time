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

	// width, height and margins for svg container
	const width: number = 960;
	const height: number = 500;
	const margin = { top: 20, right: 30, bottom: 50, left: 70 };

	// inner height and width of chart
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

	console.log('Date: ', new Date($chartData[0].timestamp as string));
</script>

<svg {width} {height}>
	<g transform={`translate(${margin.left}, ${margin.top})`} />
</svg>

<ChartDataStats {dataSize} {numberOfItems} {numberOfColumns} />
