<template>
  <div class="questions">
    <div class="questions__title">
      <h3>У вас остались вопросы?</h3>
    </div>
    <div class="questions__content">
      <div class="form">
        <input
          class="form__name"
          type="text"
          name=""
          id=""
          placeholder="Ваше имя"
        />
        <input
          class="form__number"
          type="number"
          name=""
          id=""
          placeholder="Телефон"
        />
        <textarea class="form__question" placeholder="Вопрос" />
        <div class="form__button">
          <IbButton>
            <p>Получить консультацию</p>
          </IbButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IbButton from "../ibButton.vue";

export default {
  name: "questions",
  components: {
    IbButton,
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.questions {
  padding: 60px 0px 60px;
  p {
    margin-bottom: 0px;
  }
}

.questions__title {
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  font-size: 33.5287px;
  margin-bottom: 67px;
}

.questions__content {
  display: flex;
  justify-content: center;
}

.form {
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  //   padding: 100px 80px;

  input {
    margin-bottom: 35px;

    background: #f6f6f6;
    border-radius: 20px;
    border-style: solid;
    border-width: 3px;
    border-color: #515151;
    padding: 30px 40px;
    font-family: "Museo Sans Cyrl 500";
    font-size: 16.8787px;
    letter-spacing: -0.025em;
    color: rgba(0, 0, 0, 0.7);
    &:focus {
      border-color: #f3c68e;
    }
  }
}

.form__name {
  width: 100%;
}

.form__question {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  width: 100%;
  background: #f6f6f6;
  border-radius: 20px;
  border-style: solid;
  border-width: 3px;
  border-color: #515151;
  padding: 30px 40px;
  background: #f6f6f6;
  border-radius: 20px;
  border-style: solid;
  border-width: 3px;
  border-color: #515151;
  padding: 30px 40px;
  font-family: "Museo Sans Cyrl 500";
  font-size: 16.8787px;
  letter-spacing: -0.025em;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 35px;
  &:focus {
    border-color: #f3c68e;
  }
}

.form__button {
  // margin-bottom: 35px;
}

.form__number {
  width: 100%;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
}

@media (max-width: 600px) {
  .questions {
    margin-top: 0px;
  }

  .questions__title {
    font-size: 28px;
    // margin-right: 20px;
    margin-bottom: 20px;
    padding: 0px 10px;
    h3 {
      &::before {
        top: -10px;
        left: -5%;
        width: 100%;
        height: 150%;
      }
    }
  }

  .form {
    max-width: 400px;

    display: flex;
    flex-direction: column;
    padding: 35px 20px;

    input {
      margin-bottom: 20px;
      border-radius: 8px;
      border-width: 2px;
      padding: 10px 8px;
      font-size: 16px;
    }
  }

  .form__question {
    height: 100px;
    margin-bottom: 20px;
    border-radius: 8px;
    border-width: 2px;
    padding: 10px 8px;
    font-size: 16px;
  }
}
</style>
