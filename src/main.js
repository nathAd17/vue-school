import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import './style.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.component('InputText', InputText);
app.component('Button', Button);
app.use(PrimeVue, {
    zIndex: {
        modal: 1100, //dialog, sidebar
        overlay: 1000, //dropdown, overlaypanel
        menu: 1000, //overlay menus
        tooltip: 1100 //tooltip
    }
});

app.mount('#app')