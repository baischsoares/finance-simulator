<template >
  <section class="container">
    <div class="secao">
      <div v-if="usuario.acoesCompradas">
      <h3>Minhas Ações</h3>
      <table>
        <tr>
          <td>Ação</td>
          <td>Quantidade</td>
          <td>Preço de Compra</td>
          <td>Preço Atual</td>
        </tr>
        <tr v-for="(acao, index) in usuario.acoesCompradas" :key="index">
          <td>{{acao.symbol}}</td>
          <td>{{acao.quantidade}}</td>
          <td>{{ $filters.valorEmReal(acao.preco) }}</td>
          <td v-if="acao.precoAtual">{{ $filters.valorEmReal(acao.precoAtual)}}</td>
          <td><button class="btn-vender">Vender</button></td>
        </tr>
      </table>
    </div>
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
   },
  methods:{
     fetchPrecoAtual(){
      this.usuario.acoesCompradas.forEach((acao) => {
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
    this.fetchPrecoAtual();
    console.log(this.usuario)
   },
 }

 </script>
 
 <style scoped>
  .secao{
    box-shadow: 0 4px 8px rgba(20, 40, 60, .2);
    max-width: 700px;
    margin: 40px 0px;
    padding: 20px 40px;
    border-radius: 4px;
  }
  h3{
    margin-bottom: 20px;
  }
  table{
    border-collapse: collapse; 
    width: 100%;
  }
  tr{
    border-bottom: 1px solid #d1d1d1;
  }
  td{
    padding: 10px 0px;
    text-align: center;
  }
  .btn-vender{
    background-color: transparent;
    border: 1px solid red;
    color: red;
    font-weight: 400;
  }
 </style>