<template>
  <div class="expressions">
    <div class="expressions__content">
      <div class="expressions__title">
        <h4>Условия для инвестирования</h4>
      </div>
      <div class="expressions__items">
        <div class="expressions__item item">
          <div class="item__img">
            <img
              src="@/assets/img/landing/expressionsInvest/money.png"
              alt=""
            />
          </div>
          <div class="item__title">
            <h4>Вход от 10 000 ₽</h4>
          </div>
        </div>
        <div class="expressions__item item">
          <div class="item__img">
            <img
              src="@/assets/img/landing/expressionsInvest/shield.png"
              alt=""
            />
          </div>
          <div class="item__title">
            <h4>от 300 000 ₽ депозит страхуется</h4>
          </div>
        </div>
        <div class="expressions__item item">
          <div class="item__img">
            <img
              src="@/assets/img/landing/expressionsInvest/message.png"
              alt=""
            />
          </div>
          <div class="item__title">
            <h4>Минимальная сумма увеличения — 10 000 ₽</h4>
          </div>
        </div>
      </div>
      <div class="expressins__button">
        <IbButton @callback="$router.push('personal_beta')">
          <p>Инвестировать</p>
        </IbButton>
      </div>
    </div>
  </div>
</template>

<script>
import IbButton from "../ibButton.vue";

export default {
  components: {
    IbButton,
  },
  name: "expressions",
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.expressions {
  p {
    margin-bottom: 0px;
  }
  padding-bottom: 40px;
}

.expressions__content {
  max-width: 1150px;
  margin: auto;
}

.expressions__title {
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  font-size: 33.5287px;
  margin-bottom: 49px;
}

.expressions__items {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.expressions__item {
}
.item {
  flex-basis: 235px;
  margin: 20px;
}
.item__img {
  height: 88px;
  display: flex;
  align-items: flex-end;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    background: #f3c68e;
    opacity: 0.5;
    filter: blur(69.6347px);
    transform: rotate(22.45deg);
    width: 70.79px;
    height: 103.68px;
    left: 35%;
  }
  img {
    display: block;
    margin: auto;
  }
  // height: 164px;
}
.item__title {
  font-family: "Museo Sans Cyrl 500";
  font-size: 20px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #ffffff;
}
.expressins__button {
  margin: auto;
  max-width: 290px;
}

@media (max-width: 950px) {
  .expressions__title {
    font-size: 28px;
  }
}
</style>
