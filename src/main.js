import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Adjust the path according to your project structure

const app = createApp(App);
app.use(router);
app.mount('#app');
