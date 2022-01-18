<template>
    <div class="toggle-wrapper">
        <v-btn-toggle :value="defaultPosition" borderless mandatory>
            <v-btn 
                v-for="(btn, index) in btns" :key="index" 
                class="toggle-button" 
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
.toggle-button {
    width: 45%;
    height: 35px;
    border-radius: 12px !important;
    background-color: #E6F0FF !important;
    &:nth-child(2) {
        margin-right: 8px;
        margin-left: 8px;
    }
}
::v-deep .v-btn--active {
    color: $color-neutrals-100 !important;
    background: $color-brand-default !important;
}
</style>