<template>
	<div class="about">
		<input type="text" v-model="msg" />
		<br />
		<div>
			{{ msg }}
		</div>
		<br />
		<div>
			<button @click="changeMessage">change</button>
		</div>
		<div>
			<children :msg="msg" v-model="checked" @change="change" />
			{{ text }}
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Children from '@/components/Children.vue';

@Component({
	components: {
		Children,
	},
})
export default class About extends Vue {
	// eslint-disable-next-line
	msg: string = 'hello';
	msg2!: string;
	checked = false;
	text = '보감';

	changeMessage() {
		this.msg = 'change';
	}

	change(checked: boolean) {
		this.checked = checked;
		this.text = checked ? '동의' : '보감';
	}

	// provide/inject : props와 달리 직계 부모보다 더 상위의 부모로부터도 데이터를 주입을 받을 수 있다.
	@Provide('msg2') message = 'provide/inject example';
}
</script>
