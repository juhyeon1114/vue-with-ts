<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>{{ count }}</h2>

		<div>
			<button @click="counter">숫자 증가</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
	@Prop() private msg!: string; // !: 반드시 string 이라는 의미의 타압 선언
	@Prop() private count?: number; // ?: optional하게 타입을 선언

	@Emit()
	counter() {
		console.log('counter');
	}
}
</script>
