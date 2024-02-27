import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeSection from '../views/sections/HomeSection.vue'
import AboutSection from '../views/sections/AboutSection.vue'
import ServiceSection from '../views/sections/ServiceSection.vue'
import ContactSection from '../views/sections/ContactSection.vue'
import AOS from "aos";
import 'aos/dist/aos.css';

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeSection
    },
    {
      path: '/about',
      name: 'tentang-kami',
      component: AboutSection
    },
    {
      path: '/service',
      name: 'layanan',
      component: ServiceSection
    },
    {
      path: '/contact',
      name: 'kontak',
      component: ContactSection
    }
  ]
})
router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

export default router