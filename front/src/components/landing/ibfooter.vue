<template>
  <div class="ibfooter">
    <div class="ibfooter__content">
        <div class="ibfooter__title">
        <h3>INVEST BAZA</h3>
        </div>
        <div class="ibfooter__adress">
        <p>
            Адрес: Республика Крым, <br />
            Севастополь, ул. Маяковского, д. 8, <br />
            оф. 308 299011
        </p>
        </div>
        <div class="ibfooter__links">
        <a href="#">Политика конфеденциальности</a>
        <a href="#">Договор оферты</a>
        </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "ibfooter",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.ibfooter {
  padding: 80px 0px;
  background: #202036;
  font-family: "Museo Sans Cyrl 500";
    letter-spacing: -0.04em;
    color: #FFFFFF;
  p{
      margin-bottom: 0px;
  }
}

.ibfooter__content{
    max-width: 1170;
    padding: 0px 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
}

.ibfooter__title {
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 87.19%;
  letter-spacing: -0.04em;

  margin-bottom: 20px;
  margin-right: 10px;
  margin-left: 10px;
}

.ibfooter__links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 79.19%;
  margin-bottom: 20px;
  letter-spacing: -0.025em;
  margin-right: 10px;
  margin-left: 10px;

  a {
      color: inherit;
      margin-bottom: 10px;
      &:hover{
         color: #F3C68E;
  }
  }
}

.ibfooter__adress {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  letter-spacing: -0.025em;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
}

@media (max-width: 600px) {
    .ibfooter{
        padding: 35px 10px;
    }
  .ibfooter__content{
      flex-direction: column;
      align-items: center;
  }
  .ibfooter__adress{
      text-align: center;
  }
  .ibfooter__links{
      text-align: center;
  }
  .ibfooter__title{
      text-align: center;
  }
}
</style>
