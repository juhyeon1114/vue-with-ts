<template>
	<div>
		<accordion></accordion>
		<dropdown></dropdown>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Accordion from '@/components/Accordion.vue';
import Dropdown from '@/components/Dropdown.vue';

@Component({
	components: {
		Accordion,
		Dropdown,
	},
})
export default class MixinExample extends Vue {}
</script>

<style></style>
