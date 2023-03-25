<template>
    <Flicking
        class="w-full h-full overflow-hidden"
        ref="flicking"
        @changed="update_photo_number"
        :options="{ panelsPerView: 1, renderOnlyVisible: false }"
    >
        <!-- auto generate photos -->
        <template v-for="(item, index) in items">
            <div
                class="absolute flex items-center justify-center w-full h-full"
                :key="index"
                :style="compute_position(index)"
            >
                <nuxt-img
                    :src="item.photo_name"
                    alt="img"
                    class="max-w-full max-h-full rounded-sm shadow-lg"
                    draggable="false"
                    loading="lazy"
                />
            </div>
        </template>
    </Flicking>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";

export default {
    data() {
        return {
            items: [
                { photo_name: "/IMG_4618-2000.jpg" },
                { photo_name: "/IMG_4619-2000.jpg" },
                { photo_name: "/IMG_4623-2000.jpg" },
                { photo_name: "/IMG_4626-2000.jpg" },
                { photo_name: "/IMG_4630-2000.jpg" },
            ],
        };
    },
    methods: {
        update_photo_number() {
            this.$emit("photo_changed", this.$refs.flicking.index + 1);
        },
        compute_position: function (index) {
            return { left: (100 * index).toString() + "%" };
        },
    },
    computed: {},
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