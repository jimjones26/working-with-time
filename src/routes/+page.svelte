<script lang="ts">
	import { getContext } from 'svelte';
	import * as d3 from 'd3';
	import ChartDataStats from '$lib/components/ChartDataStats.svelte';
	import type { Writable } from 'svelte/store';
	import type { DataItem } from '$lib/stores/DataItemInterface';
	import AxisBottom from '$lib/components/AxisBottom.svelte';
	import AxisLeft from '$lib/components/AxisLeft.svelte';
	import Marks from '$lib/components/Marks.svelte';

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

	// x and y axis values
	const xValue = (item: DataItem) => item.timestamp;
	const yValue = (item: DataItem) => item.temperature;

	// x and y axis labels
	const xAxisLabel = 'Time';
	const yAxisLabel = 'Temperature';

	// x and y scales
	const xScale = d3
		.scaleLinear()
		.domain(<Iterable<number>>d3.extent($chartData, xValue))
		.range([0, innerWidth])
		.nice();
	const yScale = d3
		.scaleLinear()
		.domain(<Iterable<number>>d3.extent($chartData, yValue))
		.range([innerHeight, 0])
		.nice();

	console.log('Date: ', new Date($chartData[0].timestamp as string));
</script>

<svg {width} {height}>
	<g transform={`translate(${margin.left}, ${margin.top})`}>
		<AxisBottom {xScale} {innerHeight} tickOffset={10} />
		<AxisLeft {yScale} {innerWidth} tickOffset={10} />
		<Marks data={$chartData} {xScale} {yScale} {yValue} {xValue} circleRadius={10} />
		<text
			text-anchor="middle"
			transform={`translate(${-40}, ${innerHeight / 2}) rotate(-90)`}
			fill="#635F5D">{yAxisLabel}</text
		>
		<text x={innerWidth / 2} y={innerHeight + 40} text-anchor="middle" fill="#635F5D"
			>{xAxisLabel}</text
		></g
	>
</svg>

<ChartDataStats {dataSize} {numberOfItems} {numberOfColumns} />
