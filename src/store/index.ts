import Vue from 'vue';
import Vuex, { ActionContext, StoreOptions } from 'vuex';

Vue.use(Vuex);

// export default new Vuex.Store({
// 	state: {},
// 	mutations: {},
// 	actions: {},
// 	modules: {},
// });

import moduleA from '@/store/modules/moduleA.ts';
import moduleB from '@/store/modules/moduleB.ts';
import moduleC from '@/store/modules/moduleC.ts';

export interface RootState {
	count: number;
}

const store: StoreOptions<RootState> = {
	modules: {
		moduleA,
		moduleB,
		moduleC,
	},
	state: {
		count: 0,
	},
	mutations: {
		setCount(state, cnt: number) {
			state.count = cnt;
		},
	},
	actions: {
		// increase({ state, getters, dispatch, commit }: ActionContext<State, State>) {},
		increase({ state, commit }: ActionContext<RootState, RootState>) {
			commit('setCount', state.count + 1);
		},
		decrease({ state, commit }: ActionContext<RootState, RootState>) {
			commit('setCount', state.count - 1);
		},
	},
	getters: {
		count: (state: RootState) => {
			return `${state.count} ㅋ`;
		},
	},
};

export default new Vuex.Store(store);
