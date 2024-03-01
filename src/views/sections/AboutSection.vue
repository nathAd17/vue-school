<script setup>
import mission from '../../data/mission.js'
import { onMounted } from "vue"
import AOS from "aos"
onMounted(() => {
    AOS.init();
})
</script>
<template>
    <section class="bg-white" id="about">
        <div class="font-rubik md:mx-auto md:mb-12 max-w-lg mt-20 mb-2 text-center">
            <div>
                <p data-aos="zoom-in" data-aos-delay="200"
                    class="bg-teal-accent-400 inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full">
                    Tentang Kami
                </p>
            </div>
            <h2 data-aos="zoom-in" data-aos-delay="500"
                class="sm:text-4xl md:mx-auto max-w-lg mb-2 text-3xl font-bold leading-none tracking-tight text-gray-900">
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
        <div class="lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 items-start max-w-screen-xl gap-16 px-4 py-8 mx-auto">
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
                <img class="w-full rounded-lg" src="/album/img-about.jpg" alt="office content 1">
            </div>
        </div>
    </section>
    <!-- <section id="about" class="pt-28 text-slate-700 pb-6">
        <div class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24 md:mx-auto px-4 pt-32 pb-20">
            <div class="font-rubik md:mx-auto md:mb-12 max-w-lg mb-10 text-center">
                <div>
                    <p data-aos="zoom-in" data-aos-delay="200"
                        class="bg-teal-accent-400 inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full">
                        Tentang Kami
                    </p>
                </div>
                <h2 data-aos="zoom-in" data-aos-delay="500"
                    class="sm:text-4xl md:mx-auto max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900">
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
                    Program atau Layanan dari PKBM Yeremia
                </h2>
                <p data-aos="zoom-in-up" data-aos-delay="300" class="md:text-lg text-base font-medium text-gray-700">
                    Mari bergabung dalam program belajar kami di PKBM Yeremia.
                </p>
            </div>
            <div class="lg:grid-cols-2 lg:gap-12 grid row-gap-8">
                <div class="flex flex-col justify-center">
                    <div class="md:mx-auto lg:max-w-2xl max-w-lg mb-6">
                        <span data-aos="zoom-in" data-aos-delay="300"
                            class="font-inter bg-rose-100 shadow-slate-300 px-6 py-1 text-xl font-bold text-left text-gray-900 border border-gray-200 rounded-sm shadow-md">Visi
                        </span>
                        <p data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-sine"
                            class="md:text-lg font-opensans mt-2 text-base font-medium text-justify text-gray-700">
                            Tercapainya masyarakat yang cerdas, terampil, mandiri, berbudi luhur dan produktif dan dapat
                            meningkatkan kesejahteraan masyarakat
                        </p>
                    </div>
                    <div class="md:mx-auto lg:max-w-2xl max-w-lg mb-6">
                        <span data-aos="zoom-in" data-aos-delay="300"
                            class="font-inter bg-rose-100 shadow-slate-300 inline-block px-6 py-1 text-xl font-bold text-left text-gray-800 border border-gray-200 rounded-sm shadow-md">Misi
                        </span>
                        <div class="md:flex-nowrap flex flex-col flex-wrap items-start gap-2">
                            <ul class=" mt-5 space-y-3" v-for="misi in mission" :key="misi.id">
                                <li data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="500"
                                    class="font-opensans md:text-justify flex text-base font-medium tracking-normal text-left text-gray-900">
                                    <span class="mr-1">
                                        <svg class="w-5 h-5 mt-px text-red-600" stroke="currentColor" viewBox="0 0 52 52">
                                            <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                                                fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                        </svg>
                                    </span>
                                    {{ misi.description }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="lg:w-full relative mx-auto" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="200">
                    <img class="object-cover w-full h-full border border-blue-700 rounded-lg" src="/album/img-about.jpg"
                        alt="about-img" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="200" />
                </div>
            </div>
        </div>
    </section> -->
</template>