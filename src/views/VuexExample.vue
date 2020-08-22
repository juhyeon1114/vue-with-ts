<template>
	<div>
		<div>{{ $store.getters.count }}</div>
		<div>{{ count }}</div>
		<div>
			<button @click="increase">증가</button>
			<button @click="decrease">감소</button>
		</div>
		<div>
			{{ $store.getters['moduleA/text'] }}
		</div>
		<div>
			{{ $store.getters['moduleB/text'] }}
		</div>
		<div>
			{{ $store.getters['moduleC/gettersText'] }}
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';

@Component
export default class VuexExample extends Vue {
	@Action readonly increase: any;
	// increase() {
	// 	this.$store.dispatch('increase');
	// }

	decrease() {
		this.$store.dispatch('decrease');
	}

	@Getter readonly count!: number;

	@Mutation readonly setCount: any;
}
</script>
