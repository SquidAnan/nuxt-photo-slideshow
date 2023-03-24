<template>
    <Flicking
        class="h-full w-full overflow-hidden"
        ref="flicking"
        @changed="update_photo_number"
        :options="{ panelsPerView: 1, renderOnlyVisible: false }"
    >
        <div class="absolute h-full w-full flex items-center justify-center">
            <nuxt-img
                src="/IMG_4618-2000.jpg"
                alt="img"
                class="max-h-full max-w-full shadow-lg rounded-sm"
                draggable="false"
                loading="lazy"
            />
        </div>
        <div class="absolute left-[100%] h-full w-full flex items-center justify-center">
            <nuxt-img
                src="/IMG_4619-2000.jpg"
                alt="img"
                class="max-h-full max-w-full shadow-lg rounded-sm"
                draggable="false"
                loading="lazy"
            />
        </div>
        <div class="absolute left-[200%] h-full w-full flex items-center justify-center">
            <nuxt-img
                src="/IMG_4623-2000.jpg"
                alt="img"
                class="max-h-full max-w-full shadow-lg rounded-sm"
                draggable="false"
                loading="lazy"
            />
        </div>
        <div class="absolute left-[300%] h-full w-full flex items-center justify-center">
            <nuxt-img
                src="/IMG_4626-2000.jpg"
                alt="img"
                class="max-h-full max-w-full shadow-lg rounded-sm"
                draggable="false"
                loading="lazy"
            />
        </div>
        <div class="absolute left-[400%] h-full w-full flex items-center justify-center">
            <nuxt-img
                src="/IMG_4630-2000.jpg"
                alt="img"
                class="max-h-full max-w-full shadow-lg rounded-sm"
                draggable="false"
                loading="lazy"
            />
        </div>
    </Flicking>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";

export default {
    data() {
        return {

        };
    },
    methods: {
        update_photo_number() {
            this.$emit('photo_changed', this.$refs.flicking.index + 1)
        },
    },
    computed: {

    },
    components: {
        Flicking: Flicking,
    },
};
</script>

<style scoped>
/* deep selector is used to select a child component's class */
/deep/ .flicking-camera {
    display: relative;
    height: 100%;
    /* width: 100%; */
}
</style>