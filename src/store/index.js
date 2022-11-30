import { createStore } from "vuex";

import questions from "../modules/questions";
import sign from '../modules/sign'

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { questions, sign },
})

export default store