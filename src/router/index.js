import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Acoes from '../views/Acoes.vue';
import PerfilUsuario from '../views/PerfilUsuario.vue';
import MeusInvestimentos from '../views/MeusInvestimentos.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/acoes',
    name: 'Acoes',
    component: Acoes,
  },
  {
    path: '/perfil',
    name: 'PerfilUsuario',
    component: PerfilUsuario,
  },
  {
    path: '/investimentos',
    name: 'MeusInvestimentos',
    component: MeusInvestimentos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
