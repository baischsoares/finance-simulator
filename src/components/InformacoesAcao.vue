<template>
  <div v-if="acao" class="acao-container">
    <div  class="principal">
      <div class="titulo-preco">
        <h1>{{ acao.symbol }}</h1> <h2>{{ $filters.valorEmReal(acao.regularMarketPrice) }}</h2>
      </div>
      <div class="botoes">
        <button class="btn-comprar">Comprar</button>
        <button class="btn-vender">Vender</button>
      </div>
    </div>
    <div class="acao-informacoes">
      <h3>Nome da empresa</h3>
      <p>{{ acao.longName }}</p>
      <h3>Valor de mercado</h3>
      <p>{{ $filters.valorEmReal(acao.marketCap) }}</p>
      <h3>Variação diária</h3>
      <div class="preco-marior-menor">
        {{  $filters.valorEmReal(acao.regularMarketDayLow) }} - {{ $filters.valorEmReal(acao.regularMarketDayHigh) }} 
      </div>
    </div>
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
    },
   },
   methods: {
    fetchAcao(){
      let codigoAcao = this.url.query.q
      fetch(`https://brapi.dev/api/quote/${codigoAcao}`)
      .then(r => r.json())
      .then(r => {
          this.acao = r.results[0];
      })
    },
   },
   watch:{
    url(){
      this.fetchAcao();
    }
   },
 }
 </script>
 
 <style scoped>
.acao-container{
  margin-top: 40px;
}
.principal,
.acao-informacoes{
  box-shadow: 0 4px 8px rgba(20, 40, 60, .2);
  padding: 15px 15px;
  max-width: 500px;
  border: 4px;
  margin: 10px;
}

.principal,
.titulo-preco{
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.botoes button{
  margin-left: 20px;
  cursor: pointer;
  height: 40px;
  padding: 0px 10px;
  border: none;
  border-radius: 4px;
}
.botoes button:hover{
  transform: scale(1.1);
}
.btn-comprar {
  background: var(--corVerde);
  font-weight: bold;
  color: var(--corBranca);
}
.btn-vender {
  background: var(--corCinza);
  font-weight: bold;
  color: var(--corBranca);
}
h3{
  margin-top: 10px;
}
.nenhumaAcao{
  margin-top: 20px;
  color: #ff0000;
}
 </style>