<template>
  <div>
    <div class="container">
      <Menu />
      <HeaderBlock />
      <Investment />
    </div>
  </div>
</template>

<script>
import Menu from "../components/menu.vue";
import HeaderBlock from "../components/headBlock.vue";
import Investment from "../components/investment.vue";

export default {
  components: {
    Menu,
    HeaderBlock,
    Investment,
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
