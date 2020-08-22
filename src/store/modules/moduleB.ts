import { Module } from 'vuex';
import { RootState } from '@/store/index.ts';

// eslint-disable-next-line
interface moduleB {
	text: string;
}

const module: Module<moduleB, RootState> = {
	state: {
		text: 'this is a module B',
	},
	mutations: {
		setData(state, text: string) {
			state.text = text;
		},
	},
	actions: {
		setRootData({ commit }, data: string) {
			commit('setData', data);
		},
	},
	getters: {
		text: state => state.text,
	},
};

export default module;
