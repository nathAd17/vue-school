<template>
    <HomeSection />

    <AboutSection />

    <ServiceSection />

    <ContactSection />
</template>
<script>
import HomeSection from '../sections/HomeSection.vue'
import AboutSection from '../sections/AboutSection.vue'
import ServiceSection from '../sections/ServiceSection.vue'
import ContactSection from '../sections/ContactSection.vue'

export default {
    components: {
        HomeSection,
        AboutSection,
        ServiceSection,
        ContactSection,
    }
}
</script>
