<template>
  <div class="home container">
    <div v-if="!usuario">
       <ModalCriar/>
    </div>
    <div class="sobre">
      <h3>O que é o projeto?</h3>
      <p>Esse é um projeto em desenvolvimento utilizando Vue.js</p>
      <p>A ideia aqui é desenvolver um simulador de bolsa de valores, onde você poderá buscar, comprar e vender ações.</p>
      <p>As informações das ações são conseguidas através da <a href="https://brapi.dev" target="_blank">API Brapi</a>.</p>
      <p>As informações como usuário e ações compradas são armazenadas no localStorage. Por enquanto não há nenhuma manipulação de banco de dados no projeto.</p>
    </div>
  </div>
</template>

<script>
import ModalCriar from '@/components/ModalCriar.vue';
import {mapState} from 'vuex'
export default {
  name: 'HomeView',
  components: {
     ModalCriar
  },
  computed:{
    ...mapState(["usuario"]),
  },
  created(){
    this.$store.dispatch('pegarUsuario', this.$store.state.usuario);
  }
}
</script>
<style scoped>
.sobre{
  max-width: 700px;
}
p{
  margin-bottom: 10px;
}

</style>
