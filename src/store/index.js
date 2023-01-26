import { createStore } from 'vuex';

const store = createStore({
  state: {
    usuario: null,
  },
  getters: {},
  mutations: {
    CRIAR_USUARIO(state, payload) {
      state.usuario = payload;
    },
    ATUALIZAR_USUARIOS_COMPRA_ACAO(state, payload) {
      state.usuario = payload;
    },
  },
  actions: {
    criarUsuario(context, payload) {
      context.commit('CRIAR_USUARIO', payload);
      localStorage.setItem('usuario', JSON.stringify(payload));
    },
    pegarUsuario(context) {
      if (localStorage.usuario) {
        context.state.usuario = JSON.parse(localStorage.getItem('usuario'));
      }
    },
    atualizarUsuarioCompraAcao(context, payload) {
      context.commit('ATUALIZAR_USUARIOS_COMPRA_ACAO', payload);
      localStorage.setItem('usuario', JSON.stringify(payload));
    },
  },
  modules: {},
});

export default store;
