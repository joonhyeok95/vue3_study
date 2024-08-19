import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

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

createApp(App).use(router).mount('#app')
