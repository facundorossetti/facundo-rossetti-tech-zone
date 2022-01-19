<template>
  <v-app>
    <v-main>
      <div class="navigation-container">
        <icon name="favicon" :heigth="48" :width="126"></icon>
        <aeroplay-drop-down></aeroplay-drop-down>
      </div>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.navigation-container {
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1464px;
  height: 128px;
}
</style>
