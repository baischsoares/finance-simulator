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
 form{
   position: relative;
   display: inline-block;
 }
 input{
   border-radius: 4px;
   border: none;
   padding: 10px;
 }
 input[type="text"]{
   width: 300px;
   border: 1px solid var(--corAzul);
 }
 input[type="submit"]{
   height: 42px;
   position: absolute;
   right: 1px;
   cursor: pointer;
   background: transparent;
 }
 input[type="text"]:focus,
 input[type="text"]:hover{
   outline: var(--corAzul);
   border: 2px solid var(--corAzul);
 }
 input[type="submit"]:hover{
   background: var(--corAzul);
   color: var(--corBranca);
 }
 
 </style>