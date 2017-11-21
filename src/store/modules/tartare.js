export default {
  state() {
    return {
      toto: "tata"
    }
  },
  namespaced: true,
  mutations: {
    change(state, name) {
      state.toto = name;
    }
  }
};
