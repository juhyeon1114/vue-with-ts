import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'classModule' })
export default class ModuleC extends VuexModule {
	text = 'This is a class type Module C';

	@Mutation
	setData(data: string) {
		this.text = data;
	}

	@Action
	editData(data: string) {
		this.context.commit('setData', data);
	}

	get gettersText() {
		return `${this.text} ㅋ`;
	}
}
