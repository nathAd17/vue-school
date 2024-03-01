<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" v-if="isOpen">
        <div class="fixed inset-0 overflow-y-auto" @click.self="closeModal">
            <div class="flex items-center justify-center min-h-screen">
                <div class="w-96 relative bg-white rounded-lg">
                    <div class="flex items-center justify-between p-5 border-b">
                        <h3 class="text-lg font-semibold">{{ title }}</h3>
                        <button @click="closeModal" class="hover:text-gray-700 text-gray-500">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="p-5">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        };
    },
    props: {
        title: {
            type: String,
            required: true
        }
    },
    methods: {
        openModal() {
            this.isOpen = true;
            document.body.style.overflow = 'hidden';
        },
        closeModal() {
            this.isOpen = false;
            document.body.style.overflow = '';
        }
    }
};
</script>
