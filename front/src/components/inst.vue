<template>
  <div class="inst">
    <div class="inst__title">
      <h3>Наш инстаграмм</h3>
    </div>
    <div class="inst__content">
      <img src="../assets/img/inst/item.png" alt="" srcset="" />
      <img src="../assets/img/inst/qr.png" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "inst",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.inst {
  margin-top: 150px;
}

.inst__title {
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-left: 100px;
  margin-bottom: 150px;
  text-align: left;
  h3 {
    width: auto;
    display: inline;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      top: -10px;
      left: -70px;
      width: 120%;
      height: 150%;
      border: 2px solid rgba(235, 23, 23, 0.7);
      border-radius: 50%;
      transform: rotate(-4.95deg);
    }
  }
}

.inst__content {
  margin: auto;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
    max-width: 80%;
    width: auto;
  }
}

@media (max-width: 900px) {
  .inst__title {
    font-size: 30px;
    margin-left: 20px;
    margin-bottom: 100px;

    h3 {
      &::before {
        top: -10px;
        left: -10%;
        width: 120%;
        height: 150%;
      }
    }
  }

  .inst__content {
    margin: auto;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img {
      max-width: 50%;
      width: auto;
      margin: 0px 10px;
    }
  }
}
</style>
