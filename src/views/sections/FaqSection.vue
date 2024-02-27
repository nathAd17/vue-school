<script setup>
import faqs from "../../data/faqs.js";
import { ref } from "vue";

let isOpen = ref(1);
</script>

<template>
    <!-- Questions Section Start -->
    <div id="faq" class="md:w-4/5 container px-5 mx-auto">
        <section class="pt-18 py-16">
            <div class="md:w-3/5 w-4/5 mx-auto">
                <h2 class="md:text-4xl font-theme-heading text-3xl font-medium text-center">Frequently Asked Questions</h2>
                <p class="text-theme-grayish-blue mt-7 font-theme-content text-lg text-center">Here are some of out FAQs. If
                    you have any other quesitons you'd like answered please feel free to email us.</p>
            </div>

            <div class="lg:w-3/5 w-full mx-auto mt-10">
                <ul class="shadow-lg">
                    <template v-for="(faq, index) in faqs" :key="faq.id">
                        <li @click="isOpen = faq.id" :class="isOpen === faq.id ? 'text-theme-secondary' : ''"
                            class="font-theme-content hover:text-theme-secondary bg-slate-100 flex items-center justify-between px-6 py-5 text-xl font-medium transition duration-200 cursor-pointer">
                            <a href="#">{{ faq.title }}</a>
                            <svg :class="isOpen === faq.id ? 'rotate-180 text-theme-secondary' : 'rotate-0 text-theme-primary'"
                                class="transform" xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                            </svg>
                        </li>
                        <p v-show="isOpen === faq.id"
                            class="bg-slate-50 font-theme-content text-md lg:text-lg px-6 py-5 text-justify text-gray-500">
                            {{ faq.description }}</p>
                    </template>
                </ul>
                <div class="flex justify-center mt-10">
                    <LinkButton btn-type="primary" link="#" class="text-sm">More FAQs</LinkButton>
                </div>
            </div>
        </section>
    </div>
    <!-- Questions Section End -->
</template>
