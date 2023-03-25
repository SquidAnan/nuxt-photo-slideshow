<template>
    <button
        type="button"
        class="absolute bg-[rgba(0,0,0,0.3)] rounded-lg transition duration-300 hover:bg-[rgba(0,0,0,0.5)] hidden lg:block"
        :style="button_style"
    >
        <svg
            viewBox="0 0 24 24"
            height="60"
            width="60"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="transition duration-300 stroke-neutral-200 hover:translate-x-1"
        >
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    </button>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {},
    computed: {
        console: () => console,
        button_style: function () {
            if (this.direction == "right") {
                return { right: 0 };
            } else if (this.direction == "left") {
                return { left: 0, transform: "rotate(180deg)" };
            }
        },
    },
    props: ["direction"],
};
</script>