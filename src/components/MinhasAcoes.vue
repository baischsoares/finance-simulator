<template>
  <section>
    <div v-if="acoesCompradas">
      <h3>Minhas Ações</h3>
      <ul>
        <li v-for="(acao, index) in acoesCompradas" :key="index">
          <span>{{acao.symbol}}</span>
          <span>{{acao.quantidade}}</span>
          <span>{{ $filters.valorEmReal(acao.preco) }}</span>
          <span>{{ $filters.valorEmReal(acao.precoAtual)}}</span>
          <span :class="acao.LucroPrejuizo > 0 ? 'lucro' : 'prejuizo'">{{ acao.LucroPrejuizo }}</span>
        </li>
      </ul>
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
      this.acoesCompradas.forEach((acao, index) => {
        let codigoAcao = acao.symbol
        fetch(`https://brapi.dev/api/quote/${codigoAcao}`)
        .then(r => r.json())
        .then(r => {
            let acaoPrecoAtual = r.results[0].regularMarketPrice
            let acao = this.acoesCompradas[index]
            let acaoArray = Object.values(acao)

            if(acaoArray.includes(codigoAcao)){
              acao.precoAtual = acaoPrecoAtual
              acao.LucroPrejuizo = (acao.precoAtual - acao.preco) * acao.quantidade
            } 
        })
      })
    },
   },
   created(){
    this.fetchPrecoAtual()
   }
 }
 </script>
 
 <style scoped>

span{
  margin-right: 20px;
}
.lucro{
  color: green;
}
.prejuizo{
  color: red;
}
 </style>