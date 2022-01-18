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
        <e-card class="card1"></e-card>
        <e-card class="card2"></e-card>
        <e-card class="card3"></e-card>
      </div>
      <product-card></product-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 85px;
  background: $color-brand-default;
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
  background: $color-brand-default;
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
</style>
