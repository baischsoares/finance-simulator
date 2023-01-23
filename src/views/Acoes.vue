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

input[type="submit"]{
  position: absolute;
}


</style>