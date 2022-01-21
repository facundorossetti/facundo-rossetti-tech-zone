<template>
    <v-btn :class="disabled ? 'btnDisabled' : 'btn'" :ripple="false" :style="style" @click="click">
        <div v-if="prependSvgIcon && !processing">
            <img class="icon" :src="require(`../assets/sprite/svg/icons/${prependSvgIcon}.svg`)" alt="">
        </div>
        <span class="__text text-l1-default">{{ processing && !blockProcessing ? "Processing..." : text }}</span>
        <div v-if="apendSvgIcon && !processing">
            <img class="icon" :src="require(`../assets/sprite/svg/icons/${apendSvgIcon}.svg`)" alt="">
        </div>
        <span v-show="productValue && !processing" class="__text text-l1-default">{{ productValue }}</span>
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
        productValue: {
            type: String,
            default: null,
        },
        prependSvgIcon: {
            type: String,
            default: null,
        },
        apendSvgIcon: {
            type: String,
            default: null,
        },
        blockProcessing: {
            type: Boolean,
            default: false,
        },
        disabled: {
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
    data() {
        return {
            processing: false,
        }
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
    },
    methods: {
        click() {
            if(!this.disabled) {
                this.$emit('click');
                this.processing = true;
                setTimeout(() => {
                    this.processing = false;
                }, 700);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    height: 51px;
    text-transform: none;
    border-radius: 12px;
    background: $color-brand-default !important;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    .__text {
        padding-left: 8px;
        padding-right: 8px;
        color: $color-neutrals-0 !important;
    }
    &:hover {
        background: $color-brand-hover !important;
    }
}
.btnDisabled {
    cursor: default;
    height: 51px;
    text-transform: none;
    border-radius: 12px;
    background: $color-neutrals-200 !important;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    .__text {
        padding-left: 8px;
        padding-right: 8px;
        color: $color-neutrals-600 !important;
    }
    &::before {
        background-color: transparent !important;
    }
}
.icon {
    margin-top: 2px;
    width: 24px;
    height: 24px;
}
</style>