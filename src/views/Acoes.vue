<template>
 <BuscarAcoes />
 <InformacoesAcao />
</template>

<script>

import BuscarAcoes from '@/components/BuscarAcoes.vue'
import InformacoesAcao from '@/components/InformacoesAcao.vue'



export default {
  name: "PaginaAcoes",
  components: {
    BuscarAcoes,
    InformacoesAcao
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