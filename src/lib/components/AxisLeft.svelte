<script lang="ts">
	export let yScale: any;
	export let innerWidth: number;
	export let tickOffset: number = 5;
</script>

{#each yScale.ticks() as tick, i}
	<g transform={`translate(0, ${yScale(tick)})`}>
		<line x2={innerWidth} stroke="#C0C0BB" />
		<text fill="#635F5D" style="text-anchor: end;" dy=".32em" x={-tickOffset}>{tick}</text>
	</g>
{/each}
