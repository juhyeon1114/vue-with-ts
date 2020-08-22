<template>
	<div>
		<bus-first></bus-first>
		<bus-second></bus-second>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BusFirst from '@/components/BusFirst.vue';
import BusSecond from '@/components/BusSecond.vue';

@Component({
	components: {
		BusFirst,
		BusSecond,
	},
})
export default class BusExample extends Vue {}
</script>
