<template>
	<div>
		<form @submit.prevent="submit">
			<input type="text" v-model="text" />
			<button type="submit">second bus로 전송</button>
		</form>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Bus from '@/common/event-bus.ts';

@Component
export default class BusFirst extends Vue {
	text = '';

	submit() {
		Bus.$emit('sendText', this.text);
	}
}
</script>
