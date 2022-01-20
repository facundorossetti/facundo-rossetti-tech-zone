<template>
    <div :class="'snackbar-container' + (success ? ' well' : ' wrong')">
        <div class="icon">
            <img :src="require(`../assets/sprite/svg/icons/${icon}.svg`)" alt="">
        </div>
        <div class="text">{{ text }}</div>
        <div class="icon">
            <img src="../assets/sprite/svg/icons/cross-default.svg" alt="" @click="$emit('clickClose')">
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
        icon() {
            return this.success ? "system-success" : "system-error";
        }
    }
}
</script>

<style lang="scss" scoped>
.icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
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
    .text {
        color: $color-neutrals-600;
    }
}
.well {
    border: 1px solid $color-green-default;
}
.wrong {
    border: 1px solid $color-red-default;
}
</style>