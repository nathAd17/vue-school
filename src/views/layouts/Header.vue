<template>
    <header>
        <div :class="{ 'bg-gray-300': isScrolled }"
            class="lg:max-w-screen-2xl md:max-w-screen-xl fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between p-4 mx-auto transition-all">
            <a href="#home" aria-label="PKBM Yeremia" title="PKBM Yeremia" class="inline-flex items-center">
                <img src="/src/assets/logo.png" alt="logo" class="w-16 rounded-full">
                <h2 :class="{ 'text-gray-800': isScrolled }"
                    class="font-rubik ml-2 text-xl font-bold tracking-normal text-gray-100">PKBM
                    <span class="text-rose-500">Yeremia</span>
                </h2>
            </a>
            <ul v-scroll="handleScroll" class="lg:flex font-inter items-center hidden gap-6 space-x-8 font-semibold">
                <li
                    :class="{ 'text-rose-500 font-bold': activeMenu === 'home', 'text-gray-100 ': activeMenu !== 'home', 'text-gray-800': isScrolled }">
                    <a href="#home" aria-label="Home" title="Home"
                        class="hover:text-rose-500 tracking-wide transition-colors duration-200">Beranda</a>
                </li>
                <li
                    :class="{ 'text-rose-500 font-bold': activeMenu === 'about', 'text-gray-100 ': activeMenu !== 'about', 'text-gray-800': isScrolled }">
                    <a href="#about" aria-label="tentang-kami" title="tentang-kami"
                        class="hover:text-rose-500 active:text-white tracking-wide transition-colors duration-200">Tentang
                        Kami</a>
                </li>
                <li
                    :class="{ 'text-rose-500 font-bold': activeMenu === 'service', 'text-gray-100 ': activeMenu !== 'service', 'text-gray-800': isScrolled }">
                    <a href="#service" aria-label="layanan " title="layanan "
                        class="hover:text-rose-500 tracking-wide transition-colors duration-200">Layanan</a>
                </li>
                <li
                    :class="{ 'text-rose-500 font-bold': activeMenu === 'gallery', 'text-gray-100 ': activeMenu !== 'gallery', 'text-gray-800': isScrolled }">
                    <a href="#gallery" aria-label="gallery" title="gallery"
                        class="hover:text-rose-500 tracking-wide transition-colors duration-200">Galeri</a>
                </li>
                <li
                    :class="{ 'text-rose-500 font-bold': activeMenu === 'contact', 'text-gray-100 ': activeMenu !== 'contact', 'text-gray-800': isScrolled }">
                    <a href="#contact" aria-label="kontak" title="kontak"
                        class="hover:text-rose-500 tracking-wide transition-colors duration-200">Kontak</a>
                </li>
            </ul>
            <ul class="lg:flex items-center hidden space-x-8">
                <li>
                    <a href="#"
                        class="bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 inline-flex items-center justify-center p-2 text-base font-semibold text-center text-gray-100 transition-colors duration-300 ease-in-out rounded-lg">
                        Daftar
                        <svg class="ms-2 rtl:rotate-180 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </li>
            </ul>
            <div class="lg:hidden">
                <button aria-label="Open Menu" title="Open Menu"
                    class="p-2 -mr-1 transition duration-200 border border-gray-700 rounded" @click="isMenuOpen = true">
                    <svg :class="{ 'text-gray-800': isScrolled }" class="text-gray-100" width="25" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z">
                        </path>
                        <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z">
                        </path>
                        <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z">
                        </path>
                    </svg>
                </button>
                <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full z-[999]">
                    <div class="p-5 bg-gray-200 border rounded shadow-sm">
                        <div class="flex items-center justify-between mb-4">
                            <div>
                                <a href="#" aria-label="PKBM Yeremia" title="PKBM Yeremia" class="inline-flex items-center">
                                    <img src="/src/assets/logo.png" alt="logo" class="w-16 rounded-full">
                                    <h2 class="font-rubik ml-2 text-xl font-bold tracking-wide text-gray-800">PKBM
                                        <span class="text-rose-500">Yeremia</span>
                                    </h2>
                                </a>
                            </div>
                            <div>
                                <button aria-label="Close Menu" title="Close Menu"
                                    class="hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:shadow-outline p-2 -mt-2 -mr-2 transition duration-200 bg-gray-300 rounded"
                                    @click="isMenuOpen = false">
                                    <svg class="hover:text-gray-200 w-5 text-gray-800" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <nav>
                            <ul class="font-rubik space-y-4">
                                <li
                                    :class="{ 'text-rose-500 font-bold': activeMenu === 'home', 'text-gray-800 ': activeMenu !== 'home' }">
                                    <a href="#home" aria-label="Home" title="Home"
                                        class="hover:text-blue-400 font-medium tracking-wide transition-colors duration-200">Beranda</a>
                                </li>
                                <li
                                    :class="{ 'text-rose-500 font-bold': activeMenu === 'about', 'text-gray-800 ': activeMenu !== 'about' }">
                                    <a href="#about" aria-label="tentang-kami" title="tentang-kami"
                                        class="hover:text-blue-400 font-medium tracking-wide transition-colors duration-200">Tentang
                                        Kami</a>
                                </li>
                                <li
                                    :class="{ 'text-rose-500 font-bold': activeMenu === 'service', 'text-gray-800 ': activeMenu !== 'service' }">
                                    <a href="#service" aria-label="layanan " title="layanan "
                                        class="hover:text-blue-400 font-medium tracking-wide transition-colors duration-200">Layanan</a>
                                </li>
                                <li
                                    :class="{ 'text-rose-500 font-bold': activeMenu === 'gallery', 'text-gray-800 ': activeMenu !== 'gallery' }">
                                    <a href="#gallery" aria-label="gallery " title="gallery "
                                        class="hover:text-blue-400 font-medium tracking-wide transition-colors duration-200">Galeri</a>
                                </li>
                                <li
                                    :class="{ 'text-rose-500 font-bold': activeMenu === 'contact', 'text-gray-800 ': activeMenu !== 'contact' }">
                                    <a href="#contact" aria-label="kontak" title="kontak"
                                        class="hover:text-blue-400 font-medium tracking-wide transition-colors duration-200">Kontak</a>
                                </li>
                                <div class="flex flex-col items-center justify-center gap-6">
                                    <li>
                                        <a href="#"
                                            class="bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-100 transition-colors duration-300 ease-in-out rounded-lg">
                                            Daftar
                                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            isScrolled: false,
            isMenuOpen: false,
            activeMenu: 'home', // menu aktif default

        };
    },
    watch: {
        $route(to) {
            // Memantau perubahan rute
            this.activeMenu = to.name;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Mendapatkan posisi scroll
            const aboutOffset = document.getElementById('about').offsetTop;
            const serviceOffset = document.getElementById('service').offsetTop;
            const galleryOffset = document.getElementById('gallery').offsetTop;
            const contactOffset = document.getElementById('contact').offsetTop;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition < aboutOffset - windowHeight / 2) {
                this.activeMenu = 'home';
            } else if (scrollPosition >= aboutOffset - windowHeight / 2 && scrollPosition < serviceOffset - windowHeight / 2) {
                this.activeMenu = 'about';
            } else if (scrollPosition >= serviceOffset - windowHeight / 2 && scrollPosition < galleryOffset - windowHeight / 2) {
                this.activeMenu = 'service';
            } else if (scrollPosition >= galleryOffset - windowHeight / 2 && scrollPosition < contactOffset - windowHeight / 2) {
                this.activeMenu = 'gallery';
            } else {
                this.activeMenu = 'contact';
            }

            // Mengubah nilai isScrolled berdasarkan posisi scroll
            this.isScrolled = scrollPosition > 0;
        },
    },
    // setup() {
    //   const isActive = ref(false);
    //   const route = useRoute();

    //   const toggleActive = () => {
    //     isActive.value = !isActive.value;
    //   };
    //   const closeNavbar = () => {
    //     isActive.value = false;
    //   };
    //   const isActivePage = (pageName) => {
    //     return computed(() => route.name === pageName).value;
    //   };

    //   return {
    //     isActive,
    //     toggleActive,
    //     closeNavbar,
    //     isActivePage,
    //   };
    // },
};
</script>