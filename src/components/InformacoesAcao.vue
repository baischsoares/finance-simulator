<template>
  <div>
    <p>{{ acao }}</p>

  </div>
 </template>


 <script>
 
  export default {
   name: "InformacoesAcao",
   data(){
    return{
      acao: ''
    }
   },
   computed: {
    url(){
      return this.$route;
    }
   },
   methods: {
    fetchAcao(){
      let codigoAcao = this.url.query.q
      fetch(`https://brapi.dev/api/quote/${codigoAcao}`)
      .then(r => r.json())
      .then(r => {
        console
        this.acao = r
      })
    },
   },
   watch:{
    url(){
      this.fetchAcao();
    }
   }
 }
 </script>
 
 <style scoped>

 </style>