<template>
	<div>
		<br />
		<div>my parents said "{{ msg }}"</div>
		<div>{{ alarm }}</div>
		<div>msg2: {{ msg2 }}</div>
		<div><input ref="checkbox" type="checkbox" name="checkbox" id="checkbox" :checked="checked" @change="change" /></div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Inject, Model, Emit } from 'vue-property-decorator';

@Component
export default class Children extends Vue {
	@Prop() msg!: string;
	@Inject() readonly msg2!: string;
	alarm = 'hello';
	@Model('change', { type: Boolean }) readonly checked!: boolean;

	@Emit()
	change(event: any) {
		return event.target.checked;
	}

	//imediate : 속성의 현재값으로 핸들러를 즉시 호출하겠다.
	//deep: 감시하고 있는 값이 객체인 경우 객체의 내부가 변하는 것도 감시한다.
	@Watch('msg', { immediate: false, deep: true })
	update(newVal: string, oldVal: string) {
		console.log(newVal, oldVal);
		this.alarm = `메세지 업뎃 : ${newVal}`;
	}
}
</script>
