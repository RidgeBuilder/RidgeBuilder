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
  { path: '/RidgeBuilder', component: HomePage },
  { path: '/RidgeBuilder/gallery', component: GalleryPage },
  { path: '/RidgeBuilder/designSpace', component: DesignSpacePage },
  { path: '/RidgeBuilder/about', component: AboutPage },
  { path: '/RidgeBuilder/app', component: AppLaunchPage },
  {
    path: '/RidgeBuilder/gallery/:name',
    name: 'GalleryCardDetailBicycle',
    component: GalleryCardDetailBicycle
  },
  {
    path: '/RidgeBuilder/gallery/:name',
    name: 'GalleryCardDetailGoing',
    component: GalleryCardDetailGoing
  },
  {
    path: '/RidgeBuilder/gallery/:name',
    name: 'GalleryCardDetailMountains',
    component: GalleryCardDetailMountains
  },
  {
    path: '/RidgeBuilder/gallery/:name',
    name: 'GalleryCardDetailPopulation',
    component: GalleryCardDetailPopulation
  },
  {
    path: '/RidgeBuilder/gallery/:name',
    name: 'GalleryCardDetailSongs',
    component: GalleryCardDetailSongs
  },
  {
    path: '/RidgeBuilder/gallery/:name',
    name: 'GalleryCardDetailTrendiest',
    component: GalleryCardDetailTrendiest
  },
  {
    path: '/RidgeBuilder/gallery/:name',
    name: 'GalleryCardDetailWinged',
    component: GalleryCardDetailWinged
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
