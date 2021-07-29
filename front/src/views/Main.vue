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
      <Plan />
      <Road />
      <Reviews />
      <Questions />
      <Inst />
      <Map />
    </div>
    <CusFooter />
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
import Plan from "../components/plan.vue";
import Road from "../components/road.vue";
import Reviews from "../components/reviews.vue";
import Questions from "../components/questions.vue";
import Inst from "../components/inst.vue"
import Map from "../components/map.vue"
import CusFooter from "../components/cusFooter.vue"

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
    Plan,
    Road,
    Reviews,
    Questions,
    Inst,
    Map,
    CusFooter,
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
  background: linear-gradient(179.92deg, #FFFFFF 6.35%, rgba(255, 255, 255, 0.733635) 93.55%, rgba(216, 216, 216, 0) 141.79%);
}
</style>
