<template>
  <div class="map">
    <div class="map__title">
      <h3>Мы находимся</h3>
    </div>
    <div class="map__img">
      <img src="../assets/img/map/item.png" alt="" />
    </div>
    <div class="map__text">
      <p>
        Адрес: Республика Крым, Севастополь, улица Маяковского, дом 8, офис 308
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "map",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.map {
  margin-top: 150px;
  padding-bottom: 200px;
}

.map__title {
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-right: 100px;
  margin-bottom: 150px;
  text-align: right;
  h3 {
    width: auto;
    display: inline;
    position: relative;
  }
}

.map__img {
  img {
    max-width: 100%;
    width: auto;
  }
}

.map__text {
  margin-top: 50px;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 100%;
  letter-spacing: -0.025em;
  color: #000000;
  margin-left: 70px;
  width: 500px;
}

@media (max-width: 900px) {
  .map {
    margin-top: 100px;
    padding-bottom: 40px;
  }
  .map__title {
    font-size: 30px;
    margin-right: 20px;
    margin-bottom: 70px;
    h3 {
      &::before {
        top: -10px;
        left: -10%;
        width: 120%;
        height: 150%;
      }
    }
  }
  .map__text {
    margin-top: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.025em;
    color: #000000;
    margin-left: 0px;
    width: 280px;
  }
}
</style>
