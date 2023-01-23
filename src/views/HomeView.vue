<template>
  <div class="home">
    <div v-if="!usuario">
       <ModalCriar>
      
      </ModalCriar>
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
  methods: {
    pegarUsuario(){
      this.$store.dispatch('pegarUsuario', this.$store.state.usuario)
      console.log(this.$store.state.usuario)
    }
  },
  created(){
    this.pegarUsuario()
  }
}
</script>
<style scoped>
.criarUsuario{
  text-align: center;
}
</style>
