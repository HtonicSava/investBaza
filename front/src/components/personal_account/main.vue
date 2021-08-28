<template>
  <div class="main">
    <div class="main__content">
      <div class="main__lilbox">
        <div class="main__lilitem">
          <p>Личный депозит</p>
        </div>
        <div class="main__lilitem">
          <p>Баланс</p>
        </div>
        <div class="main__lilitem">
          <p>Общий доход</p>
        </div>
        <div class="main__lilitem">
          <p>Количество партнёров</p>
        </div>
        <div class="main__lilitem">
          <p>Общий оборот</p>
        </div>
        <div class="main__lilitem">
          <p>Оборот первой линии</p>
        </div>
      </div>
      <!-- <div class="main__bigbox">
        <div class="main__bigitem">Календарь регистраций</div>
        <div class="main__bigitem">Календарь начислений</div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "main",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: #f6f6f6;
  border-top: 1px solid #515151;
  border-bottom: 1px solid #515151;
  padding: 70px 20px;
}

.main__content {
  max-width: 650px;
  margin: auto;
}

.main__lilbox {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 115px);
  column-gap: 48px;
  row-gap: 17px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.04em;
  color: #000000;
  text-align: center;
  p {
    margin-bottom: 0px;
  }
}

.main__lilitem {
  padding-top: 14px;
  background: #ffffff;
  border: 1px solid #515151;
}

.main__bigbox {
  padding-top: 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 274px;
  column-gap: 28px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 76.69%;
  text-align: center;
  letter-spacing: -0.04em;

  color: #000000;
}

.main__bigitem {
  padding-top: 29px;
  background: #ffffff;
  border: 1px solid #515151;
  p {
    margin-bottom: 0px;
  }
}

@media (max-width: 1024px) {
  .main {
    border: 1px solid #515151;
  }
}

@media (max-width: 600px) {
  .main__lilbox {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 70px);
    column-gap: 15px;
    row-gap: 15px;

    font-weight: 700;
    font-size: 12px;
  }

  .main__lilitem {
    padding: 0px 5px;
    padding-top: 7px;
    background: #ffffff;
    border: 1px solid #515151;
  }

  .main__bigbox {
    padding-top: 17px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 180px;
    column-gap: 28px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 76.69%;
    text-align: center;
    letter-spacing: -0.04em;

    color: #000000;
  }

  .main__bigitem {
    padding: 0px 5px;
    padding-top: 12px;
    background: #ffffff;
    border: 1px solid #515151;
    p {
      margin-bottom: 0px;
    }
  }
}
</style>
