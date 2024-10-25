import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

const app = createApp(App);

// Elastic APM RUM 에이전트 로드 및 초기화
const script = document.createElement('script');
script.src = '/js/elastic-apm-rum.umd.min.js'; // public 폴더 내 경로에 따라 수정
script.crossOrigin = '';
script.onload = () => {
  const apm = window.elasticApm.init({
    serviceName: process.env.VUE_APP_APM_SERVICE_NAME,
    serverUrl: process.env.VUE_APP_APM_SERVER_URL,
    environment: process.env.VUE_APP_APM_ENVIRONMEMT
  });

  console.log('Elastic APM initialized', apm);
};
document.head.appendChild(script);

// API 베이스 URL 설정
const apiClient = axios.create({
  baseURL: process.env.VUE_API_BASE_URL,
});
// Axios 인스턴스를 전역으로 설정
app.config.globalProperties.$apiClient = apiClient;

app.use(router);
app.mount('#app');
