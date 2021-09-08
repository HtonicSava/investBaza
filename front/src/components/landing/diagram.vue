<template>
  <div class="diagram">
    <div class="diagram__content">
      <img src="@/assets/img/landing/diagram/item.png" alt="" />
    </div>
    <div class="diagram__content-mobile">
      <div class="list">
        <div class="item">
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
            <div class="item__gold">
              <p>Вход от 10 т.р</p>
            </div>
            <div class="item__white">
              <p></p>
            </div>
          </div>
        </div>
        <div class="item">
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
            <div class="item__gold">
              <p>В среднем 5-7% в месяц</p>
            </div>
            <div class="item__white">
              <p></p>
            </div>
          </div>
        </div>
        <div class="item">
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
            <div class="item__gold">
              <p>Пополнение без комиссии</p>
            </div>
            <div class="item__white">
              <p>Банковский переводом</p>
              <p>Криптовалютой</p>
            </div>
          </div>
        </div>
        <div class="item">
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
            <div class="item__gold">
              <p>Вывод без комиссии</p>
            </div>
            <div class="item__white">
              <p>Банковский переводом</p>
              <p>Криптовалютой</p>
            </div>
          </div>
        </div>
        <div class="item">
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
            <div class="item__gold">
              <p>С каждым инвестором заключается договор</p>
            </div>
            <div class="item__white">
              <p></p>
            </div>
          </div>
        </div>
        <div class="item">
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
            <div class="item__gold">
              <p>Бессрочные дивиденды с передачей по наследству</p>
            </div>
            <div class="item__white">
              <p></p>
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
  name: "diagram",
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.diagram {
  p {
    margin-bottom: 0px;
  }
  padding-top: 40px;
  padding-bottom: 80px;
}

.diagram__content {
  max-width: 1157px;
  margin: auto;
  img {
    max-width: 100%;
    width: auto;
  }
}

.diagram__content-mobile {
  max-width: 620px;
  margin: auto;
  display: none;
  padding: 0px 10px;
}

@media (max-width: 980px) {
  .diagram__content {
    display: none;
  }
  .diagram__content-mobile {
    display: block;
  }
  .list {
  }
  .item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 90px;
  }
  .item__point {
    margin-right: 12px;
    position: relative;
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      transform: translate(90%, 100%);
      border-radius: 50%;
      z-index: 10;
      width: 15px;
      height: 15px;
      filter: blur(10px);
      background-color: rgba(255, 216, 132, 0.719);
    }
    svg {
      transform: translate(0%, 10%);
    }
  }

  .item__text {
  }

  .item__gold {
    font-family: "Museo Sans Cyrl 500";
    font-size: 35.0714px;
    line-height: 135.8%;
    letter-spacing: -0.015em;
    color: #f3c68e;
    text-shadow: 0px 0px 24.55px rgba(243, 198, 142, 0.6);
  }
  .item__white {
    font-family: "Museo Sans Cyrl 500";
    font-size: 28.0571px;
    // line-height: 87.8%;
    letter-spacing: -0.015em;
    color: #f6f6f6;
  }
}
</style>
