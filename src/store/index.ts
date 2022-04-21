import { createStore } from "vuex";
import { dogsTable } from "@/store/dogsTable/dogsTable";
import { dogsProfile } from "@/store/dogsProfile/dogsProfile";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    dogsTable,
    dogsProfile,
  },
});
