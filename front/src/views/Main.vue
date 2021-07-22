<template>
  <div>
    <div class="container">
      <Menu />
    </div>
  </div>
</template>

<script>
import Menu from "../components/menu.vue";

export default {
  components: {
    Menu,
  },
};
</script>

<style lang="scss" scoped>
// font-family: "Century Gothic";
// font-family: "Padauk";
.container {
  max-width: 1550px;
  width: 100%;
  margin: auto;
}
</style>
