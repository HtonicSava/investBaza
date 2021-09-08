<template>
  <div class="target">
    <div class="target__content">
      <div class="target__title">
        <h4>Куда инвестирует фонд</h4>
      </div>
      <div class="target__body">
        <div class="target__items">
          <div class="target__row">
            <div class="target__item item">
              <div class="item__number">
                <p>30%</p>
              </div>
              <div class="item__text">
                <div class="item__title">
                  <p>Реальный бизнес</p>
                </div>
                <div class="item__description">
                  <p>Маржинальные бизнесы и доходные автомобили</p>
                </div>
              </div>
            </div>
            <div class="target__item item">
              <div class="item__number">
                <p>35%</p>
              </div>
              <div class="item__text">
                <div class="item__title">
                  <p>Недвижимость</p>
                </div>
                <div class="item__description">
                  <p>Жилая и коммерческая</p>
                </div>
              </div>
            </div>
          </div>
          <div class="target__row">
            <div class="target__item item">
              <div class="item__number">
                <p>5%</p>
              </div>
              <div class="item__text">
                <div class="item__title">
                  <p>Благотворительность</p>
                </div>
              </div>
            </div>
            <div class="target__item item">
              <div class="item__number">
                <p>20%</p>
              </div>
              <div class="item__text">
                <div class="item__title">
                  <p>Фондовый рынок</p>
                </div>
                <div class="item__description">
                  IPO, акции, облигации, ETF фонды и индексы
                </div>
              </div>
            </div>
            <div class="target__item item">
              <div class="item__number">
                <p>30%</p>
              </div>
              <div class="item__text">
                <div class="item__title">
                  <p>Криптовалюта</p>
                </div>
                <div class="item__description">
                  <p>Криптовалютные фонды и трейдинг</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "target",
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.target {
  p {
    margin-bottom: 0px;
  }
}

.target__content {
  max-width: 1150px;
  margin: auto;
}

.target__title {
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  font-size: 33.5287px;
}

.target__body {
  // height: 70vh;
  background-image: url("../../assets/img/landing/whereInvest/back.png");
  background-position: center top;
  background-repeat: no-repeat;
  position: relative;
  &::after {
    // margin: auto;
    left: 30%;
    position: absolute;
    z-index: 1;
    top: 0px;
    content: "";
    width: 300.51px;
    height: 450px;
    background: #f3c68e;
    opacity: 0.6;
    filter: blur(250px);
    transform: rotate(-26.72deg);
  }
}

.target__items {
  // height: 500px;
  padding-bottom: 100px;
}

.target__row {
  display: flex;
  &:nth-child(1) {
    padding-top: 100px;
    justify-content: space-evenly;
    .item {
      // flex-basis: 100%;
      display: flex;
      align-items: center;
      &:nth-child(1) {
        .item__text {
          order: 1;
          text-align: right;
        }
        .item__number {
          order: 2;
          margin-left: 20px;
        }
      }
      &:nth-child(2) {
        .item__number {
          margin-right: 20px;
        }
      }
    }
  }
  &:nth-child(2) {
    margin-top: 230px;
    justify-content: space-around;
    .item {
      display: flex;
      align-items: center;
      position: relative;
      &:nth-child(1) {
        top: -80px;
        .item__text {
          order: 1;
          position: relative;
          top: 58px;
          right: -10px;
        }
        .item__number {
          order: 2;
        }
      }
      &:nth-child(2) {
        flex-direction: column;
        .item__text {
          text-align: center;
        }
        .item__number {
          margin-bottom: 15px;
        }
      }

      &:nth-child(3) {
        top: -70px;
        .item__text {
          position: relative;
          top: 25px;
        }
        .item__number {
          margin-right: 15px;
        }
      }
    }
  }
}
.target__item {
}
.item {
}
.item__number {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  font-family: Georgia;
  font-style: italic;
  font-weight: normal;
  font-size: 24.408px;
  letter-spacing: -0.015em;
  color: #f3c68e;
  background: linear-gradient(
    180deg,
    rgb(86, 86, 139) 0%,
    rgb(17, 17, 32) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
}
.item__text {
  font-family: "Museo Sans Cyrl 500";
  letter-spacing: -0.015em;
  color: #ffffff;
  opacity: 0.8;
  width: 188px;
  // width: 100%;
}
.item__title {
  font-size: 18px;
  margin-bottom: 5px;
}
.item__description {
  font-size: 12px;
}

@media (max-width: 950px) {
  .target__title {
    font-size: 28px;
  }
  .target__row {
    flex-direction: column;
    align-items: center;
    &:nth-child(1) {
      padding-top: 450px;
      // justify-content: space-evenly;
      .item {
        flex-direction: column;
        // flex-basis: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 80px;
        &:nth-child(1) {
          .item__text {
            order: 1;
            text-align: center;
          }
          .item__number {
            order: 1;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 15px;
          }
        }
        &:nth-child(2) {
          .item__number {
            margin-right: 0px;
            margin-bottom: 15px;
          }
          .item__text {
            text-align: center;
          }
        }
      }
    }
    &:nth-child(2) {
      margin-top: 0px;
      flex-direction: column;
      align-items: center;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: static;
        margin-bottom: 80px;
        &:nth-child(1) {
          top: 0px;
          .item__text {
            order: 2;
            position: static;
            top: 0px;
            right: 0px;
          }
          .item__number {
            order: 1;
            margin-bottom: 15px;
          }
        }
        &:nth-child(2) {
          flex-direction: column;
          .item__text {
            text-align: center;
          }
          .item__number {
            margin-bottom: 15px;
          }
        }

        &:nth-child(3) {
          top: 0px;
          .item__text {
            position: relative;
            top: 0px;
            text-align: center;
          }
          .item__number {
            margin-right: 0px;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
  .target__items {
    padding-bottom: 40px;
  }
}
</style>
