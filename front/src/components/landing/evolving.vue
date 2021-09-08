<template>
  <div class="evolving">
    <div class="evolving__title">
      <h3>План по развитию фонда</h3>
    </div>
    <div class="evolving__body">
      <div class="evolving__item item">
        <div class="item__top">
          <p>1</p>
        </div>
        <div class="item__title">
          <p>Апрель 2021 Начало</p>
        </div>
        <div class="item__text">
          <p>Сбор 1-го пула и составление портфеля</p>
        </div>
      </div>
      <div class="evolving__item item">
        <div class="item__top">
          <p>2</p>
        </div>
        <div class="item__title">
          <p>Май 2021</p>
        </div>
        <div class="item__text">
          <p>Первая выплата дивидендов, первый отчет и корректировка фондов</p>
        </div>
      </div>
      <div class="evolving__item item">
        <div class="item__top">
          <p>3</p>
        </div>
        <div class="item__title">
          <p>Август 2021</p>
        </div>
        <div class="item__text">
          <p>
            Работа над созданием онлайн личного кабинета каждого инвестора с
            максимальной защитой средств и простым выводом
          </p>
        </div>
        <div class="item__text">
          <p>
            Создание маркетинговой воронки и выстраивание потока новых
            инвесторов
          </p>
        </div>
      </div>
      <div class="evolving__item item">
        <div class="item__top">
          <p>4</p>
        </div>
        <div class="item__title">
          <p>Декабрь 2021</p>
        </div>
        <div class="item__text">
          <p>Подведение итогов 2021 года</p>
        </div>
        <div class="item__text">
          <p>Отправка подарков с логотипами фонда</p>
        </div>
      </div>
      <div class="evolving__item item">
        <div class="item__top">
          <p>5</p>
        </div>
        <div class="item__title">
          <p>Февраль 2022</p>
        </div>
        <div class="item__text">
          <p>Расширение портфеля фонда и масштабирование бизнесов.</p>
        </div>
        <div class="item__text">
          <p>
            Открытие офиса (создание отделов продаж, технические поддержки,
            маркетинка, финансов)
          </p>
        </div>
      </div>
      <div class="evolving__item item">
        <div class="item__top">
          <p>6</p>
        </div>
        <div class="item__title">
          <p>Апрель 2022</p>
        </div>
        <div class="item__text">
          <p>Закладывание фундамента -покупка коммерческой недвижимости</p>
        </div>
        <div class="item__text">
          <p>
            Открытие офиса (создание отделов - продаж, технические поддержки,
            маркетинка, финансов)
          </p>
        </div>
      </div>
      <div class="evolving__item item">
        <div class="item__top">
          <p>7</p>
        </div>
        <div class="item__title">
          <p>Октябрь 2022</p>
        </div>
        <div class="item__text">
          <p>
            Переход на новый уровень - начало выкупа крупных объектов
            недвижимости в Крыму, расширение портфеля, масштабирование бизнесов,
            вхождение в долю прибыльных бизнесов
          </p>
        </div>
      </div>
      <div class="evolving__item item">
        <div class="item__top">
          <p>8</p>
        </div>
        <div class="item__title">
          <p>Декабрь 2022</p>
        </div>
        <div class="item__text">
          <p>
            Подведение итогов года. Цель - 1000 инвесторов к 2023. Фонд
            полностью готов к масштабированию и покупке крупных компаний.
            Создание экосистемы
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "evolving",
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.evolving {
  p {
    margin-bottom: 0px;
  }
  padding-top: 60px;
  padding-bottom: 60px;
}

.evolving__title {
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 39.2428px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 80px;
}

.evolving__body {
  max-width: 1157px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 40px;
  row-gap: 100px;
}

.evolving__item {
}
.item {
  padding: 22px 43px 30px;
  background: linear-gradient(rgb(25, 25, 47) 0%, rgb(16, 16, 32) 100%);
  // mix-blend-mode: overlay;
  // opacity: 0.2;
}
.item__top {
  font-family: Georgia;
  font-style: italic;
  font-weight: bold;
  font-size: 63.6775px;
  text-shadow: 0px 3.05708px 0px #c9a72f, 0px 2.45648px 0px #c9a72f,
    0px 1.85587px 0px #c9a72f, 0px 1.25527px 0px #c9a72f,
    0px 0.65466px 0px #c9a72f, 0px 19.8598px 27.9402px rgba(255, 211, 52, 0.34);
  margin-bottom: 20px;
  color: rgba(255, 224, 114, 1);
}
.item__title {
  font-family: "Museo Sans Cyrl 500";
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 13px;
}
.item__text {
  font-family: "Museo Sans Cyrl 500";
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 26px;
}

@media (max-width: 950px) {
  .evolving__title {
    font-size: 28px;
  }
}
</style>
