<template>
  <div>
    <v-row style="width: 1464px; margin: 0 auto;">
      <v-col>
        <p class="text-l1-allcaps-24ls neutrals-600-color-text">EXPLORE THE</p>
        <p class="heading-l1-default brand-default-color-text">Tech</p>
        <p class="heading-l1-default neutrals-900-color-text">Zone</p>
        <p class="text-l1-default neutrals-600-color-text">Here you'll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.</p>
        <e-button text="view all products" show-apend-icon width="318px" height="80px" border-radius="24px"></e-button>
      </v-col>
      <v-col>
        <div class="image-container">
          <img src="../assets/illustrations/hero-desktop.png" alt="">
        </div>
      </v-col>
    </v-row>
    <v-row style="width: 100%; margin: 0 auto;">
      <div class="midpage-container">
        <e-card 
          title="1 — browse" 
          description="Browse our tech catalog with more than 20 top tech products" 
          class="card1"
        ></e-card>
        <e-card 
          title="2 — choose" 
          description="Exchange your hard earned AeroPoints for the item you want" 
          class="card2"
        ></e-card>
        <e-card 
          title="3 — enjoy!" 
          description="All done, you can relax! We’ll take care of delivery of your tech item!" 
          class="card3"
        ></e-card>
      </div>
    </v-row>
    <v-row>
      <div class="products-section-container">
        <div class="tittle mb-10">
          <p class="title-l2-default">tech</p>
          <p class="title-l2-default neutrals-900-color-text pl-5">products</p>
        </div>
        <div class="options">
          <div class="d-flex align-center">
            <span class="pr-4">Filter by:</span>
            <select-filter label="All Products" :items="items"></select-filter>
          </div>
          <v-divider class="mx-10" vertical></v-divider>
          <div class="d-flex align-center">
            <span class="pr-4">Sort by:</span>
            <e-button-toggle :btns="btns" :default-position="0"></e-button-toggle>
          </div>
          <e-pagination class="ml-auto" :max-pages="2"></e-pagination>
        </div>
        <v-row class="products-container">
          <v-col v-for="(product, index) in products" :key="index" cols="12" lg="3" class="pb-16">
            <product-card
              :show-apend-icon="showIcon"
              :product-value="product.cost"
              :name="product.name"
              :type="product.category"
              :text="text"
              :img-url="product.img.url"
              @click="redeemProduct(product)"
            ></product-card>
          </v-col>
        </v-row>
        <div class="pagination-footer pt-16">
          <div class="wrapper d-flex align-center justify-space-between">
            <div class="text d-flex">
              <span class="text-l1-default brand-default-color-text pr-2">{{products.length}} of {{products.length}}</span>
              <span class="text-l1-default neutrals-600-color-text">products</span>
            </div>
            <e-pagination :max-pages="2"></e-pagination>
          </div>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      items: ["All Products", "Gaming", "Audio", "Smart Home", "Monitors & TV"],
      btns: ["Most Recent", "Lowest Price", "Highest Price"],
      showIcon: true,
      text: "Redeem for",
      productValue: "12.500",
      headers: {
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NzBiNGEzMGFiYjAwMWE5NDExY2QiLCJpYXQiOjE2NDI0MjY1NDh9.H-F16vO3pn1zo5exccyNIvsA74sgV87egCdmUUUKNcU'
      },
      products: []
    }
  },
  async beforeMount() {
    this.products = (await this.$axios.get('https://coding-challenge-api.aerolab.co/products', 
      { headers: this.headers })).data
    console.log(this.products)
  },
  methods: {
    async redeemProduct(product) {
      await this.$axios
          .post('https://coding-challenge-api.aerolab.co/redeem', {'productId': product._id},
          { headers: this.headers })
          .then((response) => {
            this.$store.commit('user/removePoints', product.cost);
            console.log(response.data.message);
          })
          .catch(error => error.response.data);
    }
  },
}
</script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 85px;
  background: $color-illustration-bg;
  img {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 135%;
  }
}
.midpage-container {
  display: flex;
  justify-content: center;
  margin: 230px auto;
  width: 100%;
  height: 528px;
  background: $color-illustration-bg;
}
.card1 {
  transform: translate(50px, -80px) rotate(-3deg);
}
.card2 {
  transform: translate(0, -120px);
}
.card3 {
  transform: translate(-50px, -80px) rotate(3deg);
}
.products-section-container {
  width: 1464px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  .tittle {
    display: flex;
    :first-child {
      color: #176FEB;
    }
  }
  .options {
    width: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 66px;
  }
  .products-container {
    display: flex;
    flex-wrap: wrap;
  }
  .pagination-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-bottom: 250px;
    .wrapper {
      width: 55%;
    }
  }
}
.divider {
  height: 59px;
  border-left: 1px solid #DAE4F2;
}
</style>
