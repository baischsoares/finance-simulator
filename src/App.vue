<template>
  <div class="container">
      <HeaderNav />
      <router-view />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  name: "App",
  components: {
    HeaderNav
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

:root {
  --corBranca: #fff;
  --corCinza: #CCC1BE;
  --corAzul: #456086;
  --corPreta: #000;
  --corBege: #F8BD8B;
  --corRoxa: #844685;
}

*{
  box-sizing: border-box;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
}

body, ul, li, p, h1, h2,h3{
  margin: 0px;
  padding: 0px;
}

ul{
  list-style: none;
}

a{
  text-decoration: none;
}


.container{
  max-width: 1400px;
  margin: 0px auto;
}

</style>
