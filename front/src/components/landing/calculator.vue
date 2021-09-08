<template>
  <div class="calculator">
    <div class="calculator__content">
      <div class="calculator__card card">
        <div class="card__title">
          <h4>Калькулятор</h4>
        </div>
        <div class="card__item item">
          <div class="item__title">
            <h4>Инвестирование</h4>
          </div>
          <div class="item__input">
            <input v-model="triadInvest" name="" />
            <v-slider
              class="item__slider"
              v-model="investValue"
              track-color="#E2E2E2"
              track-fill-color="#F3C68E"
              thumb-color="#F3C68E"
              :max="10000000"
            ></v-slider>
          </div>
        </div>
        <div class="card__item item">
          <div class="item__title">
            <h4>Реинвестирование</h4>
          </div>
          <div class="item__input">
            <input v-model="triadReinvest" name="" />
            <v-slider
              class="item__slider"
              v-model="reinvestValue"
              track-color="#E2E2E2"
              track-fill-color="#F3C68E"
              thumb-color="#F3C68E"
              :max="10000000"
            ></v-slider>
          </div>
        </div>
        <div class="card__item item">
          <div class="item__title">
            <h4>Ваш ежемесячный доход</h4>
          </div>
          <div class="item__input">
            <input v-model="finalValue" name="" />
          </div>
        </div>
      </div>
      <div class="calculator__extra">
        <div class="calculator__img">
          <img src="@/assets/img/landing/calculator/star.png" alt="" />
        </div>
        <div class="calculator__text">
          <p>В среднем прибыль в месяц составляет 5-7%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "calculator",
  data: function () {
    return {
      investValue: "",
      reinvestValue: "",
    };
  },
  methods: {
    formatTriad(num) {
      return (
        Number(num)
          .toString()
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + " ₽"
      );
    },
    parseTriad(text) {
      return Number(text.replace(/ ₽/g, "").replace(/ /g, ""));
    },
  },
  computed: {
    triadReinvest: {
      get: function () {
        if (this.reinvestValue !== "") {
          return this.formatTriad(this.reinvestValue);
        }
      },
      set: function (newValue) {
        this.reinvestValue = this.parseTriad(newValue);
      },
    },
    triadInvest: {
      get: function () {
        if (this.investValue !== "") {
          return this.formatTriad(this.investValue);
        }
      },
      set: function (newValue) {
        this.investValue = this.parseTriad(newValue);
      },
    },
    finalValue: function () {
      return (
        Math.floor(
          (Number(this.investValue) + Number(this.reinvestValue)) * 0.06
        )
          .toString()
          .replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + " ₽"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.calculator {
  p {
    margin-bottom: 0px;
  }
  padding-top: 40px;
  padding-bottom: 80px;
}

.calculator__content {
  max-width: 1157px;
  margin: auto;
  position: relative;
  display: flex;
  align-items: flex-start;
  &::before {
    z-index: 1;
    top: -50px;
    left: 50px;
    content: "";
    position: absolute;
    width: 300.51px;
    height: 700.14px;
    background: #f3c68e;
    opacity: 0.5;
    filter: blur(250px);
    transform: rotate(-26.72deg);
  }
}

.calculator__card {
  position: relative;
  z-index: 2;
}
.card {
  max-width: 534px;
  padding: 73px 116px 96px 102px;
  background: #0d0e25;
  border-radius: 10px;
}
.card__title {
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 33.5287px;
  color: #ffffff;
  margin-bottom: 33px;
}
.card__item {
  // margin-bottom: 44px;
}
.item {
}
.item__title {
  margin-bottom: 14px;
  font-family: PT Serif;
  font-style: italic;
  font-weight: normal;
  font-size: 24.4444px;
  letter-spacing: -0.015em;
  color: #ffffff;
}
.item__input {
  input {
    font-family: PT Serif;
    font-style: italic;
    font-weight: normal;
    font-size: 24.4444px;
    line-height: 87.8%;
    letter-spacing: -0.015em;
    color: rgba(0, 0, 0, 0.7);
    width: 100%;
    background-color: #ffffff;
    height: 68px;
    border-radius: 10px;
    text-align: center;
  }
}

.item__slider {
  position: relative;
  top: -17px;
}

.calculator__extra {
  position: relative;
  top: 0px;
  margin-left: 128px;
  margin-top: 200px;
}
.calculator__img {
  left: 0px;
  top: 0px;
  position: absolute;
  z-index: 3;
  transform: translate(-70%, -50%);
}
.calculator__text {
  max-width: 265px;
  font-family: PT Serif;
  font-style: italic;
  font-weight: normal;
  font-size: 29.8398px;
  letter-spacing: -0.015em;
  color: #ffffff;
}

@media (max-width: 900px) {
  .calculator__content {
    flex-direction: column;
    align-items: center;
  }
  .calculator__extra {
    margin-top: 80px;
  }
  .card {
    max-width: 534px;
    padding: 20px 40px;
  }
}
</style>
