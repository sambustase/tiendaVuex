import { createStore } from 'vuex';

const store = createStore({
  state: {
    juegos: []  // El estado global para los juegos
  },
  mutations: {
    SET_JUEGOS(state, juegos) {
      state.juegos = juegos;
    },
    ACTUALIZAR_STOCK(state, { codigo, stock }) {
      const juego = state.juegos.find(juego => juego.codigo === codigo);
      if (juego) juego.stock = stock;
    }
  },
  actions: {
    async obtenerJuegos({ commit }) {
      try {
        const response = await fetch('juegos.json');
        const data = await response.json();
        commit('SET_JUEGOS', data);
      } catch (error) {
        console.log(error);
      }
    },
    actualizarStock({ commit }, { codigo, stock }) {
      commit('ACTUALIZAR_STOCK', { codigo, stock });
    }
  },
  getters: {
    juegos: (state) => state.juegos
  }
});

export default store;
