<template>
    <div class="card-container">
        <div class="card-image-container">
            <img :src="require(`../assets/illustrations/${image}.png`)" alt="">
        </div>
        <div class="card-footer">
            <div class="pb-3 d-flex align-center">
                <div class="icon-container">
                    <img class="icon" :src="require(`../assets/sprite/svg/icons/${iconName}.svg`)">
                </div>
                <span class="title-l3-default brand-default-color-text pl-4">{{ title }}</span>
            </div>
            <div class="text-l1-default neutrals-600-color-text description">
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
        },
        iconName: {
            type: String,
            default: 'aeropay-1'
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
    padding: 16px 25px;
    box-sizing: border-box;
    border: 1px solid $color-neutrals-300;
    border-radius: 0px 0px 24px 24px;
}
.icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: $color-brand-light;
}
.icon {
    width: 32px;
    height: 32px;
}
.description {
    max-width: 90%;
}
</style>