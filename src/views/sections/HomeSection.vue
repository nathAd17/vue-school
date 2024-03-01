<template>
    <!-- Home Section Start -->
    <section id="home" class="md:bg-top bg-blend-multiply relative bg-gray-400 bg-right bg-no-repeat bg-cover"
        style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent), url('/album/bg-home.jpg')">
        <div class="font-inter lg:py-80 max-w-screen-xl px-4 py-64 mx-auto text-center">
            <h1 ref="typingText"
                class="md:text-5xl lg:text-6xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-100">
            </h1>
            <p class="lg:text-xl sm:px-16 lg:px-48 text-gray-50 mb-8 text-lg font-normal">
                "Melayani yang belum bisa terlayani, Memberi kesempatan yang belum sempat, Menjangkau bagi yang belum
                terjangkau, Mendampingi bagi yang belum beruntung".</p>
            <div class="sm:flex-row sm:justify-center sm:space-y-0 flex flex-col space-y-4">
                <a href="#"
                    class="bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-100 transition-colors duration-300 ease-in-out rounded-lg">
                    Daftar
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
                <a href="#contact"
                    class="hover:text-gray-900 sm:ms-4 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-100 transition-colors duration-300 ease-in-out border border-gray-100 rounded-lg">
                    Kontak
                </a>
            </div>
        </div>
        <div class="md:gap-8 md:p-8 -bottom-16 shadow-gray-500 font-inter md:grid-cols-4 absolute inset-x-0 grid grid-cols-2 gap-6 p-6 mx-6 bg-gray-200 rounded-lg shadow-md"
            data-aos="fade-up" data-aos-duration="1000">
            <!-- stat - start -->
            <div class="text-rose-700 flex flex-col items-center transition-all duration-500 ease-in-out">
                <div class="sm:text-2xl md:text-3xl text-xl font-bold">{{ pelajar }}</div>
                <div class="sm:text-base text-sm font-semibold">Pelajar</div>
            </div>
            <!-- stat - end -->

            <!-- stat - start -->
            <div class="text-rose-700 flex flex-col items-center transition-all duration-500 ease-in-out">
                <div class="sm:text-2xl md:text-3xl text-xl font-bold">{{ alumni }} +</div>
                <div class="sm:text-base text-sm font-semibold">Alumni</div>
            </div>

            <!-- stat - start -->
            <div class="text-rose-700 flex flex-col items-center transition-all duration-500 ease-in-out">
                <div class="sm:text-2xl md:text-3xl text-xl font-bold">{{ pengajar }}</div>
                <div class="sm:text-base text-sm font-semibold">Pengajar</div>
            </div>
            <div class="text-rose-700 flex flex-col items-center transition-all duration-500 ease-in-out">
                <div class="sm:text-2xl md:text-3xl text-xl font-bold">{{ akreditasi }}</div>
                <div class="sm:text-base text-sm font-semibold">Akreditasi</div>
            </div>
            <!-- stat - end -->
        </div>
    </section>
    <!-- Home Section End -->
</template>
<script>
export default {
    data() {
        return {
            pelajar: 0,
            alumni: 0,
            pengajar: 0,
            akreditasi: '-',
        };
    },
    mounted() {
        this.typeWriter();
        this.animateCount();
    },
    methods: {
        typeWriter() {
            const text = "Selamat Datang di PKBM Yeremia";
            let i = 0;
            const speed = 100; // Kecepatan mengetik (ms)
            const delay = 5000; // Jeda antara animasi (ms)
            const typingEffect = setInterval(() => {
                if (i < text.length) {
                    if (text.charAt(i) === " ") {
                        this.$refs.typingText.innerHTML += " "; // Menambah spasi
                    }
                    this.$refs.typingText.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingEffect);
                    setTimeout(() => {
                        this.$refs.typingText.innerText = ""; // Menghapus teks sebelumnya
                        i = 0;
                        this.typeWriter(); // Memulai animasi kembali setelah jeda 5 detik
                    }, delay);
                }
            }, speed);
        },
        animateCount() {
            const finalPelajar = 100;
            const finalAlumni = 500;
            const finalPengajar = 7;
            const finalAkreditasi = 'B';

            const duration = 3000; // Durasi animasi dalam milidetik
            const steps = 100; // Langkah-langkah dalam animasi

            const pelajarStep = finalPelajar / steps;
            const alumniStep = finalAlumni / steps;
            const pengajarStep = finalPengajar / steps;

            let countPelajar = 0;
            let countAlumni = 0;
            let countPengajar = 0;

            const timer = setInterval(() => {
                countPelajar += pelajarStep;
                countAlumni += alumniStep;
                countPengajar += pengajarStep;

                this.pelajar = Math.round(countPelajar);
                this.alumni = Math.round(countAlumni);
                this.pengajar = Math.round(countPengajar);

                if (this.pelajar >= finalPelajar && this.alumni >= finalAlumni && this.pengajar >= finalPengajar) {
                    clearInterval(timer);
                    this.akreditasi = finalAkreditasi; // Setelah animasi selesai, atur nilai akreditasi
                }
            }, duration / steps);
        }
    }
};
</script>
