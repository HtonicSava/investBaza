<template>
  <div class="calculator">
    <div class="calculator__title">
      <h3>Калькулятор</h3>
    </div>
    <div class="calculator__body">
      <div class="calculator__rangeTitle">
        <h2>Инвестирование</h2>
      </div>
      <div class="calculator__row">
        <div class="calculator__hint">
          <p>Введите сумму</p>
        </div>
        <div class="calculator__input">
          <input v-model="investValue" type="number" name="" id="" />
        </div>
        <div class="calculator__range">
          <v-slider
            v-model="investValue"
            track-color="#E2E2E2"
            track-fill-color="#E84C4C"
            thumb-color="#E84C4C"
            :max="100000000"
          ></v-slider>
        </div>
      </div>
      <div class="calculator__rangeTitle">
        <h2>Реинвестирование</h2>
      </div>
      <div class="calculator__row">
        <div class="calculator__hint">
          <p>Введите сумму</p>
        </div>
        <div class="calculator__input">
          <input v-model="reinvestValue" type="number" name="" id="" />
        </div>
        <div class="calculator__range">
          <v-slider
            v-model="reinvestValue"
            track-color="#E2E2E2"
            track-fill-color="#E84C4C"
            thumb-color="#E84C4C"
            :max="100000000"
          ></v-slider>
        </div>
      </div>
      <div class="calculator__resultTitle">
        <h2>Ваш ежемясечный доход</h2>
      </div>
      <div class="calculator__result">
        <div class="calculator__resultMessage">
          <p>В среднем прибыль в месяц составляет 5-7%</p>
        </div>
        <div class="calculator__resultOutput">
          <p>{{ finalValue }}руб</p>
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
      investValue: 0,
      reinvestValue: 0,
    };
  },
  computed: {
    finalValue: function () {
      return Math.floor(
        (Number(this.investValue) + Number(this.reinvestValue)) * 0.06
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.calculator {
}
.calculator__title {
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

.calculator__body {
  padding-right: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    margin-bottom: 0px;
  }
}
.calculator__row {
  display: flex;
  align-items: center;
  margin-bottom: 35px;
}
.calculator__hint {
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 87.8%;
  letter-spacing: -0.015em;
  color: #000000;
  margin-right: 25px;
}
.calculator__input {
  margin-right: 50px;
  input {
    font-size: 20px;
    padding: 20px;
    width: 152px;
    height: 68px;
    box-shadow: inset 0px 5px 5px rgba(142, 142, 142, 0.25);
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
}
.calculator__range {
  width: 350px;
  position: relative;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 87.8%;
  letter-spacing: -0.015em;
  color: rgba(0, 0, 0, 0.7);
  &::before {
    content: "10000";
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &::after {
    content: "100 млн";
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
.calculator__rangeTitle {
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 87.8%;
  /* or 32px */
  letter-spacing: -0.015em;
  color: #000000;
  margin-bottom: 30px;
  h2 {
    position: relative;
    &::after {
      position: absolute;
      bottom: -12px;
      left: 0px;
      content: "";
      width: 100%;
      height: 1px;
      background-color: #eb1717;
    }
  }
}
.calculator__result {
  display: flex;
}
.calculator__resultTitle {
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 87.8%;
  /* or 32px */
  letter-spacing: -0.015em;
  color: #000000;
  margin-bottom: 30px;
  h2 {
    position: relative;
    &::after {
      position: absolute;
      bottom: -12px;
      left: 0px;
      content: "";
      width: 100%;
      height: 1px;
      background-color: #eb1717;
    }
  }
}
.calculator__resultMessage {
  padding-right: 70px;
  padding-top: 20px;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 87.8%;
  letter-spacing: -0.015em;
  color: #000000;
  width: 300px;
  position: relative;
  z-index: 2;
  &::before {
    content: "";
    width: 86px;
    height: 65px;
    position: absolute;
    border-radius: 50%;
    background-color: rgba(235, 23, 23, 0.76);
    transform: translate(-60%, -20%);
    left: 0px;
    z-index: -1;
  }
}
.calculator__resultOutput {
  width: 400px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0px 5px 5px rgba(142, 142, 142, 0.25);
  font-size: 20px;
}
</style>
