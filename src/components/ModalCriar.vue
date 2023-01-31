<template>
  <section class="full-width">
    <div class="form-container">
      <h2>Criar Usuário</h2>
      <form>
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" v-model="usuario.nome">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="usuario.email">
        <label for="idade">Idade</label>
        <input type="number" name="idade" id="idade" v-model="usuario.idade">
        <label for="valor">Qual valor você quer iniciar?</label>
        <input type="range" min="10000" max="100000" name="valor" id="valor" v-model="usuario.valor">
        <p v-if="usuario.valor">{{ usuario.valor }}</p>
        <input type="submit" class="btn" value="Criar Usuário" @click.prevent="criarUsuario">
      </form>
    </div>
  </section>
 </template>

 <script>
 
  export default {
   name: "ModalCriar",
   data(){
    return{
      usuario: {
        nome: '',
        email: '',
        idade: '',
        valor: 0
      }
    }
   },
   methods: {
    criarUsuario(){
      this.usuario.valor = Number(this.usuario.valor)
      this.usuario.acoesCompradas = []
      this.$store.dispatch('criarUsuario', this.usuario)
    }
   }
 }
 </script>
 
 <style scoped>
.full-width{
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.2);
  position: absolute;
  top: 0px;
  left: 0px;
  display: grid;
  align-items: center;
  justify-content: center;
}
.form-container{
  background: var(--corBranca);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(20, 40, 60, .2);
}
form{
  display: grid;
  
}
 </style>