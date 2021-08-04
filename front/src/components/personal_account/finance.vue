<template>
  <div class="finance">
    <div class="finance__body">
      <div class="finance__title">
        <h3>Финансы</h3>
      </div>
      <div class="finance__content">
          <div class="finance__item">
              <div class="finance__button finance__button-red">
                  <button>
                      <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.7195 4.39374C14.2668 4.25002 13.7835 4.51102 13.6452 4.97387C13.5117 5.42108 13.7727 5.90439 14.2195 6.03728L22.6081 8.54265L4.63381 18.2496C4.21518 18.4765 4.062 18.9894 4.28827 19.4084C4.51455 19.8274 5.03329 19.9914 5.45229 19.7652L23.4266 10.0582L20.9158 18.4367C20.7877 18.894 21.049 19.378 21.4959 19.5109C21.9587 19.6491 22.4427 19.3878 22.5701 18.9308L25.6686 8.5563C25.8123 8.1036 25.5513 7.62029 25.0943 7.49289L14.7195 4.39374Z" fill="white"/>
                      </svg>
                  </button>
                  <p>
                      Пополнить баланс
                  </p>
              </div>
              <div class="finance__methods">
                  <div class="finance__methodsTitle">
                      <h4>
                          Выберите способ пополнения
                      </h4>
                  </div>
                  <div class="finance__method">
                      <img src="@/assets/img/personal_account/finance/card.png" alt="" srcset="">
                      <p>Банковская карта</p>
                  </div>
                  <div class="finance__method">
                      <img src="@/assets/img/personal_account/finance/bit.png" alt="" srcset="">
                      <p>Биткоин</p>
                  </div>
                  <div class="finance__method">
                      <img src="@/assets/img/personal_account/finance/etherium.png" alt="" srcset="">
                      <p>Ethereum</p>
                  </div>
                  <div class="finance__method">
                      <img src="@/assets/img/personal_account/finance/usdt.png" alt="" srcset="">
                      <p>USDT</p>
                  </div>
              </div>
          </div>
          <div class="finance__item">
              <div class="finance__button finance__button-white">
                  <button>
<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7195 4.39374C14.2668 4.25002 13.7835 4.51102 13.6452 4.97387C13.5117 5.42108 13.7727 5.90439 14.2195 6.03728L22.6081 8.54265L4.63381 18.2496C4.21518 18.4765 4.062 18.9894 4.28827 19.4084C4.51455 19.8274 5.03329 19.9914 5.45229 19.7652L23.4266 10.0582L20.9158 18.4367C20.7877 18.894 21.049 19.378 21.4959 19.5109C21.9587 19.6491 22.4427 19.3878 22.5701 18.9308L25.6686 8.5563C25.8123 8.1036 25.5513 7.62029 25.0943 7.49289L14.7195 4.39374Z" fill="#EB1717"/>
</svg>

                  </button>
                  <p>
                      Вывести средства
                  </p>
              </div>
              <div class="finance__methods">
                  <div class="finance__methodsTitle">
                      <h4>
                          Выберите способ вывода
                      </h4>
                  </div>
                  <div class="finance__method">
                      <img src="@/assets/img/personal_account/finance/card.png" alt="" srcset="">
                      <p>Банковская карта</p>
                  </div>
                  <div class="finance__method">
                      <img src="@/assets/img/personal_account/finance/bit.png" alt="" srcset="">
                      <p>Биткоин</p>
                  </div>
                  <div class="finance__method">
                      <img src="@/assets/img/personal_account/finance/etherium.png" alt="" srcset="">
                      <p>Ethereum</p>
                  </div>
                  <div class="finance__method">
                      <img src="@/assets/img/personal_account/finance/usdt.png" alt="" srcset="">
                      <p>USDT</p>
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
  name: "finance",
  data: function () {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.finance {
  p {
    margin-bottom: 0px;
  }
}
.finance__body {
  max-width: 680px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.finance__title {
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-bottom: 90px;
}

.finance__content {
    display: flex;
    // align-items: center;
    justify-content: space-between;
    width: 100%;

}

.finance__item {
    flex-basis: 50%;
    &:first-child{
        padding-right: 20px;
    }
    &:last-child{
        padding-left: 20px;
        margin-right: 0px;
    }
}
.finance__button {
    display: flex;
    align-items: center;
    font-family: Century Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    font-weight: 500;

    button{
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-right: 12px;

    }
}
.finance__button-red{
    button{
        background: #EB1717;
    }
}

.finance__button-white{
        button{
    background: #E5E5E5;

    }
}

.finance__methods {
    padding: 20px;
    font-family: Century Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    border: 1px solid #515151;
    
}
.finance__methodsTitle {
    margin-bottom: 50px;
    text-align: center;
}
.finance__method {
    margin-left: 20px;
    display: flex;
    align-items: center;
    img{
        margin-right: 16px;
    }
}

</style>
