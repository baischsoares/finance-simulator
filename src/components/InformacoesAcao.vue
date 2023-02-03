<template>
  <section>
        <div v-if="acao" class="acao-container">
                  <div  class="principal">
                    <div class="titulo-preco">
                      <h1>{{ acao.symbol }}</h1> <h3>{{ $filters.valorEmReal(acao.regularMarketPrice) }}</h3>
                    </div>
                    <div class="botoes">
                      <button class="btn-comprar" @click="compraModal = true ">Comprar</button>
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
                  <CompraVendaAcao v-if="compraModal" :acao="acao">
                    <button class="btn" @click="compraModal = false">Fechar</button>
                  </CompraVendaAcao>
        </div>
        <div v-if="erro">
          <p>{{ erro }}</p>
        </div>
  </section>
  
 </template>

 <script>
 import CompraVendaAcao from '@/components/CompraVendaAcao.vue'
 
  export default {
   name: "InformacoesAcao",
   components: {
    CompraVendaAcao
   },
   data(){
    return{
      acao: '',
      compraModal: false,
      erro: ''
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
          if(r.error){
            this.acao = null
            this.erro = r.error
          } else{ 
            this.acao = r.results[0];
            this.erro = null
          }
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
  align-items: baseline;
}

.principal,.titulo-preco{
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.botoes button{
  margin-left: 20px;
}
h3{
  margin-top: 10px;
}
.nenhumaAcao{
  margin-top: 20px;
  color: #ff0000;
}
.btn{
  width: 100%;
}
@media(max-width: 600px){
  .botoes button{
  margin-left: 0px;
}
}
 </style>