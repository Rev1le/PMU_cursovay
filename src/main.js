import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import firebaseDb from "./firebase";
import { ElLoading } from 'element-plus'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.config.globalProperties.$db = firebaseDb;
app.config.globalProperties.$asyncCallbackWithLoading = async function(callback) {
  const loading = ElLoading.service({
    lock: true,
    text: 'Загрузка',
    background: 'rgba(0, 0, 0, 0.4)',
  })
  await callback()
  loading.close();
};

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.use(ElementPlus)

app.mount('#app')
