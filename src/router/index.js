import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import GalleryPage from '../components/GalleryPage.vue';
import DesignSpacePage from '../components/DesignSpacePage.vue';
import AboutPage from '../components/AboutPage.vue';
import AppLaunchPage from '../components/LaunchPage.vue';
import GalleryCardDetailBicycle from '../components/GalleryDetail/GalleryCardDetailBicycle.vue';
import GalleryCardDetailGoing from '../components/GalleryDetail/GalleryCardDetailGoing.vue';
import GalleryCardDetailMountains from '../components/GalleryDetail/GalleryCardDetailMountains.vue';
import GalleryCardDetailPopulation from '../components/GalleryDetail/GalleryCardDetailPopulation.vue';
import GalleryCardDetailSongs from '../components/GalleryDetail/GalleryCardDetailSongs.vue';
import GalleryCardDetailTrendiest from '../components/GalleryDetail/GalleryCardDetailTrendiest.vue';
import GalleryCardDetailWinged from '../components/GalleryDetail/GalleryCardDetailWinged.vue';
const routes = [
 
  { path: '/', component: HomePage },
  { path: '/gallery', component: GalleryPage },
  { path: '/designSpace', component: DesignSpacePage },
  { path: '/about', component: AboutPage },
  { path: '/app', component: AppLaunchPage },
  {
    path: '/gallery/:name',
    name: 'GalleryCardDetailBicycle',
    component: GalleryCardDetailBicycle
  },
  {
    path: '/gallery/:name',
    name: 'GalleryCardDetailGoing',
    component: GalleryCardDetailGoing
  },
  {
    path: '/gallery/:name',
    name: 'GalleryCardDetailMountains',
    component: GalleryCardDetailMountains
  },
  {
    path: '/gallery/:name',
    name: 'GalleryCardDetailPopulation',
    component: GalleryCardDetailPopulation
  },
  {
    path: '/gallery/:name',
    name: 'GalleryCardDetailSongs',
    component: GalleryCardDetailSongs
  },
  {
    path: '/gallery/:name',
    name: 'GalleryCardDetailTrendiest',
    component: GalleryCardDetailTrendiest
  },
  {
    path: '/gallery/:name',
    name: 'GalleryCardDetailWinged',
    component: GalleryCardDetailWinged
  },

];

const router = createRouter({
  history: createWebHistory('/RidgeBuilder/'),
  routes,
});

export default router;
