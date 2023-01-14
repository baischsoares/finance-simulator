<template>
  <header>
    <nav>
      <div class="links">
        <router-link to="/">Início</router-link> 
        <router-link to="/acoes">Buscar ações</router-link>
        <router-link to="/investimentos">Meus investimentos</router-link>
      </div>
        <div>
          <img class="img-perfil" src="../assets/avatar.png" alt="">
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
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;
}
a{
  display: inline-block;
  margin-right: 30px;
  color: var(--corAzul);
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 4px;
}
a:hover {
  background: var(--corAzul);
  color: var(--corBranca);
}
.img-perfil{
  height: 60px;
  vertical-align: top;
}
.router-link-exact-active{
  background: var(--corAzul);
  color: var(--corBranca);
}
</style>
