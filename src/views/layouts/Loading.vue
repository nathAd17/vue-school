<template>
    <div>
        <!-- Overlay -->
        <div class="overlay" v-show="isLoading"></div>

        <!-- Loading Animation -->
        <div class="flex flex-col items-center justify-center w-full gap-4" v-show="isLoading">
            <div
                class="w-28 h-28 animate-spin border-t-blue-400 flex items-center justify-center text-4xl text-blue-400 border-8 border-gray-300 rounded-full">
                <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" class="animate-ping">
                    <path
                        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z">
                    </path>
                </svg>
            </div>
        </div>

        <!-- Your content here -->
        <div class="content">
            <!-- Your existing content -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false
        };
    },
    methods: {
        // Example method to simulate loading
        startLoading() {
            this.isLoading = true;
            // Prevent scrolling
            document.body.style.overflow = 'hidden';
            // Simulate loading for 3 seconds (replace with actual loading logic)
            setTimeout(() => {
                this.stopLoading();
            }, 3000);
        },
        stopLoading() {
            this.isLoading = false;
            // Re-enable scrolling
            document.body.style.overflow = '';
        }
    }
};
</script>

<style>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent black */
    z-index: 9999;
    /* Ensure it's on top of everything */
}
</style>
