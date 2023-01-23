<template>
  <div class="container">
    <h3>Nome: </h3> <span>{{ usuario.nome }}</span>
    <h3>Idade: </h3> <span>{{ usuario.idade }}</span>
    <h3>E-mail: </h3> <span>{{ usuario.email }}</span>
    <h3>Saldo em conta: </h3> <span>{{ $filters.valorEmReal(usuario.valor) }}</span>
  </div>
</template>

<script>

export default {
  name: "PerfilUsuario",
  computed: {
    usuario(){
      return this.$store.state.usuario
    }
  },
  methods: {
    pegarUsuario(){
      this.$store.dispatch('pegarUsuario', this.$store.state.usuario)
    }
  },
  created(){
    this.pegarUsuario()
  }
}
</script>

<style scoped>
form{
  display: grid;
  gap: 10px;
}
h3,span{
  display: block;
  margin-top: 15px;
}
.resetar{
  background: red;
  color: white;
  border: none;
}
</style>