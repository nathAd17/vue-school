<template>
    <section id="contact" class="isolate relative bg-gray-200">
        <div
            class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded-b-2xl relative px-4 pt-24 pb-16 mx-auto">
            <div class="lg:mb-16 font-rubik max-w-screen-lg mx-auto mb-8 text-center">
                <div>
                    <h1 data-aos="zoom-in" data-aos-delay="200"
                        class="bg-teal-accent-400 inline-block px-3 py-px text-xs font-semibold tracking-wider text-red-900 uppercase rounded-full">
                        Kontak
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
                    Hubungi Kami
                </h1>
                <p class="lg:mb-16 sm:text-xl font-medium text-gray-700" data-aos="fade-up" data-aos-delay="500"
                    data-aos-duration="500">Ingin bangun komunikasi dengan kami? Silahkan
                    Tinggalkan Pesan anda!</p>
            </div>
            <div class="md:flex-nowrap flex flex-row flex-wrap gap-8">
                <div class="w-full">
                    <iframe class="shadow-gray-500 w-full h-full rounded-md shadow-md"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d981.3868509074538!2d123.54771099647705!3d-10.298003646085053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1706549788946!5m2!1sid!2sid"></iframe>
                </div>
                <div class="w-full">
                    <form action="#" class="font-inter space-y-8">
                        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                            <label for="name" class="block mb-2 text-base font-medium text-gray-700">Nama</label>
                            <input type="text" id="name" name="nama"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-base rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5"
                                placeholder="Nama Anda" required>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                            <label for="email" class="block mb-2 text-base font-medium text-gray-700">E-mail</label>
                            <input type="text" id="email" name="email"
                                class="bg-gray-50 focus:ring-rose-500 focus:border-rose-500 block w-full p-3 text-base text-gray-900 border border-gray-300 rounded-lg shadow-sm"
                                placeholder="emailanda@mail.com" required>
                        </div>
                        <div class="sm:col-span-2" data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                            <label for="message" class="block mb-2 text-base font-medium text-gray-700">Pesan</label>
                            <textarea id="message" rows="6"
                                class="block p-2.5 w-full text-base text-gray-700 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-rose-500 focus:border-rose-500 "
                                placeholder="Isi pesan anda" name="pesan"></textarea>
                        </div>
                        <button type="submit"
                            class="sm:w-fit hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-300 bg-rose-700 px-5 py-3 text-base font-medium text-center text-white transition-colors duration-300 ease-in-out rounded-lg"
                            data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Kirim Pesan</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(70%-30rem)]"
            aria-hidden="true">
            <div class="relative left-[calc(70%+3rem)] aspect-[1155/678] w-[36.125rem]  bg-gradient-to-tr from-[#9b6be9] to-[#f289fc] opacity-30 sm:left-0 sm:w-[52.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
        </div>
    </section>
</template>