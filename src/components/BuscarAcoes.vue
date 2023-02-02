<template>
  <div>
   <form action="">
     <input type="text" name="acao" id="acao" v-model="acao" placeholder="Digite a ação">
     <input type="submit" value="Buscar" @click.prevent="buscarAcoes">
   </form>
    
  </div>
 </template>
 <script>
 
  export default {
   name: "BuscarAcoes",
   data(){
     return {
       acao: ''
     }
   },
   methods:{
     buscarAcoes(){
       this.$router.push( {query: {q: this.acao}} )
     }
   },
 }
 </script>
 
 <style scoped>

 
 </style>