<script setup>
import gallery from "../../data/gallery.js";
import { onMounted } from "vue"
import AOS from "aos"
onMounted(() => {
    AOS.init();
})
</script>
<template>
    <section id="gallery">
        <div class="sm:max-w-xl md:max-w-screen-lg lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-24 px-4 py-16 mx-auto">
            <div class="lg:mb-16 font-rubik max-w-screen-lg mx-auto mb-8 text-center">
                <div>
                    <h1 data-aos="zoom-in" data-aos-delay="200"
                        class="bg-teal-accent-400 inline-block px-3 py-px text-xs font-semibold tracking-wider text-red-900 uppercase rounded-full">
                        Galeri
                    </h1>
                </div>
                <span class="relative inline-block">
                    <svg viewBox="0 0 52 24"
                        class="fill-rose-500 -left-24 text-rose-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block absolute top-0 z-0 hidden w-32 -mt-8 -ml-20">
                        <defs>
                            <pattern id="d9d7687a-355f-4502-8ec4-7945db034688" x="0" y="0" width=".185" height=".50">
                                <circle cx="1" cy="1" r=".7"></circle>
                            </pattern>
                        </defs>
                        <rect fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)" width="52" height="24">
                        </rect>
                    </svg>
                </span>
                <h1 class="mb-8 text-4xl font-bold tracking-tight text-center text-gray-800" data-aos="fade-up"
                    data-aos-duration="500">
                    Potret PKBM Yeremia
                </h1>
                <p class="lg:mb-16 sm:text-xl font-medium text-gray-700" data-aos="fade-up" data-aos-delay="500"
                    data-aos-duration="500">Mengabadikan Momen Pendidikan : Koleksi Inspiratif dari Siswa dan Staff</p>
            </div>
            <div class="lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2 grid gap-6 row-gap-5 mb-8">
                <div v-for="img in gallery" :key="img.id" aria-label="Gallery">
                    <div class="hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden transition duration-200 transform rounded shadow-lg"
                        data-aos="fade-right" data-aos-delay="500" data-aos-offset="200">
                        <img class="md:h-64 xl:h-80 object-cover w-full h-56" :src="img.imgPath" :alt="img.name" />
                        <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-gray-900 bg-opacity-75">
                            <p class="font-inter text-base font-semibold tracking-normal text-white">
                                {{ img.name }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>