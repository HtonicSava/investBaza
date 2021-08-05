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
          <CusButton :color="'red'" :text="'Получить консультацию'" />
        </div>
        <input
          type="checkbox"
          class="custom-checkbox"
          id="check"
          name="happy"
          value="yes"
        />
        <label for="check">
          <p>
            Я соглашаюсь с правилами
            <a href="#">&nbsp; политики конфиденциальности</a>
          </p>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "./button.vue";

export default {
  name: "questions",
  components: {
    CusButton,
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.questions {
  margin-top: 150px;
  p {
    margin-bottom: 0px;
  }
}

.questions__title {
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

.questions__content {
}

.form {
  max-width: 800px;
  background: #f6f6f6;
  border: 3px solid #515151;
  display: flex;
  flex-direction: column;
  padding: 50px 80px;

  input {
    margin-bottom: 40px;
    width: 100%;
    background: #f6f6f6;
    border-radius: 20px;
    border-style: solid;
    border-width: 3px;
    border-color: #515151;
    padding: 40px 50px;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 79.19%;
    letter-spacing: -0.025em;
    color: rgba(0, 0, 0, 0.7);
  }
}

.form__question {
  height: 200px;
  margin-bottom: 10px;
  width: 100%;
  background: #f6f6f6;
  border-radius: 20px;
  border-style: solid;
  border-width: 3px;
  border-color: #515151;
  padding: 40px 50px;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 79.19%;
  letter-spacing: -0.025em;
  color: rgba(0, 0, 0, 0.7);
}

.form__button {
  margin-bottom: 35px;
}

.form__number {
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 87.8%;
  /* or 11px */

  letter-spacing: -0.015em;

  color: #000000;
  a {
    color: red;
  }
}
.custom-checkbox + label::before {
  cursor: pointer;
  content: "";
  display: inline-block;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid rgba(0, 0, 0, 0);
  margin-right: 14px;
  box-shadow: inset 0px 5px 5px rgba(155, 155, 155, 0.14);
}

.custom-checkbox:checked + label::before {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 12'%3e%3cpath fill='black' d='M15.7657 0.359328C15.4533 0.0468906 14.9468 0.0468906 14.6343 0.359328L5.04983 9.94392L1.3657 6.2598C1.0533 5.94736 0.546797 5.94739 0.234328 6.2598C-0.0781094 6.5722 -0.0781094 7.0787 0.234328 7.39114L4.48414 11.6409C4.79645 11.9533 5.30333 11.9531 5.61552 11.6409L15.7657 1.4907C16.0781 1.1783 16.0781 0.671766 15.7657 0.359328Z'/%3e%3c/svg%3e");
  background-position: center center;
}

.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: #ffbeb3;
}

@media (max-width: 900px) {
  .questions {
    margin-top: 100px;
  }

  .questions__title {
    font-size: 30px;
    margin-right: 20px;
    margin-bottom: 100px;

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
    background: #f6f6f6;
    border: 2px solid #515151;
    display: flex;
    flex-direction: column;
    padding: 35px 20px;

    input {
      margin-bottom: 10px;
      border-radius: 8px;
      border-width: 2px;
      padding: 10px 8px;
      font-size: 16px;
    }
  }

  .form__question {
    height: 100px;
    margin-bottom: 10px;
    border-radius: 8px;
    border-width: 2px;
    padding: 10px 8px;
    font-size: 16px;
  }

  .custom-checkbox + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-family: Century Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 87.8%;
    /* or 11px */

    letter-spacing: -0.015em;

    color: #000000;
    a {
      color: red;
    }
  }
}
</style>
