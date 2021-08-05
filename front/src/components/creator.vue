<template>
  <div class="creator">
    <div class="creator__title">
      <h3>Основатель фонда</h3>
    </div>
    <div class="creator__button">
      <CusButton :up="true" />
    </div>
    <div class="creator__body">
      <div class="creator__img">
        <img src="../assets/img/creator/item.png" alt="" />
      </div>
      <div class="creator__text">
        <div class="creator__textTitle">
          <h3>Мустафа Темиргазиев</h3>
        </div>
        <div class="creator__textItem">
          <div class="creator__textNumber">1</div>
          <div class="creator__textDescription">
            <p>
              Практикующий инвестор <br />
              и предприниматель
            </p>
          </div>
        </div>
        <div class="creator__textItem">
          <div class="creator__textNumber">2</div>
          <div class="creator__textDescription">
            <p>
              Финансовый консультант, <br />
              500+ довольных клиентов
            </p>
          </div>
        </div>
        <div class="creator__textItem">
          <div class="creator__textNumber">3</div>
          <div class="creator__textDescription">
            <p>
              Справился с долгом <br />
              7,5 млн рублей
            </p>
          </div>
        </div>
        <div class="creator__textItem">
          <div class="creator__textNumber">4</div>
          <div class="creator__textDescription">
            <p>
              Высшее образование в сфере финансов и <br />
              инвестиций - Академия частного инвестора <br />
              и Институт Финансов и управления
            </p>
          </div>
        </div>
        <div class="creator__textItem">
          <div class="creator__textNumber">5</div>
          <div class="creator__textDescription">
            <p>
              Владелец статуса <br />
              “Квалифицированный инвестор”
            </p>
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
  name: "creator",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.creator {
  margin-bottom: 250px;
}
.creator__title {
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-bottom: 80px;
  text-align: center;

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
      transform: rotate(-4.95deg);
    }
    &::after {
      position: absolute;
      content: "";
      top: -15px;
      left: -25px;
      width: 110%;
      height: 165%;
      border: 2px solid rgba(235, 23, 23, 0.7);
      border-radius: 50%;
      transform: rotate(-4.95deg);
    }
  }
}

.creator__button {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
}

.creator__body {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}
.creator__img {
  width: 450px;
  height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 90%;
    max-height: 90%;
    width: auto;
  }
}
.creator__text {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.creator__textTitle {
  // font-family: Padauk;
  font-style: normal;
  font-weight: normal;
  font-size: 44px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-bottom: 30px;
  h3 {
    display: inline;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 230px;
      height: 2px;
      right: -30px;
      bottom: 0;
      background: #eb1717;
    }
  }
}
.creator__textItem {
  display: flex;
  align-items: center;
}
.creator__textNumber {
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
.creator__textDescription {
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 87.8%;
  letter-spacing: -0.015em;
  color: #000000;
  p {
    margin-bottom: 0px;
  }
}

@media (max-width: 900px) {
  .creator {
    margin-bottom: 100px;
  }
  .creator__title {
    font-size: 30px;
    margin-bottom: 70px;
    h3 {
      &::before {
        top: -20%;
        left: -25px;
        width: 120%;
        height: 150%;
      }
    }
  }
  .creator__button {
    margin-bottom: 30px;
  }
  .creator__body {
    flex-direction: column;
    align-items: center;
  }
  .creator__img {
    margin-top: 20px;
    margin-bottom: 20px;
    width: auto;
    height: auto;
    img {
      max-width: 80%;
    }
  }
  .creator__text {
    align-items: center;
  }
  .creator__textTitle {
    margin-bottom: 40px;
    font-size: 26px;
  }
  .creator__textItem {
    align-self: flex-start;
    margin-bottom: 20px;
    font-size: 22px;
  }
  .creator__textNumber {
  }
  .creator__textDescription {
  }
}
</style>
