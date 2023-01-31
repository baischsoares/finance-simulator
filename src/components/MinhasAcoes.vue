<template>
  <section>
    <div v-if="acoesCompradas">
      <h3>Minhas Ações</h3>
      <table>
        <tr>
          <td>Ação</td>
          <td>Quantidade</td>
          <td>Preço de Compra</td>
          <td>Preço Atual</td>
        </tr>
        <tr v-for="(acao, index) in acoesCompradas" :key="index">
          <td>{{acao.symbol}}</td>
          <td>{{acao.quantidade}}</td>
          <td>{{ $filters.valorEmReal(acao.preco) }}</td>
          <td>{{ $filters.valorEmReal(acao.precoAtual)}}</td>
        </tr>
      </table>
    </div>
  </section>
  
 </template>
 <script>
 


  export default {
   name: "MinhasAcoes",
   computed:{
    usuario(){
      return this.$store.state.usuario
    },
    acoesCompradas(){
      return this.$store.state.usuario.acoesCompradas
    },  
   },
  methods:{
     fetchPrecoAtual(){
      this.acoesCompradas.forEach((acao) => {
        let codigoAcao = acao.symbol;
        fetch(`https://brapi.dev/api/quote/${codigoAcao}`)
        .then(r => r.json())
        .then( r => {
          //adiciona o preço atual no objeto ação
          let acaoPrecoAtual = r.results[0].regularMarketPrice
          acao.precoAtual = acaoPrecoAtual
        })
       })
       this.$store.dispatch('criarUsuario', this.usuario)
      },
    },
   created(){
     this.fetchPrecoAtual()
   },
 }

 </script>
 
 <style scoped>
  section{
    background: orange;
    width: max-content;
    padding: 20px 40px;
    border-radius: 4px;
  }
 </style>