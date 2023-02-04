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
          <td><button class="btn-vender" @click="abrirModal(acao)">Vender</button></td>
        </tr>
      </table>
    </div>
    </div>
    <section v-if="vendendo" class="full-width">
      <div  class="form-container">
      <h3>Vender - {{ acaoVendida.symbol }}</h3>
      <form>
        <p>Preço atual : {{  $filters.valorEmReal(acaoVendida.precoAtual) }}</p>
        <label for="quantidade">Quantidade</label>
        <input type="number"  name="quantidade" id="quantidade" v-model="quantidade">
        <p class="erro" v-if="totalQuantidade < 0" style="font-size: 14px; color:red; font-weight:bold;;">Quantidade indisponível</p>
        <p v-if="totalQuantidade > 0">Total: {{  $filters.valorEmReal(total) }}</p>
        <input v-if="totalQuantidade > 0" type="submit" class="btn" value="Vender" @click.prevent="venderAcao">
        <button class="btn cancelar" @click="vendendo = false">Cancelar</button>
      </form>
    </div>
    </section>
    
  </section>
  
 </template>
 <script>

  export default {
   name: "MinhasAcoes",

   data(){
    return{
      acaoVendida: null,
      index: null, // variável que serve para pegarmos a ação correta
      quantidade: null,
      vendendo: false
    }
   },
   computed:{
    usuario(){
      return this.$store.state.usuario
    },

    total(){
      return this.acaoVendida.precoAtual * this.quantidade
    },

    totalQuantidade(){
      return this.acaoVendida.quantidade - this.quantidade
    }
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
      abrirModal(acao){
        //Funçao para pegar a açao e abrir o modal de venda
        this.vendendo = true
         let acoesCompradas = this.usuario.acoesCompradas
         let acoesCompradasSimbolo = [];
         acoesCompradas.forEach(acao => {
          // cria uma array com os codigos da acao para pegarmos o index e editarmos a venda
          let simbolo = acao.symbol
          acoesCompradasSimbolo.push(simbolo)
          return acoesCompradasSimbolo
         })
        // encontra a acao que será vendida
        this.index = acoesCompradasSimbolo.findIndex((acaoCodigo) => {
            return acaoCodigo === acao.symbol
        })
        this.acaoVendida = acoesCompradas[ this.index]
      },
      venderAcao(){
        this.usuario.acoesCompradas[this.index].quantidade -= this.quantidade
        this.usuario.valor += this.total
        if(this.usuario.acoesCompradas[this.index].quantidade < 1){
          this.usuario.acoesCompradas.splice(this.index, 1)
        }
        this.atualizarHistorico()
        this.$store.dispatch('atualizarUsuarioCompraAcao', this.usuario)
        this.vendendo = false
      },
      atualizarHistorico(){
       let transacao = {}
       transacao.tipo = 'venda'
       transacao.acao = this.acaoVendida.symbol
       transacao.total = this.quantidade * this.acaoVendida.precoAtual
       transacao.quantidade = this.quantidade;
       this.usuario.historico.unshift(transacao)

     },
    },
   created(){
    this.fetchPrecoAtual();
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
  padding: 40px 40px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(20, 40, 60, .2);
}
form{
  display: grid;
}
.form-container h3{
  margin-bottom: 20px;
}
input[type="number"]{
  outline: 1px solid black;
  margin-bottom: 20px;
}
.btn .cancelar{
  margin-top: 10px;
}
.cancelar{
  border: none;
}
.cancelar:hover{
  background: transparent;
  color: var(--corAzul);
  text-decoration: underline;
}
@media(max-width: 600px){
  tr {
    display: grid;
  }
}
 </style>