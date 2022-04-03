import { ActionTree, MutationTree, Module } from "vuex";
import {
  GET_DOGS_LIST,
  UPDATE_DOGS_LIST_PAGINATION,
} from "@/constants/actions";
import { SET_DOGS_LIST } from "@/constants/mutations";
import { DogsService } from "@/services/dogs/dogsTable";
import { NullableDogsTableState } from "@/store/types/dogsTable";

const initialState = (): NullableDogsTableState => {
  return {
    data: null,
    limit: 12,
    page: 1,
    total: null,
  };
};

const state: () => NullableDogsTableState = initialState;

const mutations: MutationTree<NullableDogsTableState> = {
  [SET_DOGS_LIST](state, { data, total }) {
    state.data = data;
    state.total = Number.parseInt(total);
  },

  [UPDATE_DOGS_LIST_PAGINATION](state, { page }) {
    state.page = page;
  },
};

const actions: ActionTree<NullableDogsTableState, any> = {
  async [GET_DOGS_LIST]({ commit, state }) {
    const {
      data,
      headers: { "pagination-count": total },
    } = await DogsService.getDogsList(state.limit, state.page);

    commit(SET_DOGS_LIST, { data, total });
  },

  [UPDATE_DOGS_LIST_PAGINATION]({ commit, dispatch }, pagination) {
    commit(UPDATE_DOGS_LIST_PAGINATION, pagination);
    dispatch(GET_DOGS_LIST);
  },
};

export const dogsTable: Module<NullableDogsTableState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
};
