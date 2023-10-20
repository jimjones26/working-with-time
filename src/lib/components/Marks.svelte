<script lang="ts">
	import * as d3 from 'd3';
	import type { DataItem } from '$lib/stores/DataItemInterface';

	export let data: Array<DataItem>;
	export let xScale: any;
	export let yScale: any;
	export let xValue: any;
	export let yValue: any;
	export let circleRadius: number;
</script>

<path
	fill="none"
	stroke="#137B80"
	d={d3
		.line()
		.x((d) => xScale(xValue(d)))
		.y((d) => yScale(yValue(d)))(data)}
/>
{#each data as item, i}
	<circle cx={xScale(xValue(item))} cy={yScale(yValue(item))} r={circleRadius} fill="#137B80">
		<title>hover</title>
	</circle>
{/each}
