<template >
    <h2>Histórico de Transações</h2>
    <div id="tabela">
      <table>
    <tr>
      <td>Tipo</td>
      <td>Ação</td>
      <td>Quantidade</td>
      <td>Total</td>
    </tr>
    <tr v-for="(transacao, index) in historico" :key="index">
      <td>{{ transacao.tipo }}</td>
      <td>{{ transacao.acao }}</td>
      <td>{{ transacao.quantidade }}</td>
      <td :class="(transacao.tipo === 'compra') ? 'compra' : 'venda'">{{ $filters.valorEmReal(transacao.total) }}</td>
    </tr>
   </table>
    </div>
   
 </template>
 <script>

  export default {
   name: "HistoricoTransacoes",

   computed:{
    historico(){
      return this.$store.state.usuario.historico
    },
   },
   methods: {

   }
 }
 </script>
 
 <style scoped>
 h2{
  margin-bottom: 20px;
 }
 table{
  border-collapse: collapse;
  box-sizing: border-box;
 }
 tr{
    border-bottom: 1px solid #d1d1d1;
  }
  td{
    padding: 10px 20px;
    text-align: center;
  }
  #tabela{
    max-height: 250px;
    overflow-y: scroll;
    width: 500px;
  }
.compra{
    color: green;
  }
  .venda {
    color: red;
  }
@media(max-width: 600px){
  tr {
    display: grid;
  }
}

 </style>