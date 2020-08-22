<template>
	<div class="card">
		<div class="card-header">
			accordion
		</div>
		<button @click="toggle">toggle</button>
		{{ show }}
		<div class="card-body" v-show="show">
			<h5 class="card-title">Special title treatment</h5>
			<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator';
import Toggle from '@/components/Toggle.vue';

@Component({
	components: {
		Toggle,
	},
})
// Mixins(toggle) : toggle 컴포넌트를 상속받는 다는 의미
// Accordion컴포넌트에서 this로 접근 가능하게 됨
export default class ToggleBtn extends Mixins(Toggle) {}
</script>
<style>
.card {
	width: 500px;
	margin: 10px;
}
</style>
