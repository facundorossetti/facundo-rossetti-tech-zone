<template>
    <div>
        <v-btn-toggle class="toggle-container" :value="defaultPosition" borderless mandatory>
            <v-btn 
                v-for="(btn, index) in btns" :key="index"
                class="toggle-button text-l1-default"
                :ripple="false"
                @click="btnClicked(btn)"
                >{{ btn }}
            </v-btn >
        </v-btn-toggle>
    </div>
</template>

<script>
export default {
    name: "EButtonToggle",
    props: {
        btns: {
            type: Array,
            default: () => []
        },
        defaultPosition: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {}
    },
    methods: {
        btnClicked(btn) {
            this.$emit("select", btn);
        }
    }
}
</script>

<style lang="scss" scoped>
.toggle-container {
    width: 70%;
}
.toggle-button {
    text-transform: capitalize;
    font-weight: 600 !important;
    width: 45%;
    max-height: 43px;
    min-height: 35px;
    border-radius: 12px !important;
    background: $color-neutrals-200 !important;
    &:nth-child(2) {
        margin-right: 8px;
        margin-left: 8px;
    }
}
::v-deep .v-btn__content {
    background-image: $color-brand-default;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
::v-deep .v-btn--active {
    color: $color-neutrals-100 !important;
    background: $color-brand-default !important;
}
::v-deep .v-btn--active .v-btn__content {
    background-image: white;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;
}
</style>