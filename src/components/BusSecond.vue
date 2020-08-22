<template>
	<div>전송받은 메세지 : {{ text }}</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Bus from '@/common/event-bus.ts';

@Component
export default class BusSecond extends Vue {
	text = '';

	created() {
		// event handler 등록
		Bus.$on('sendText', (text: string) => {
			this.text = text;
		});
	}
}
</script>
