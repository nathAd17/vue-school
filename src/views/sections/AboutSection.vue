<script setup>
import mission from '../../data/mission.js'

</script>
<template>
    <section class="bg-gray-100">
        <div class="lg:gap-8 xl:gap-0 lg:grid-cols-12 md:grid flex flex-col max-w-screen-xl px-4 pt-24 mx-auto">
            <div class="place-self-center lg:col-span-7 mr-auto">
                <h1
                    class="font-rubik md:text-left max-w-2xl mb-10 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-800">
                    Sambutan Kepala Sekolah</h1>
                <p class="font-opensans lg:mb-8 md:text-lg lg:text-xl max-w-2xl mb-6 font-medium text-gray-700">
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
                <p
                    class="font-rubik text-rose-800 lg:block underline-offset-8 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 hidden py-3 text-3xl font-bold text-left underline rounded-lg">
                    MR. Lorem Ipsum
                </p>
            </div>
            <div class="lg:mt-20 lg:col-span-5 lg:flex py-2">
                <img src="/src/assets/profil2.png" alt="kepala sekolah"
                    class="lg:-mt-10 lg:w-full lg:h-full w-96 h-96 md:object-contain lg:object-cover mb-4">
                <p
                    class="font-rubik text-rose-800 lg:hidden underline-offset-8 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 md:text-left block py-3 text-3xl font-bold text-center underline rounded-lg">
                    MR. Lorem Ipsum
                </p>
            </div>
        </div>
    </section>
    <section id="about" class="pt-20 bg-gray-100">
        <div class="font-rubik lg:pt-0 max-w-screen-md pt-8 mx-auto text-center">
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
                Tentang Kami
            </h1>
            <p class="sm:text-xl font-medium text-gray-700" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolor.</p>
        </div>
        <div class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-20 px-4 py-16 mx-auto">
            <div class="lg:grid-cols-2 grid gap-8 row-gap-8">
                <div>
                    <img class="sm:h-[30rem] object-cover w-full h-56 rounded shadow-lg" src="/album/img-about.jpg"
                        alt="album" />
                </div>
                <div class="flex flex-col justify-start">
                    <div class="max-w-xl mb-6">
                        <h1
                            class="font-rubik max-w-2xl mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-800">
                            VISI-MISI PKBM Yeremia</h1>
                        <span
                            class="font-inter bg-rose-100 shadow-slate-300 px-6 py-1 text-xl font-bold text-left text-gray-900 border border-gray-200 rounded-sm shadow-md">Visi
                        </span>
                        <p class="md:text-lg font-opensans mt-2 text-base font-medium text-justify text-gray-700">
                            Tercapainya masyarakat yang cerdas, terampil, mandiri, berbudi luhur dan produktif dan dapat
                            meningkatkan kesejahteraan masyarakat
                        </p>
                    </div>
                    <div class="max-w-xl">
                        <span
                            class="font-inter bg-rose-100 shadow-slate-300 px-6 py-1 text-xl font-bold text-left text-gray-800 border border-gray-200 rounded-sm shadow-md">Misi
                        </span>
                    </div>
                    <div class="sm:grid-cols-2 grid gap-5 row-gap-8 mt-4">
                        <ul class="pr-8 space-y-3" v-for="misi in mission" :key="misi.id">
                            <li class="font-opensans flex text-base font-medium tracking-wide text-justify text-gray-900">
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