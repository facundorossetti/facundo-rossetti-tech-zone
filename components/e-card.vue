<template>
    <div class="card-container">
        <div class="card-image-container">
            <img :src="require(`../assets/illustrations/${image}.png`)" alt="">
        </div>
        <div class="card-footer mt-auto">
            <div class="d-flex">
                <icon :heigth="32" :width="32"></icon>
                <p class="title-l3-default brand-default-color-text pl-4">{{ title }}</p>
            </div>
            <div class="text-l1-default neutrals-600-color-text">
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ECard",
    props: {
        title: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        } 
    }
}
</script>

<style lang="scss" scoped>
.card-container {
    display: flex;
    flex-direction: column;
    height: 676px;
    width: 532px;
    padding: 12px;
    border: 1px solid $color-neutrals-300;
    border-radius: 24px;
    background: $color-neutrals-0;
}
.card-image-container {
    height: 498px;
    width: 508px;
    background: $color-illustration-bg;
    border-radius: 24px 24px 0px 0px;
    img {
        height: 100%;
        width: 100%;
    }
}
.card-footer {
    height: 153px;
    width: 100%;
    padding: 38px 25px;
    box-sizing: border-box;
    border: 1px solid $color-neutrals-300;
    border-radius: 0px 0px 24px 24px;
}
</style>