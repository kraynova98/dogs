import { ActionTree, MutationTree, Module } from "vuex";
import { SET_DOG_INFO } from "@/constants/mutations";
import { NullableDogsProfileState } from "@/store/types/dogsTable";

const initialState = (): NullableDogsProfileState => {
  return {
    data: null,
  };
};

const state = initialState;

const mutations: MutationTree<NullableDogsProfileState> = {
  [SET_DOG_INFO](state, data) {
    state.data = data;
  },
};

const actions: ActionTree<NullableDogsProfileState, any> = {
  [SET_DOG_INFO]({ commit }, data) {
    console.log(data);
    commit(SET_DOG_INFO, data);
  },
};

export const dogsProfile: Module<NullableDogsProfileState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
};
