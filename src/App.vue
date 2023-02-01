<template>
  <div>
      <HeaderNav />
      <router-view  />
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
  --corVerde: #2ab331
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
  padding: 0px 15px;
}

label{
  margin-top: 20px;
  margin-bottom: 10px;
}


input{
  border-radius: 4px;
  border: none;
  padding: 10px;
}
input[type="text"],
input[type="email"]{
  width: 300px;
  border: 1px solid var(--corAzul);
}
input[type="submit"], .btn{
  margin-top: 10px;
  height: 42px;
  right: 1px;
  cursor: pointer;
  background: transparent;
  border: 2px solid var(--corAzul);
  color: var(--corAzul);
  font-weight: bold;
  padding: 5px 15px;
}
input[type="text"]:focus,
input[type="text"]:hover,
input[type="email"]:hover{
  outline: var(--corAzul);
  border: 2px solid var(--corAzul);
}
input[type="submit"]:hover, .btn:hover{
  background: var(--corAzul);
  color: var(--corBranca);
}
.btn-comprar,.btn-vender{
  cursor: pointer;
  height: 40px;
  padding: 0px 10px;
  border: none;
  border-radius: 4px;
  border: none;
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
.btn-comprar:hover,
.btn-vender:hover{
  transform: scale(1.1);
}
</style>
