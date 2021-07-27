<template>
  <div>
    <div class="container">
      <Menu />
      <HeaderBlock />
      <Investment />
      <Conditions />
      <Creator />
      <Detailed />
      <Calculator />
      <TargetsOfInvestment />
      <Documents />
    </div>
  </div>
</template>

<script>
import Menu from "../components/menu.vue";
import HeaderBlock from "../components/headBlock.vue";
import Investment from "../components/investment.vue";
import Conditions from "../components/conditions.vue";
import Creator from "../components/creator.vue";
import Detailed from "../components/detailed.vue";
import Calculator from "../components/calculator.vue";
import TargetsOfInvestment from "../components/targetsOfInvestment.vue";
import Documents from "../components/documents.vue";

export default {
  components: {
    Menu,
    HeaderBlock,
    Investment,
    Conditions,
    Creator,
    Detailed,
    Calculator,
    TargetsOfInvestment,
    Documents,
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
