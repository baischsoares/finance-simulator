<template>
  <p>perfil</p>
</template>

<script>

export default {
  name: "PerfilUsuario",
  methods:{
    buscarAcoes(){
      this.$router.push( {query: {q: this.acao}} )
    }
  },
}
</script>

<style scoped>

</style>