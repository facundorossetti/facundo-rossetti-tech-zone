<template>
    <div :class="'snackbar-container' + (success ? ' well' : ' wrong')">
        <div>
            <v-icon>{{ success ? "mdi-thumb-up" : "mdi-alert-circle" }}</v-icon>
        </div>
        <div>{{ text }}</div>
        <div>
            <v-icon @click="$emit('clickClose')">mdi-close</v-icon>
        </div>
    </div>
</template>

<script>
export default {
    name: "ESnackbar",
    props: {
        success: {
            type: Boolean,
            default: true
        },
        productName: {
            type: String,
            default: "",
        },
    },
    computed: {
        text() {
            return this.success ? this.productName + 'redeemed successfully' : 'There was a problem with the transaction';
        },
    }
}
</script>

<style lang="scss" scoped>
.snackbar-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: sticky;
    z-index: 100;
    bottom: 30px;
    width: 532px;
    height: 80px;
    border-radius: 12px;
    background-color: $color-neutrals-0;
}
.well {
    border: 1px solid $color-green-default;
}
.wrong {
    border: 1px solid $color-red-default;
}
</style>