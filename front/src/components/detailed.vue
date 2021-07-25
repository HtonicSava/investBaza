<template>
  <div class="detailed">
    <div class="detailed__title">
      <h3>Подробнее</h3>
    </div>
    <div class="detailed__body">
      <CusButton :up="true" />
      <div class="detailed__card">
        <div class="detailed__item">
          <div class="detailed__number">1</div>
          <div class="detailed__itemText">
            <p>Вход от 10 т.р</p>
          </div>
        </div>
        <div class="detailed__item">
          <div class="detailed__number">2</div>
          <div class="detailed__itemText">
            <p>В среднем 5-7% в месяц</p>
          </div>
        </div>
        <div class="detailed__item">
          <div class="detailed__number">3</div>
          <div class="detailed__itemText">
            <p>Пополнение без комиссии</p>
            <p class="detailed__itemSubText">Банковским переводом</p>
            <p class="detailed__itemSubText">Криптовалютой</p>
          </div>
        </div>
        <div class="detailed__item">
          <div class="detailed__number">4</div>
          <div class="detailed__itemText">
            <p>Вывод без комиссии</p>
            <p class="detailed__itemSubText">Банковским переводом</p>
            <p class="detailed__itemSubText">Криптовалютой</p>
          </div>
        </div>
        <div class="detailed__item">
          <div class="detailed__number">5</div>
          <div class="detailed__itemText">
            <p>Бессрочные дивиденды с передачей по наследству</p>
          </div>
        </div>
        <div class="detailed__item">
          <div class="detailed__number">6</div>
          <div class="detailed__itemText">
            <p>С каждым инвестором заключается договор</p>
          </div>
        </div>
        <div class="detailed__cardButton">
          <CusButton :text="'ИНВЕСТИРОВАТЬ'" :color="'red'" />
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
  name: "detailed",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.detailed {
  margin-bottom: 300px;
}

.detailed__title {
  // font-family: "Padauk";
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-bottom: 170px;
  margin-left: 150px;
  h3 {
    width: auto;
    display: inline;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      top: -25px;
      left: -50%;
      width: 200%;
      height: 170%;
      border: 2px solid rgba(235, 23, 23, 0.7);
      border-radius: 50%;
      transform: rotate(-4.95deg);
    }
  }
}

.detailed__body {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.detailed__card {
  width: 600px;
  height: 900px;
  background: #f6f6f6;
  border: 3px solid #515151;
  padding: 100px 80px 100px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.detailed__item {
  display: flex;
  align-items: center;
}
.detailed__number {
  min-width: 48px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  background: linear-gradient(
    108.42deg,
    rgba(194, 194, 194, 0.1452) -0.02%,
    rgba(211, 211, 211, 0.055) 113.67%
  );
  border: 2px solid #515151;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 87.8%;
  letter-spacing: -0.015em;
  color: #000000;
}
.detailed__itemText {
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 87.8%;
  letter-spacing: -0.015em;
  color: #000000;
  p {
    margin-bottom: 0px;
  }
}
.detailed__itemSubText {
  font-size: 20px;
}
.detailed__cardButton {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
