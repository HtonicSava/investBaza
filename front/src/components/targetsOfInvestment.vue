<template>
  <div class="investment">
    <div class="investment__title">
      <h3>Куда инвестирует фонд</h3>
    </div>
    <div class="investment__body">
      <div class="investment__item">
        <Carousel :photos="photosGarden">
          <div class="item">
            <h1 class="item__title">Частный детский садик</h1>
            <p class="item__p">Инвестиции в садик - 600 т.р</p>
            <p class="item__p">Чистая прибыль - 100 т.р</p>
            <p class="item__p">
              Большой спрос на детские сады в Крыму <br />
              Нет достойных конкурентов <br />
              Быстрая окупаемость <br />
              Бизнесс по подписке-9 месяцев прогнозируемого дохода
            </p>
          </div>
        </Carousel>
      </div>
      <div class="investment__button">
        <CusButton :up="true" />
      </div>
      <div class="investment__item">
        <Carousel :rightimg="true" :photos="photosCofe">
          <div class="item">
            <h1 class="item__title">Кофейня самообслуживания</h1>
            <p class="item__p">
              Инвестиции в 1 аппарат - 350 т.р <br />
              Чистая прибыль - 40 т.р
            </p>
            <p class="item__p">
              Таких аппаратов в Крыму еще нет <br />
              Нет расходов на сотрудников <br />
              Недорогая аренда <br />
              Вкусный зерновой кофе
            </p>
          </div>
        </Carousel>
      </div>
      <div class="investment__item">
        <Carousel :photos="photosCars">
          <div class="item">
            <h1 class="item__title">Доходные автомобили</h1>
            <p class="item__p">
              Инвестиции в 1 авто - 400 т.р <br />
              Чистая прибыль - 30 т.р
            </p>
            <p class="item__p">
              Из-за санкций в Крыму нет Яндекс такси <br />
              Низкая стоимость авто <br />
              Быстрая окупаемость <br />
              Управляющая компания страхует угон
            </p>
          </div>
        </Carousel>
      </div>
      <div class="investment__item">
        <Carousel :rightimg="true" :photos="photosProperty">
          <div class="item">
            <h1 class="item__title">Недвижимость</h1>
            <p class="item__p">
              Инвестиции в 1 дом - 4 700 млн. р <br />
              Доход от аренды - 30 т.р
            </p>
            <p class="item__p">
              Растет в цене <br />
              Низкий риск <br />
              Налоговые льготы <br />
              Нет сложностей со сдачей в аренду
            </p>
          </div>
        </Carousel>
      </div>
      <div class="investment__item">
        <Carousel :topimg="true" :photos="photosInvestclub">
          <div class="item">
            <h1 class="item__title">OG INVEST CLUB</h1>
            <p class="item__p">Восемь лет стабильной работы <br /></p>
            <p class="item__p">83% доходность за 2020 год <br /></p>
            <p class="item__p">Своя академия трейдеров <br /></p>
            <p class="item__p">Офис в Крыму</p>
          </div>
        </Carousel>
      </div>
      <div class="investment__item">
        <Carousel :rightimg="true" :photos="photosMarket">
          <div class="item">
            <h1 class="item__title">Фондовый рынок</h1>
            <p class="item__p">Портфель собран на Interactive Brokers</p>
            <p class="item__p">
              Опционная стратегия на базе ETF <br />
              фондов с доходность 20-30% в год
            </p>
            <p class="item__p">Индекс широкого рынка</p>
            <p class="item__p">
              Спекуляция на акциях с <br />
              доходностью 50-80% годовых
            </p>
          </div>
        </Carousel>
      </div>
      <div class="investment__item">
        <Carousel :photos="photosIPO">
          <div class="item">
            <h1 class="item__title">IPO</h1>
            <div class="item__ipo">
              <h1 class="item__title">IPO&nbsp;-&nbsp;</h1>
              <p class="item__p">
                Первичное размещение акций, процесс продажи компанией акций на
                фондовом рынке, в результате которого компания становится
                публичной, а бумаги доступными широкому кругу инвесторов
              </p>
            </div>
            <div class="item__ipo">
              <h1 class="item__title">132%&nbsp;-&nbsp;</h1>
              <p class="item__p">Доходность за 2020 год</p>
            </div>
          </div>
        </Carousel>
      </div>
      <div class="investment__button">
        <CusButton :up="true" />
      </div>
      <div class="investment__item">
        <Carousel :topimg="true" :photos="photosDonate">
          <div class="item">
            <h1 class="item__title">Благотворительность</h1>
            <p class="item__p">
              Благотворительный фонд Константина Хабенского с апреля 2008 года
              делает всё возможное, чтобы дети с онкологическими и другими
              тяжелыми заболеваниями головного и спинного мозга вовремя получали
              всю необходимую медицинскую помощь и скорее возвращалист к
              полноценной жизни.
            </p>
            <p class="item__p">
              Фонд оплачивает диагностику и лечение детей, организует
              реабилитационные программы.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "./button.vue";
import Carousel from "./carousel.vue";

export default {
  components: {
    CusButton,
    Carousel,
  },
  name: "targetsOfInvestment",
  data: function () {
    return {
      photosGarden: ["garden1.png", "garden2.png", "garden3.png"],
      photosCofe: ["cofe1.png", "cofe2.png", "cofe3.png"],
      photosCars: ["cars1.png", "cars1.png", "cars1.png"],
      photosProperty: ["property1.png", "property2.png", "property3.png"],
      photosInvestclub: [
        "investclub1.png",
        "investclub2.png",
        "investclub3.png",
      ],
      photosMarket: ["market1.png", "market2.png", "market3.png"],
      photosIPO: ["ipo1.png", "ipo2.png", "ipo3.png"],
      photosDonate: ["donate1.png", "donate2.png", "donate3.png"],
    };
  },
};
</script>

<style lang="scss" scoped>
.investment {
  position: relative;
  padding-top: 170px;
  margin-bottom: 170px;
}
.investment__title {
  // font-family: "Padauk";
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-bottom: 150px;
  margin-right: 100px;
  text-align: right;
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
      transform: rotate(4.95deg);
    }
  }
}

.investment__item {
  padding-top: 70px;
  padding-bottom: 70px;
}

.investment__button {
  display: flex;
  justify-content: flex-end;
  // margin-bottom: 100px;
  margin-right: 50px;
}

.item {
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
}

.item__title {
  margin-bottom: 50px;
}

.item__p {
  color: rgba(0, 0, 0, 0.8);
  font-size: 28px;
  margin-bottom: 50px;
  line-height: 100%;
  &:last-child {
    margin-bottom: 0px;
  }
}

.item__ipo {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0px;
  }
}
</style>
