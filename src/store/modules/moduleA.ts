/************************
 * 객체
 ************************/
import { Module } from 'vuex';
import { RootState } from '@/store/index.ts';

// eslint-disable-next-line
interface moduleA {
	text: string;
}

const module: Module<moduleA, RootState> = {
	namespaced: true,
	// namespaced를 true로 해주지 않으면 root로 묶이게 된다.
	// 모듈을 독립적으로 사용하거나 재사용하고 싶다면 네임스페이스를 true 설정해주면 된다.
	state: {
		text: 'this is a module A',
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
		text: state => `${state.text} ㅋ`,
	},
};

export default module;
