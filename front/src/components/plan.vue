<template>
  <div class="plan">
    <div class="plan__title">
      <div class="plan__button">
        <CusButton :up="true" />
      </div>
      <h3>Маркетинг план</h3>
    </div>
    <div class="plan__bigitemContainer">
      <div class="plan__bigitem">
        <p>1 линия</p>
        <p>10% бонус</p>
        <p>2 линия</p>
        <p>2% бонус</p>
        <p>3 линия</p>
        <p>1% бонус</p>
        <p>4 линия</p>
        <p>0.5% бонус</p>
        <p>5 линия</p>
        <p>0.5% бонус</p>
      </div>
    </div>
    <div class="plan__tripleitemContainer">
      <div class="plan__item-title"><p>Статус</p></div>
      <div class="plan__item-title"><p>Личный депозит</p></div>
      <div class="plan__item-title"><p>1-я линия</p></div>
      <div class="plan__item"><p>М1</p></div>
      <div class="plan__item"><p>100 000</p></div>
      <div class="plan__item"><p>500 000</p></div>
      <div class="plan__item"><p>М2</p></div>
      <div class="plan__item"><p>200 000</p></div>
      <div class="plan__item"><p>1 млн</p></div>
      <div class="plan__item"><p>М3</p></div>
      <div class="plan__item"><p>300 000</p></div>
      <div class="plan__item"><p>2 млн</p></div>
      <div class="plan__item"><p>М4</p></div>
      <div class="plan__item"><p>400 000</p></div>
      <div class="plan__item"><p>5 млн</p></div>
      <div class="plan__item"><p>М5</p></div>
      <div class="plan__item"><p>500 000</p></div>
      <div class="plan__item"><p>10 млн</p></div>
    </div>
    <div class="plan__doubleitemContent">
      <div class="plan__doubleitemContainer">
        <div class="plan__item-title"><p>Общий оборот</p></div>
        <div class="plan__item-title"><p>Приз</p></div>
        <div class="plan__item"><p>1 млн</p></div>
        <div class="plan__item"><p>ручка Parker</p></div>
        <div class="plan__item"><p>2 млн</p></div>
        <div class="plan__item"><p>AirPods Pro</p></div>
        <div class="plan__item"><p>5 млн</p></div>
        <div class="plan__item"><p>iPhone 12 Pro</p></div>
        <div class="plan__item"><p>10 млн</p></div>
        <div class="plan__item"><p>iPad Pro</p></div>
        <div class="plan__item"><p>20 млн</p></div>
        <div class="plan__item"><p>MacBook Pro</p></div>
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
  name: "plan",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.plan {
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.04em;
  margin-top: 150px;
  p {
    margin-bottom: 0px;
  }
}
.plan__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  }
}
.plan__button {
  // left: 30px;
  // position: absolute;
}

.plan__bigitemContainer {
  // position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
}

.plan__bigitem {
  width: 675px;
  height: 386px;
  font-size: 40px;
  color: rgba(0, 0, 0, 0.8);
  background: #f6f6f6;
  border: 3px solid #515151;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  padding: 30px 70px;
}

.plan__tripleitemContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  justify-items: center;
  margin-bottom: 120px;
}

.plan__doubleitemContent {
  display: flex;
  justify-content: center;
}

.plan__doubleitemContainer {
  max-width: 780px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  justify-items: center;
  margin-bottom: 120px;
}

.plan__item {
  width: 100%;
  background: #f6f6f6;
  border: 3px solid #515151;
  text-align: center;
  padding: 20px 30px;
  font-size: 30px;
}

.plan__item-title {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  width: 100%;
  color: #000000;
  font-size: 40px;
  background: #f6f6f6;
  border: 3px solid #515151;
  text-align: center;
}

@media (max-width: 900px) {
  .plan__title {
    font-size: 30px;
    margin-bottom: 100px;
    margin-right: 20px;

    h3 {
      margin-left: 30px;
      &::before {
        top: -5%;
        left: -15%;
        width: 120%;
        height: 120%;
      }
    }
  }
  .plan__bigitemContainer {
    // position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  .plan__bigitem {
    width: 280px;
    height: auto;
    font-size: 18px;
    font-weight: 700;
    color: rgb(0, 0, 0);
    background: #f6f6f6;
    border: 3px solid #515151;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 25px;
    column-gap: 20px;
    row-gap: 10px;
    padding: 30px 20px;
  }

  .plan__tripleitemContainer {
    display: grid;
    grid-template-columns: repeat(3, minmax(80px, 150px));
    grid-gap: 20px;
    justify-items: center;
    margin-bottom: 40px;
    justify-content: center;
  }

  .plan__doubleitemContainer {
    max-width: 780px;
    display: grid;
    grid-template-columns: repeat(2, minmax(80px, 150px));
    grid-gap: 20px;
    justify-items: center;
    margin-bottom: 120px;
  }

  .plan__item {
    padding: 20px 10px;
    font-size: 16px;
  }

  .plan__item-title {
    padding: 20px 10px;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
