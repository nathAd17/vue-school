<script setup>
import services from "../../data/services.js";
import { onMounted } from "vue"
import AOS from "aos"
onMounted(() => {
    AOS.init();
})
</script>
<template>
    <section id="service" class="bg-gray-200">
        <div class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24 px-4 pt-32 pb-20 mx-auto">
            <div class="font-rubik md:mx-auto lg:max-w-2xl md:mb-12 max-w-xl mb-10 text-center">
                <div>
                    <p data-aos="zoom-in" data-aos-delay="200"
                        class="bg-teal-accent-400 inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full">
                        Program Kami
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
            <div class="md:grid-cols-2 font-rubik lg:grid-cols-3 grid gap-5 mb-8">
                <div v-for="service in services" :key="service.id"
                    class="hover:-translate-y-2 bg-gray-50 border-rose-300 p-5 duration-300 transform border-2 border-dashed rounded shadow-sm"
                    data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                    <div class="bg-indigo-50 flex items-center justify-center w-8 h-8 mb-4 rounded-full">
                        <svg class="text-rose-400 w-6 h-6" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                    </div>
                    <h6 class="font-rubik mb-2 text-2xl font-semibold leading-5 text-gray-800">{{ service.name }}</h6>
                    <p class="text-sm text-gray-700">
                        {{ service.details.description }}
                    </p>
                    <div class="detail-cta mx-auto mt-4">
                        <button
                            class="bg-gray-50 hover:bg-gray-200 rounded-xl shadow-gray-400 flex items-center justify-center p-2 transition-colors duration-500 ease-in-out border border-gray-400 shadow-md">Daftar
                            <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 12H5m14 0-4 4m4-4-4-4" />
                            </svg></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>