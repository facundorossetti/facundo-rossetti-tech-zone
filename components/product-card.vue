<template>
    <div class="product-card-container">
        <div class="content">
            <img src="../assets/illustrations/walkthroug-3-desktop.png" alt="">
            <div class="footer mt-auto">
                <span class="text-l1-default neutrals-900-color-text">Product name</span>
                <span class="text-l2-allcaps neutrals-600-color-text">product type</span>
            </div>
        </div>
        <e-button text="Redeem for 12.500" class="mt-auto" height="51px"></e-button>
    </div>
</template>

<script>
export default {
    name: "ProductCard"
}
</script>

<style lang="scss" scoped>
.product-card-container {
    display: flex;
    flex-direction: column;
    height: 508px;
    width: 320px;
    .content {
        display: flex;
        flex-direction: column;
        height: 431px;
        border: 1px solid $color-neutrals-300;
        border-radius: 16px;
        padding: 0 20px;
        img {
            padding: 20px;
            width: 100%;
            height: 100%;
        }
        .footer {
            display: flex;
            flex-direction: column;
            height: 88px;
            padding: 16px 24px;
            border-top: 1px solid $color-neutrals-300;
        }
    }
}
</style>