<script lang="ts">
	import type { DataItem } from '$lib/stores/DataItemInterface';

	export let data: Array<DataItem>;
	export let xScale: any;
	export let yScale: any;
	export let xValue: any;
	export let yValue: any;
	export let circleRadius: number;
</script>

{#each data as item, i}
	<circle cx={xScale(xValue(item))} cy={yScale(yValue(item))} r={circleRadius} fill="#137B80">
		<title>hover</title>
	</circle>
{/each}
