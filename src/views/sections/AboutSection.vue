<script setup>
import mission from '../../data/mission.js'
</script>
<template>
    <section class="bg-gray-100">
        <div class="lg:gap-8 xl:gap-0 lg:grid-cols-12 md:grid flex flex-col max-w-screen-xl px-4 pt-24 mx-auto">
            <div class="place-self-center lg:col-span-7 mr-auto">
                <h1 class="font-rubik md:text-left max-w-xl mb-10 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-800"
                    data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    Sambutan Kepala Sekolah</h1>
                <p class="font-opensans lg:mb-8 md:text-lg lg:text-xl max-w-xl mb-6 font-medium text-gray-700"
                    data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    Selamat datang di PKBM Yeremia, tempat pendidikan yang mencerahkan setiap langkah. Sebagai
                    Kepala Sekolah, kami bangga
                    menjadi wadah pembelajaran untuk semua individu, tanpa batasan usia atau latar belakang.
                    <br>
                    Bersama tim
                    pengajar berdedikasi, kami
                    fokus memberikan pendidikan berkualitas, membentuk generasi cerdas, kreatif, dan berdaya
                    saing tinggi.
                    <br><br>
                    PKBM Yeremia bukan hanya tempat belajar, tapi tempat menggali potensi dan membimbing siswa
                    menjadi individu yang
                    berintegritas dan bertanggung jawab. Melalui berbagai kegiatan ekstrakurikuler, kami
                    menciptakan lingkungan yang
                    inspiratif untuk meraih potensi maksimal.
                    <br>
                    Terima kasih telah memilih PKBM Yeremia. Mari bersama-sama membangun masa depan yang lebih
                    cerah. Selamat belajar dan
                    menjadi bagian dari komunitas pendidikan yang membanggakan di PKBM Yeremia!
                </p>
                <p data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine"
                    class="font-rubik text-rose-800 lg:block underline-offset-8 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 hidden py-3 text-3xl font-bold text-left underline rounded-lg">
                    MR. Lorem Ipsum
                </p>
            </div>
            <div class="lg:mt-20 lg:col-span-5 lg:flex py-2">
                <img data-aos="zoom-in" src="/src/assets/profil2.png" alt="kepala sekolah"
                    class="lg:-mt-10 lg:w-full lg:h-full w-96 h-96 md:object-contain lg:object-cover mb-4">
                <p data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine"
                    class="font-rubik text-rose-800 lg:hidden underline-offset-8 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 md:text-left block py-3 text-3xl font-bold text-center underline rounded-lg">
                    MR. Lorem Ipsum
                </p>
            </div>
        </div>
    </section>
    <section id="about" class="pt-28 pb-6 text-slate-700 bg-gray-50">
        <div class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-84 pb-28 px-4 mx-auto">
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
            <h1 class="mb-8 font-rubik text-4xl font-bold tracking-tight text-center text-gray-800" data-aos="fade-up"
                data-aos-duration="500">
                Tentang Kami
            </h1>
            <div class="lg:grid-cols-2 grid gap-12 row-gap-8">
                <div class="lg:w-full relative" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="200">
                    <img class="lg:w-full object-cover h-full border border-rose-700 rounded-lg" src="/album/img-about.jpg"
                        alt="about-img" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="200" />
                </div>
                <div class="flex flex-col justify-center">
                    <div class="max-w-xl mb-6">
                        <span data-aos="zoom-in" data-aos-delay="300"
                            class="font-inter bg-rose-100 shadow-slate-300 px-6 py-1 text-xl font-bold text-left text-gray-900 border border-gray-200 rounded-sm shadow-md">Visi
                        </span>
                        <p data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-sine"
                            class="md:text-lg font-opensans mt-2 text-base font-medium text-justify text-gray-700">
                            Tercapainya masyarakat yang cerdas, terampil, mandiri, berbudi luhur dan produktif dan dapat
                            meningkatkan kesejahteraan masyarakat
                        </p>
                    </div>
                    <div class="max-w-xl mb-6">
                        <span data-aos="zoom-in" data-aos-delay="300"
                            class="font-inter bg-rose-100 shadow-slate-300 inline-block px-6 py-1 text-xl font-bold text-left text-gray-800 border border-gray-200 rounded-sm shadow-md">Misi
                        </span>
                    </div>
                    <div class="md:flex-nowrap flex flex-col flex-wrap items-start gap-2">
                        <ul class=" mt-5 space-y-3" v-for="misi in mission" :key="misi.id">
                            <li data-aos="zoom-in-up" data-aos-delay="500"
                                class="font-opensans flex text-base font-medium tracking-normal text-left md:text-justify text-gray-900">
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
                </div>

            </div>
        </div>
    </section>
</template>