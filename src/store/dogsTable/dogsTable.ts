import { ActionTree, MutationTree, Module } from "vuex";
import { GET_DOGS_LIST } from "@/constants/actions";
import { SET_DOGS_LIST } from "@/constants/mutations";
import { DogsService } from "@/services/dogs/dogsTable";
import { NullableDogsTableState } from "@/store/types/dogsTable";

const initialState = (): NullableDogsTableState => {
  return {
    data: null,
  };
};

const state: () => NullableDogsTableState = initialState;

const mutations: MutationTree<NullableDogsTableState> = {
  [SET_DOGS_LIST](state, data) {
    state.data = data;
  },
};

const actions: ActionTree<NullableDogsTableState, any> = {
  async [GET_DOGS_LIST]({ commit }) {
    const { data } = await DogsService.getDogsList();

    commit(SET_DOGS_LIST, data);
  },
};

export const dogsTable: Module<NullableDogsTableState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
};
