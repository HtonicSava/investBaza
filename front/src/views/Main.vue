<template>
  <div>
    <div class="container">
      <Menu />
      <HeaderBlock />
    </div>
  </div>
</template>

<script>
import Menu from "../components/menu.vue";
import HeaderBlock from "../components/headBlock.vue";

export default {
  components: {
    Menu,
    HeaderBlock,
  },
};
</script>

<style lang="scss" scoped>
// font-family: "Century Gothic";
// font-family: "Padauk";
.container {
  max-width: 1220px;
  padding: 0px 10px;
  width: 100%;
  margin: auto;
}
</style>
