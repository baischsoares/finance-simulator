<template>
  <header>
    <nav class="container header">
      <div class="links">
        <router-link to="/">Início</router-link> 
        <router-link to="/acoes">Buscar ações</router-link>
        <router-link to="/investimentos">Meus investimentos</router-link>
      </div>
        <div class="perfil">
          <router-link to="/perfil"><img class="img-perfil" src="../assets/avatar.png" alt=""></router-link>
        </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
}
</script>


<style scoped>
header{
  margin-bottom: 40px;
}
nav{
  box-shadow: 0 4px 8px rgba(20, 40, 60, .2);
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}
.links a{
  display: inline-block;
  color: var(--corAzul);
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 20px;
}

.links a:hover {
  background: var(--corAzul);
  color: var(--corBranca);
}
.img-perfil{
  height: 60px;
  vertical-align: top;
}
.links a.router-link-exact-active{
  background: var(--corAzul);
  color: var(--corBranca);
}
a[href="/perfil"]{
  background: none !important;
}
@media(max-width: 600px){
  .header{
    display: grid;
    align-items: center;
  }
  .perfil{
    grid-row: 1;
    margin-bottom: 20px;
    text-align: center;
  }
  .links {
    text-align: center;
  }
  .links a{
    margin-right: 0px;
  }
}
</style>
