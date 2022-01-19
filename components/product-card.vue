<template>
    <div class="product-card-container">
        <div class="content">
            <img :src="imgUrl" alt="">
            <div class="footer mt-auto">
                <span class="text-l1-default neutrals-900-color-text">{{ name }}</span>
                <span class="text-l2-allcaps neutrals-600-color-text">{{ type }}</span>
            </div>
        </div>
        <e-button 
            :disabled="disabledBtn" 
            :text="text" 
            class="mt-auto" 
            height="51px" 
            :show-apend-icon="showApendIcon" 
            :product-value="productValue"
            @click="$emit('click')">
        </e-button>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        imgUrl: {
            type: String,
            default: null
        },
        text: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: null
        },
        disabledBtn: {
            type: Boolean,
            default: false,
        },
        productValue: {
            type: Number,
            default: 0,
        },
        showApendIcon: {
            type: Boolean,
            default: false,
        },
    }
}
</script>

<style lang="scss" scoped>
.product-card-container {
    display: flex;
    flex-direction: column;
    height: 508px;
    width: 348px;
    .content {
        display: flex;
        flex-direction: column;
        height: 431px;
        border: 1px solid $color-neutrals-300;
        border-radius: 16px;
        img {
            margin: 64px auto 76px;
            width: 280px;
            height: 204px;
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