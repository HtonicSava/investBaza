<template>
  <div class="detailed">
    <div class="detailed__title">
      <h3>Подробнее</h3>
    </div>
    <div class="detailed__body">
      <CusButton :noLine="true" class="detailed__button" :up="true" />
      <div class="detailed__card">
        <div class="detailed__item">
          <div class="detailed__number">1</div>
          <div class="detailed__itemText">
            <p>Вход от десяти тысяч рублей</p>
          </div>
        </div>
        <div class="detailed__item">
          <div class="detailed__number">2</div>
          <div class="detailed__itemText">
            <p>В среднем 5 - 7% в месяц</p>
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
          <CusButton
            @cus-click="redirectToReg"
            :noLine="true"
            :text="'ИНВЕСТИРОВАТЬ'"
            :color="'red'"
          />
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
  methods: {
    redirectToReg() {
      this.$router.push("Registry");
    },
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

@media (max-width: 900px) {
  .detailed {
    margin-bottom: 50px;
  }
  .detailed__title {
    font-size: 30px;
    margin-bottom: 50px;
    margin-left: 0px;
    h3 {
      &::before {
        top: -20%;
        left: -25px;
        width: 130%;
        height: 150%;
      }
    }
  }
  .detailed__body {
    flex-direction: column;
    align-items: center;
  }
  .detailed__card {
    height: auto;
    min-width: 280px;
    width: 80%;
    padding: 60px 20px;
  }

  .detailed__button {
    align-self: flex-end;
    margin-bottom: 50px;
  }

  .detailed__item {
    margin-bottom: 10px;
  }
  .detailed__number {
    margin-right: 10px;
  }
  .detailed__itemText {
    font-size: 18px;
  }
  .detailed__itemSubText {
    font-size: 12px;
  }
  .detailed__cardButton {
  }
}
</style>
