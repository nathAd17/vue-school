<script setup>
import mission from '../../data/mission.js'
import { onMounted } from "vue"
import AOS from "aos"
onMounted(() => {
    AOS.init();
})
</script>
<template>
    <section class="isolate relative bg-gray-100" id="about">
        <div class="font-rubik md:mx-auto md:mb-12 max-w-lg pt-24 mb-2 text-center">
            <div>
                <h1 data-aos="zoom-in" data-aos-delay="200"
                    class="bg-teal-accent-400 inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-red-900 uppercase rounded-full">
                    Tentang Kami
                </h1>
            </div>
            <h2 data-aos="zoom-in" data-aos-delay="500"
                class="sm:text-4xl md:mx-auto max-w-lg text-3xl font-bold leading-none tracking-tight text-gray-800">
                <span class="relative inline-block">
                    <svg viewBox="0 0 52 24"
                        class="fill-rose-500 -z-0 text-rose-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block absolute top-0 left-0 hidden w-32 -mt-8 -ml-20">
                        <defs>
                            <pattern id="d9d7687a-355f-4502-8ec4-7945db034688" x="0" y="0" width=".135" height=".30">
                                <circle cx="1" cy="1" r=".7"></circle>
                            </pattern>
                        </defs>
                        <rect fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)" width="52" height="24">
                        </rect>
                    </svg>
                </span>
                Mengenal PKBM Yeremia
            </h2>
        </div>
        <div class="lg:grid lg:grid-cols-2 lg:pb-16 lg:px-6 items-start max-w-screen-xl gap-16 px-4 py-8 mx-auto">
            <div class="sm:text-lg font-light text-gray-500">
                <h2
                    class="font-inter bg-rose-100 shadow-slate-300 px-6 py-1 text-xl font-bold text-left text-gray-900 border border-gray-200 rounded-sm shadow-md">
                    Visi</h2>
                <p class="md:text-lg font-opensans mt-2 mb-4 text-base font-medium text-justify text-gray-700">Tercapainya
                    masyarakat yang cerdas, terampil, mandiri, berbudi luhur dan produktif dan dapat
                    meningkatkan kesejahteraan masyarakat.</p>
                <h2
                    class="font-inter bg-rose-100 shadow-slate-300 px-6 py-1 text-xl font-bold text-left text-gray-900 border border-gray-200 rounded-sm shadow-md">
                    Misi</h2>
                <ul class="mt-5 space-y-3" v-for="misi in mission" :key="misi.id">
                    <li data-aos="zoom-in-up" data-aos-delay="500"
                        class="font-opensans md:text-justify flex text-base font-medium tracking-normal text-left text-gray-900">
                        <span class="mr-1">
                            <svg class="w-5 h-5 mt-px text-red-600" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        {{ misi.description }}
                    </li>
                </ul>
            </div>
            <div class="lg:mt-0 mt-4">
                <img class="w-full rounded-lg" src="/album/img-about.jpg" alt="about img">
            </div>
        </div>
    </section>
</template>
<!-- <script>
import Modal from '@/components/Modal.vue'

export default {
    components: {
        Modal
    },
    data() {
        return {
            modalTitle: 'Judul Modal'
        };
    },
    methods: {
        openModal() {
            // Mengubah judul modal sesuai kebutuhan
            this.modalTitle = 'Judul Baru';
            // Buka modal
            this.$refs.modal.openModal();
        }
    }
};
</script> -->