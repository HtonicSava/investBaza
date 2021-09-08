<template>
  <div class="creator">
    <div class="creator__content">
      <div class="creator__body">
        <div class="creator__img">
          <img src="@/assets/img/landing/creator/item.png" alt="" />
        </div>
        <div class="creator__card card">
          <div class="card__title">
            <h4>Основатель фонда</h4>
          </div>
          <div class="card__subtitle">
            <h4>Мустафа Темиргазиев</h4>
          </div>
          <div class="card__item item">
            <div class="item__point">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="6" fill="#F3C68E" />
              </svg>
            </div>
            <div class="item__text">
              <p>Практикующий инвестор и предприниматель</p>
            </div>
          </div>
          <div class="card__item item">
            <div class="item__point">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="6" fill="#F3C68E" />
              </svg>
            </div>
            <div class="item__text">
              <p>Финансовый консультант, 500+ довольных клиентов</p>
            </div>
          </div>
          <div class="card__item item">
            <div class="item__point">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="6" fill="#F3C68E" />
              </svg>
            </div>
            <div class="item__text">
              <p>
                Высшее образование в сфере финансов и инвестиций - Академия
                частного инвестора и Институт Финансов и управления
              </p>
            </div>
          </div>
          <div class="card__item item">
            <div class="item__point">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="6" fill="#F3C68E" />
              </svg>
            </div>
            <div class="item__text">
              <p>Владелец статуса «Квалифицированный инвестор»</p>
            </div>
          </div>
          <div class="card__item item">
            <div class="item__point">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="6" fill="#F3C68E" />
              </svg>
            </div>
            <div class="item__text">
              <p>Справился с долгом 7,5 млн рублей</p>
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
  name: "creator",
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.creator {
  p {
    margin-bottom: 0px;
  }
  padding-top: 80px;
  padding-bottom: 80px;
}

.creator__content {
  max-width: 1157px;
  margin: auto;
  position: relative;
  &::before {
    z-index: 1;
    top: -50px;
    left: -10px;
    content: "";
    position: absolute;
    width: 300.51px;
    height: 700.14px;
    background: #f3c68e;
    opacity: 0.6;
    filter: blur(300px);
    transform: rotate(-26.72deg);
  }
}

.creator__body {
  display: flex;
  height: 620px;
  background-image: url("../../assets/img/landing/creator/back.png");
  background-position: center top;
  background-repeat: no-repeat;
  // padding-left: 96px;
  // align-items: flex-end;
  justify-content: space-evenly;
  position: relative;
  z-index: 2;
}
.creator__img {
  align-self: flex-end;
}
.creator__card {
  max-width: 400px;
  align-self: center;
}
.card {
}
.card__title {
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 33.5287px;
  color: #ffffff;
  margin-bottom: 40px;
}
.card__subtitle {
  font-family: Georgia;
  font-style: italic;
  font-weight: normal;
  font-size: 24.408px;
  letter-spacing: -0.015em;
  color: #f3c68e;
  margin-bottom: 28px;
}
.card__item {
  margin-bottom: 25px;
  transform: translateX(-20px);
}
.item {
  display: flex;
  justify-content: flex-start;
}
.item__point {
  margin-right: 12px;
  position: relative;
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    transform: translate(90%, 20%);
    border-radius: 50%;
    z-index: 10;
    width: 15px;
    height: 15px;
    filter: blur(10px);
    background-color: rgba(255, 216, 132, 0.719);
  }
  svg {
    transform: translate(0%, -20%);
  }
}
.item__text {
  font-family: "Museo Sans Cyrl 500";
  font-size: 15px;
  line-height: 188.8%;
  letter-spacing: -0.015em;
  color: #ffffff;
  opacity: 0.7;
}

@media (max-width: 800px) {
  .creator {
    padding-top: 40px;
  }
  .creator__body {
    flex-direction: column-reverse;
    height: unset;
    align-items: center;
    margin: 0px 10px;
    background-size: cover;
    padding: 40px 20px 0px;
  }
  .creator__img {
    align-self: unset;
  }
  .card__title {
    font-size: 28px;
  }
}
</style>
