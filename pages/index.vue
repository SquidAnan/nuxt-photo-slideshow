<template>
    <main class="h-full bg-neutral-800 lg:p-20">
        <div class="flex flex-col items-stretch h-full">
            <AlbumTitle />
            <div
                class="grow-0 shrink-1 basis-auto relative flex flex-col items-center justify-center h-full min-h-0 lg:px-20"
            >
                <Slideshow
                    @photo_changed="update_photo_number"
                    ref="slideshow"
                />
                <div
                    class="absolute right-4 bottom-4 lg:right-0 lg:bottom-0 text-base text-neutral-200 font-[Domine]"
                >
                    {{ photo_number }} / 5
                </div>
                <SlideButton direction="right" @click.native="next_photo" />
                <SlideButton direction="left" @click.native="previous_photo" />
                <button
                    type="button"
                    class="absolute top-0 left-0 hidden lg:block p-1 transition duration-300 hover:opacity-80 hover:translate-x-[2px]"
                    @click="toggle_description"
                >
                    <img src="dots.svg" alt="dots" class="h-[24px] w-[30px]" />
                </button>
                <transition name="zoom">
                    <div
                        class="hidden lg:block absolute w-[450px] min-h-[150px] text-neutral-200 bg-[rgba(0,0,0,0.3)] backdrop-blur rounded cursor-move select-none overflow-hidden text-lg"
                        @mousedown="(event) => drag_start(event)"
                        :style="windowStyle"
                        v-show="description_visible"
                    >
                        <div class="relative p-8 pb-10 w-[450px]">
                            <p>
                                那天，交大下著很細的雨，在校園裡散步，像走在霧裡。我想和熟悉的朋友分享我的感覺，卻意識到身旁已經沒有這樣的朋友了。我深思著，是從什麼時候開始，生活變成了這個樣子。
                            </p>
                            <button
                                type="button"
                                class="absolute top-2 right-2 transition duration-300 hover:opacity-80"
                                @click="toggle_description"
                            >
                                <img
                                    src="cross.svg"
                                    alt="cross"
                                    class="p-1 w-5 h-5"
                                />
                            </button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            photo_number: 1,
            posX: 300,
            posY: 200,
            cursor_posX: 0,
            cursor_posY: 0,
            description_visible: false,
        };
    },
    methods: {
        next_photo() {
            this.$refs.slideshow.$refs.flicking.next(500);
        },
        previous_photo() {
            this.$refs.slideshow.$refs.flicking.prev(500);
        },
        drag_start(event) {
            this.cursor_posX = event.clientX;
            this.cursor_posY = event.clientY;
            document.onmousemove = (event) => this.dragging(event);
            document.onmouseup = this.drag_stop;
        },
        dragging(event) {
            this.posX += event.clientX - this.cursor_posX;
            this.posY += event.clientY - this.cursor_posY;
            this.cursor_posX = event.clientX;
            this.cursor_posY = event.clientY;
        },
        drag_stop() {
            document.onmousemove = null;
            document.onmouseup = null;
        },
        toggle_description() {
            this.description_visible = !this.description_visible;
        },
        update_photo_number(variable) {
            this.photo_number = variable;
        },
    },
    computed: {
        console: () => console,
        windowStyle: function () {
            return {
                top: this.posY + "px",
                left: this.posX + "px",
            };
        },
    },
};
</script>

<style>
html,
body,
#__nuxt,
#__layout {
    height: 100%;
    overflow: hidden;
}

.zoom-enter-active,
.zoom-leave-active {
    transition: all 0.3s ease;
}

.zoom-enter,
.zoom-leave-to {
    /* transform: translate(-5px, 3px); */
    opacity: 0;
    width: 0;
}

/* .zoom-leave,
.zoom-enter-to {
    opacity: 1;
} */
</style>