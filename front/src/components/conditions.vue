<template>
  <div class="conditions">
    <div class="conditions__title">
      <h3>Условия для инвестирования</h3>
    </div>
    <div class="conditions__items">
      <div class="conditions__item">
        <p>Вход от 10 000 рублей</p>
      </div>
      <div class="conditions__item">
        <p>от 300 000 рублей депозит <span>страхуется</span></p>
      </div>
      <div class="conditions__item">
        <p>Минимальная сумма увеличения 10 000 рублей</p>
      </div>
    </div>
    <div class="conditions__button">
      <CusButton
        @cus-click="redirectToReg"
        :noLine="true"
        :color="'red'"
        :text="'ИНВЕСТИРОВАТЬ'"
      />
    </div>
  </div>
</template>

<script>
import CusButton from "./button.vue";

export default {
  components: {
    CusButton,
  },
  name: "conditions",
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
.conditions {
  margin-bottom: 250px;
}
.conditions__title {
  // font-family: "Padauk";
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-bottom: 170px;
  text-align: center;
  h3 {
    width: auto;
    display: inline;
    position: relative;
  }
}

.conditions__items {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 30px;
  flex-wrap: wrap;
}
.conditions__item {
  margin: 25px;
  flex-basis: 320px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(219, 219, 219, 0.22);
  border: 3px solid #515151;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 101.3%;
  letter-spacing: -0.015em;
  color: #000000;
  padding: 0px 60px;
  p {
    margin-bottom: 0px;
  }
  &:nth-child(1) {
    color: rgba(0, 0, 0, 0.7);
  }
  &:nth-child(2) {
    span {
      color: #eb1717;
    }
  }
  &:nth-child(3) {
    padding: 0px 40px;
  }
}
.conditions__button {
  display: flex;
  justify-content: center;
}

@media (max-width: 900px) {
  .conditions {
    margin-bottom: 100px;
  }
  .conditions__title {
    font-size: 25px;
    margin-bottom: 70px;
    margin-right: 20px;
    h3 {
      &::before {
        top: -20%;
        left: -25px;
        width: 120%;
        height: 150%;
      }
    }
  }
  .conditions__items {
  }
  .conditions__item {
    font-size: 16px;
    flex-basis: 280px;
    &:nth-child(1) {
      padding: 0px 80px;
    }
  }
  .conditions__button {
  }
}
</style>
