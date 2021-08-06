<template>
  <div class="investment">
    <div class="investment__title">
      <h3>Куда инвестирует фонд</h3>
    </div>
    <div class="investment__button">
      <CusButton :up="true" />
    </div>
    <div class="investment__body">
      <div class="investment__img">
        <img src="../assets/img/investment/diagram.png" alt="" />
      </div>
      <div class="investment__items">
        <div class="investment__item">
          <div class="investment__percent">20%</div>
          <div>
            <h4>Фондовый рынок</h4>
            <p>IPO, акции, облигации, ETF фонды и индексы</p>
          </div>
        </div>
        <div class="investment__item">
          <div class="investment__percent">5%</div>
          <div>
            <h4>Благотворительность</h4>
          </div>
        </div>
        <div class="investment__item">
          <div class="investment__percent">35%</div>
          <div>
            <h4>Недвижимость</h4>
            <p>Жилая и коммерческая недвижимость</p>
          </div>
        </div>
        <div class="investment__item">
          <div class="investment__percent">30%</div>
          <div>
            <h4>Реальный бизнес</h4>
            <p>Маржинальные бизнесы и доходные автомобили</p>
          </div>
        </div>
        <div class="investment__item">
          <div class="investment__percent">10%</div>
          <div>
            <h4>Криптовалюта</h4>
            <p>Криптовалютные фонды и трейдинг</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "./button.vue";

export default {
  components: {
    CusButton,
  },
  name: "investment",
  data: function () {
    return {};
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
  margin-bottom: 50px;
  margin-left: 20px;
  h3 {
    width: auto;
    display: inline;
    position: relative;
  }
}

.investment__button {
  display: flex;
  justify-content: flex-end;
}

.investment__body {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  position: relative;
  height: auto;
}
.investment__img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  flex-grow: 0;
  img {
    max-width: 100%;
    width: auto;
  }
}
.investment__items {
  height: inherit;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
}
.investment__item {
  display: flex;
  align-items: center;
  width: 400px;
  h4 {
    font-family: Century Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 87.8%;
    letter-spacing: -0.015em;
    color: #000000;
    margin-bottom: 4px;
  }

  &:nth-child(1) {
    align-self: flex-start;
    .investment__percent {
      border-color: rgba(84, 66, 66, 1);
    }
  }
  &:nth-child(2) {
    align-self: center;
    .investment__percent {
      border-color: rgba(146, 37, 43, 1);
    }
  }
  &:nth-child(3) {
    align-self: flex-end;
    .investment__percent {
      border-color: rgba(255, 89, 89, 1);
    }
  }
  &:nth-child(4) {
    align-self: center;
    .investment__percent {
      border-color: rgba(255, 89, 89, 1);
    }
  }
  &:nth-child(5) {
    align-self: flex-start;
    .investment__percent {
      border-color: rgba(180, 35, 41, 1);
    }
  }
  p {
    margin-bottom: 0px;
    font-family: Century Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 87.8%;
    letter-spacing: -0.015em;
    color: rgba(0, 0, 0, 0.9);
  }
}

.investment__percent {
  margin-right: 25px;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 87.8%;
  letter-spacing: -0.015em;
  color: #000000;
  min-width: 48px;
  height: 46px;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 900px) {
  .investment {
    padding-top: 100px;
    margin-bottom: 100px;
    &::after {
      content: unset;
    }
  }
  .investment__title {
    font-size: 25px;
  }
  .investment__button {
  }
  .investment__body {
    flex-direction: column;
    align-items: center;
  }
  .investment__img {
    width: auto;
    height: auto;
    margin-bottom: 25px;
    img {
      max-width: 60%;
      width: auto;
    }
  }
  .investment__items {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    display: grid;
    gap: 10px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
  .investment__item {
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
    width: auto;
    &:nth-child(1) {
      align-self: unset;
    }
    &:nth-child(2) {
      align-self: unset;
    }
    &:nth-child(3) {
      align-self: unset;
    }
    &:nth-child(4) {
      align-self: unset;
    }
    &:nth-child(5) {
      align-self: unset;
    }
  }
  .investment__percent {
  }
}
</style>
