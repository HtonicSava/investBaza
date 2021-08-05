<template>
  <div>
    <div class="main">
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
import Inst from "../components/inst.vue";
import Map from "../components/map.vue";
import CusFooter from "../components/cusFooter.vue";

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
.main {
  background: linear-gradient(#ffffff, #d8d8d8);
}

.container {
  max-width: 1220px;
  padding: 0px 10px;
  width: 100%;
  margin: auto;
}

@media (max-width: 1120px) {
  .container {
    padding: 0px 25px;
  }
}
</style>
