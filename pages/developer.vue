<template>
    <div>
        <select-filter label="All Products" :items="items" @select="console"></select-filter>
        <e-button-toggle :btns="btns" @select="console"></e-button-toggle>
        <e-pagination :max-pages="4" @change="console"></e-pagination>
        <product-card 
            :show-apend-icon="showIcon" 
            :product-value="productValue" 
            :text="text" 
            @click="clickProduct"
        ></product-card>
    </div>
</template>

<script>
export default {
    name: "DeveloperV",
    data() {
        return {
            items: ["All Products", "Gaming", "Audio", "Smart Home", "Monitors & TV"],
            btns: [1000,2000,3000],
            showIcon: true,
            text: "Redeem for",
            productValue: "12.500",
        }
    },
    methods: {
        console(e) {
            console.log(e);
        },
        clickProduct() {
            this.showIcon = false;
            this.productValue = null;
            this.text = "Procesing...";
        }
    }
}
</script>