<template>
  <div class="investment">
    <div class="investment__title">
      <h3>Куда инвестирует фонд</h3>
    </div>
    <div class="investment__body">
      <div class="investment__item">
        <Carousel :photos="photosGarden">
          <div class="item">
            <h1 class="item__title">Частный детский садик</h1>
            <p class="item__p">Инвестиции в садик - 600 т.р</p>
            <p class="item__p">Чистая прибыль - 100 т.р</p>
            <p class="item__p">
              Большой спрос на детские сады в Крыму <br />
              Нет достойных конкурентов <br />
              Быстрая окупаемость <br />
              Бизнесс по подписке-9 месяцев прогнозируемого дохода
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
// import CusButton from "./button.vue";
import Carousel from "./carousel.vue";

export default {
  components: {
    // CusButton,
    Carousel,
  },
  name: "targetsOfInvestment",
  data: function () {
    return {
      photosGarden: ["garden1.png", "garden2.png", "garden3.png"],
    };
  },
};
</script>

<style lang="scss" scoped>
.investment {
  position: relative;
  padding-top: 170px;
  margin-bottom: 310px;
}
.investment__title {
  // font-family: "Padauk";
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-bottom: 150px;
  margin-right: 100px;
  text-align: right;
  h3 {
    width: auto;
    display: inline;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      top: -10px;
      left: -20px;
      width: 120%;
      height: 170%;
      border: 2px solid rgba(235, 23, 23, 0.7);
      border-radius: 50%;
      transform: rotate(4.95deg);
    }
  }
}

.item {
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
}

.item__title {
  margin-bottom: 50px;
}

.item__p {
  color: rgba(0, 0, 0, 0.8);
  font-size: 35px;
  margin-bottom: 50px;
  line-height: 100%;
  &:last-child {
    margin-bottom: 0px;
  }
}
</style>
