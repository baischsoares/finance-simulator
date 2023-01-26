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