<template>
  <v-container fluid>
    <v-row no-gutters class="max-width-center">
      <v-col>
        <div class="navigation-container">
          <div class="icon"></div>
          <aeroplay-drop-down></aeroplay-drop-down>
        </div>
      </v-col>
    </v-row>
    <v-row class="max-width-center mt-16 pt-8" >
      <v-col class="pl-0 pr-16">
        <div class="d-flex flex-column align-start pr-16">
          <span class="text-l1-allcaps-24ls neutrals-600-color-text">EXPLORE THE</span>
          <span class="heading-l1-default brand-default-color-text">Tech</span>
          <span class="heading-l1-default neutrals-900-color-text">Zone</span>
          <span class="text-l1-default neutrals-600-color-text pb-16 pt-6 pr-16">Here you'll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.</span>
          <e-button
            text="view all products"
            apend-icon="mdi-arrow-down"
            apend-icon-color="#FFFFFF"
            width="318px"
            height="80px"
            border-radius="24px"
            @click="goto('products')"
          ></e-button>
        </div>
      </v-col>
      <v-col class="px-0">
        <div class="image-container">
          <img src="../assets/illustrations/hero-desktop.png" alt="">
        </div>
      </v-col>
    </v-row>
    <v-row>
      <div class="midpage-container">
        <e-card
          image='walkthroug-1-desktop'
          icon-name="walkthrough-1"
          title="1 — browse"
          description="Browse our tech catalog with more than 20 top tech products" 
          class="card1"
        ></e-card>
        <e-card
          image='walkthroug-2-desktop'
          icon-name="walkthrough-3"
          title="2 — choose" 
          description="Exchange your hard earned AeroPoints for the item you want" 
          class="card2"
        ></e-card>
        <e-card
          image='walkthroug-3-desktop'
          icon-name="walkthrough-2"
          title="3 — enjoy!" 
          description="All done, you can relax! We’ll take care of delivery of your tech item!" 
          class="card3"
        ></e-card>
      </div>
    </v-row>
    <v-row no-gutters class="max-width-center">
      <div id="products" class="products-section-container">
        <div class="tittle mb-10">
          <p class="title-l2-default">tech</p>
          <p class="title-l2-default neutrals-900-color-text pl-5">products</p>
        </div>
        <div class="options">
          <div class="d-flex align-center">
            <span class="pr-4">Filter by:</span>
            <select-filter :label="categories[0]" :items="categories" @select="selectFilter"></select-filter>
          </div>
          <v-divider class="mx-10" vertical></v-divider>
          <div class="d-flex align-center">
            <span class="pr-4">Sort by:</span>
            <e-button-toggle :btns="btns" :default-position="0" @select="sortBy" ></e-button-toggle>
          </div>
          <e-pagination
            class="ml-auto"
            :max-pages="filteredProducts.length < 16 ? 1 : 2"
            @change="changePage"
          ></e-pagination>
        </div>
        <v-row no-gutters class="products-container">
          <div
            v-for="(product, index) in (page === 1 ? filteredProducts.slice(0, 16) : filteredProducts.slice(16, 32))"
            :key="index"
            class="pb-16"
          >
            <product-card
              :disabled-btn="product.cost > $store.state.user.points"
              :show-apend-icon="showIcon"
              :product-value="numberWithCommas(product.cost)"
              :name="product.name"
              :type="product.category"
              :text="product.cost > $store.state.user.points ? insuficientText : text"
              :img-url="product.img.url"
              @click="redeemProduct(product)"
            ></product-card>
          </div>
        </v-row>
        <div class="pagination-footer pt-16">
          <div class="wrapper d-flex align-center justify-space-between">
            <div class="text d-flex">
              <span class="text-l1-default brand-default-color-text pr-2">{{ filteredProducts.length > 16 ? 16: filteredProducts.length}} of {{ filteredProducts.length }}</span>
              <span class="text-l1-default neutrals-600-color-text">products</span>
            </div>
            <e-pagination :max-pages="filteredProducts.length < 16 ? 1 : 2" @change="changePage"></e-pagination>
          </div>
        </div>
        <e-snackbar
          v-for="(e, i) in snackbar" :key="i"
          :product-name="snackbarProductName(e)"
          @clickClose="closeSnackbar(e)"
        ></e-snackbar>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      page: 1,
      categories: ["All Products"],
      btns: ["Most Recent", "Lowest Price", "Highest Price"],
      showIcon: true,
      text: "Redeem for",
      insuficientText: "You need",
      productValue: "12.500",
      headers: {
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NzBiNGEzMGFiYjAwMWE5NDExY2QiLCJpYXQiOjE2NDI0MjY1NDh9.H-F16vO3pn1zo5exccyNIvsA74sgV87egCdmUUUKNcU'
      },
      products: [],
      filter: "All Products",
      snackbar: [],
    }
  },
  computed: {
    filteredProducts() {
      if(this.filter !== "All Products") {
        return this.products.filter((e) => e.category === this.filter);
      } else {
        return this.products;
      }
    },
  },
  async beforeMount() {
    this.products = (await this.$axios.get('https://coding-challenge-api.aerolab.co/products', 
      { headers: this.headers })).data;
    const array = [];
    this.products.forEach((e) => array.push(e.category));
    const newArray = [...new Set(array)];
    newArray.forEach((e)=> this.categories.push(e));
  },
  methods: {
    async redeemProduct(product) {
      await this.$axios
          .post('https://coding-challenge-api.aerolab.co/redeem', {'productId': product._id},
          { headers: this.headers })
          .then((response) => {
            this.$store.commit('user/removePoints', product.cost);
            this.snackbar.push(product.name);
          })
          .catch(error => error.response.data);
    },
    selectFilter(category) {
      this.filter = category;
    },
    closeSnackbar(e) {
      this.snackbar = this.snackbar.filter((element) => element !== e);
    },
    snackbarProductName(e) {
      return this.snackbar.find((element) => element === e);
    },
    sortBy(e) {
      if(e==="Lowest Price") {
        this.products.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
      }
      if(e==="Highest Price") {
        this.products.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
      }
    },
    changePage(e) {
      this.page = e;
    },
    goto(element) {
        this.$router.replace({ name: this.$route.name, hash: `#${element}` });
    },
    numberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
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
  margin: 230px auto 180px;
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
  padding-top: 50px;
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
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .pagination-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
.icon {
  width: 126px;
  height: 48px;
  background-image: url("../assets/sprite/svg/icons/aerolab-logo-1.svg");
}
.navigation-container {
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1464px;
  height: 128px;
}
.max-width-center {
    max-width: 1464px; 
    margin: 0 auto;
}
</style>
