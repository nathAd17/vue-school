<template>
    <HomeSection />

    <GreetingSection />

    <AboutSection />

    <ServiceSection />

    <GallerySection />

    <ContactSection />
</template>

<script>
import HomeSection from '../sections/HomeSection.vue'
import GreetingSection from '../sections/GreetingSection.vue'
import AboutSection from '../sections/AboutSection.vue'
import ServiceSection from '../sections/ServiceSection.vue'
import GallerySection from '../sections/GallerySection.vue'
import ContactSection from '../sections/ContactSection.vue'

export default {
    components: {
        HomeSection,
        GreetingSection,
        AboutSection,
        ServiceSection,
        GallerySection,
        ContactSection,
    }
}
</script>
