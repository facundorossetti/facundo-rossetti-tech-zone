<template>
    <v-btn class="btn" :ripple="false" :style="style">
        <icon v-show="showPrependIcon" :heigth="24" :width="24"></icon>
        <span class="__text text-l1-default">{{text}}</span>
        <icon v-show="showApendIcon" :heigth="24" :width="24"></icon>
    </v-btn>
</template>

<script>
export default {
    name: "EButton",
    props: {
        text: {
            type: String,
            default: "",
        },
        showPrependIcon: {
            type: Boolean,
            default: false,
        },
        showApendIcon: {
            type: Boolean,
            default: false,
        },
        height: {
            type: String,
            default: "",
        },
        width: {
            type: String,
            default: "",
        },
        borderRadius: {
            type: String,
            default: "",
        },
    },
    computed: {
        style() {
            const style = {};
            if (this.height !== null) {
                style.height = this.height;
            }
            if (this.width !== null) {
                style.width = this.width;
            }
            if (this.borderRadius !== null) {
                style.borderRadius = this.borderRadius;
            }
            return style;
        },
    }
}
</script>

<style lang="scss" scoped>
.btn {
    height: 51px;
    text-transform: uppercase;
    border-radius: 12px;
    background: $color-brand-default !important;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    .__text {
        padding-left: 8px;
        padding-right: 8px;
        color: $color-neutrals-0 !important;
    }
}
</style>