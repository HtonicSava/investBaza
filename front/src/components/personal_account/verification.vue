<template>
  <div class="verification">
    <div class="verification__title">
      <h3>Верификация аккаунта</h3>
    </div>
    <div class="verification__subtitle">
      <h3>Что бы подтвердить ваш аккаунт следуйте инструкции на экране</h3>
    </div>
    <div class="verification__items">
      <div class="verification__item">
        <div class="verification__number">1</div>
        <div class="verification__description">
          <p>сделайте селфи</p>
        </div>
      </div>
      <div class="verification__item">
        <div class="verification__number">2</div>
        <div class="verification__description">
          <p>Загрузите документы</p>
        </div>
      </div>
      <div class="verification__item">
        <div class="verification__number">3</div>
        <div class="verification__description">
          <p>Подтверждение оплаты</p>
        </div>
      </div>
    </div>
    <div class="verification__img">
      <img src="@/assets/img/personal_account/verification/item1.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "verification",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.verification {
  font-style: normal;
  font-weight: normal;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #000000;
}
.verification__title {
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
}
.verification__subtitle {
  text-align: center;
  font-size: 20px;
  margin-bottom: 60px;
}
.verification__items {
  display: grid;
  grid-template-columns: repeat(3, 180px);
  // column-gap: 50px;
  justify-items: center;
  justify-content: center;
}
.verification__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.verification__number {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  border-radius: 50%;
  margin-bottom: 13px;
}
.verification__description {
  text-align: center;
  font-size: 14px;
}
.verification__img {
  display: flex;
  justify-content: center;
  img {
    max-width: 80%;
    width: auto;
  }
}

@media (max-width: 600px) {
  .verification__title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
  .verification__subtitle {
    text-align: center;
    font-size: 14px;
    margin-bottom: 50px;
  }
  .verification__items {
    display: grid;
    grid-template-columns: repeat(3, 80px);
    column-gap: 20px;
    justify-items: center;
    justify-content: center;
  }
}
</style>
