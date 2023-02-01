<template>
 <MinhasAcoes/> 
</template>

<script>

 import MinhasAcoes from '@/components/MinhasAcoes.vue'
export default {
  name: "MeusInvestimentos",
  components: {
     MinhasAcoes
  },
  created(){
    this.$store.dispatch('pegarUsuario', this.$store.state.usuario);
  }
}
</script>

<style>

</style>