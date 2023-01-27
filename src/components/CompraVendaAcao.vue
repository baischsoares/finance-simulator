<template>
  <section class="full-width">
    <div class="cv-container">
      <div class="dados">
        <h2 >Comprar Ação?</h2>
        <p>Ação: <span>{{ acao.symbol }}</span></p>
        <p>Preço: <span> {{ $filters.valorEmReal(acao.regularMarketPrice) }}</span></p>
        <label for="">Quantidade: <input type="number" v-model="quantidade"></label>
        <p v-if="precoTotal">Preço Total: <span> {{ $filters.valorEmReal(precoTotal) }}</span></p>
        <p>Saldo Disponível: <span> {{ $filters.valorEmReal(usuario.valor) }}</span></p>
        <p v-if="saldo < 0" style="font-size: 14px; color:red;">Você não possui saldo suficiente</p>
      </div>
      <button v-if="saldo > 0" class="btn-comprar" @click="comprar(acao)">Comprar</button>
      <slot></slot>
    </div>
  </section>
 </template>


 <script>
  

  export default {
   name: "CompraVendaAcao",
   props: ["acao"],
   data(){
    return{
      quantidade: 0,
      acaoComprada: {}
    }
   }, 
   computed: {
    precoTotal(){
      return this.acao.regularMarketPrice * this.quantidade;
    },
    usuario(){
      return this.$store.state.usuario
    },
    saldo(){
      return this.usuario.valor - this.precoTotal;
    },
   },
   methods: {
    comprar(acao){
      this.acaoComprada.symbol = acao.symbol;
      this.acaoComprada.preco = acao.regularMarketPrice;
      this.acaoComprada.quantidade = this.quantidade;

      this.usuario.valor = this.saldo
      this.usuario.acoesCompradas.push(this.acaoComprada)
      this.$store.dispatch('atualizarUsuarioCompraAcao', this.usuario)
    },
  },
}

</script>
 
 <style scoped>
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
.cv-container{
  background: #fff;
  max-width: 350px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(20, 40, 60, .2);
  padding: 20px 40px;
}
input[type="number"]{
  width: 100px;
  font-size: 1rem;
  padding: 5px;
  margin-bottom: 10px;
  outline: 1px solid black;
}
h2{
  margin-bottom: 20px;
}
p, label{
  margin-bottom: 15px;
  font-weight: bold;
}
span{
  font-weight: normal;
}
 </style>