<template>
  <img src="../assets/icons/favicon.svg" :style="style" />
</template>

<script>
export default {
  name: 'IconSvg',
  props: {
    name: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 26,
    },
    height: {
      type: Number,
      default: null,
    },
    width: {
      type: Number,
      default: null,
    },
    color: {
      type: String,
      default: "#5E6983",
    },
  },
  computed: {
    style() {
      const style = {};
      style.fill = this.color;
      if (this.height !== null) {
        style.height = `${this.height}px`;
      } else {
        style.height = `${this.size}px`;
      }
      if (this.width !== null) {
        style.width = `${this.width}px`;
      } else {
        style.width = `${this.size}px`;
      }
      return style;
    },
  },
};
</script>