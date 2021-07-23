<template>
  <div class="headBlock">
    <div class="headBlock__content">
      <div class="headBlock__logo">
        <div class="headBlock__logoTitle">
          <h1>INVEST </h1>
          <h1>BAZA</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headBlock",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>

.headBlock{


}

.headBlock__content{
  display: flex;
  justify-content: space-between;

}

.headBlock__logo{
  background-image: url('../assets/img/headerBlock/logo.png');
  background-size: contain;
  height: 600px;
  width: 600px;
  display: flex;
  align-items: center;
}

.headBlock__logoTitle{
  font-family: Padauk;
  font-style: normal;
  font-weight: normal;
  font-size: 170px;
  line-height: 87.19%;
  letter-spacing: -0.04em;
  color: #000000;
  h1{
    &:last-child{
      position: relative;
      left: 46%;
    }
  }
}
</style>
