<template>
  <div class="form">
    <div v-if="login === true">
      <div class="form__wrapper">
        <v-text-field
          :rules="[rules.required]"
          v-model="log.email"
          outlined
          clearable
          single-line
          placeholder="E - mail"
          color="black"
        ></v-text-field>
      </div>
      <div class="form__wrapper">
        <v-text-field
          v-model="log.password"
          outlined
          single-line
          placeholder="Пароль"
          color="black"
          :type="log.showpas ? 'text' : 'password'"
          :append-icon="log.showpas ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="log.showpas = !log.showpas"
        ></v-text-field>
      </div>
      <div class="form__button">
        <CusButton
          v-on:cus-click="sendLogData"
          :disabled="checkLogButton"
          :noLine="true"
          :color="'red'"
          :text="'Войти'"
        />
      </div>
      <input
        v-model="log.agreement"
        type="checkbox"
        class="custom-checkbox"
        id="check"
        value="yes"
      />
      <label for="check"
        >Я соглашаюсь с правилами
        <a href="#">&nbsp; политики конфиденциальности</a>
      </label>
    </div>
    <div v-else>
      <div class="form__wrapper">
        <v-text-field
          :rules="[rules.required]"
          v-model="reg.phone"
          outlined
          clearable
          single-line
          placeholder="Телефон"
          color="black"
        ></v-text-field>
      </div>
      <div class="form__wrapper">
        <v-text-field
          :rules="[rules.required]"
          v-model="reg.email"
          outlined
          clearable
          single-line
          placeholder="Почта"
          color="black"
        ></v-text-field>
      </div>
      <div class="form__wrapper">
        <v-text-field
          :rules="[rules.required]"
          v-model="reg.name"
          outlined
          clearable
          single-line
          placeholder="Имя"
          color="black"
        ></v-text-field>
      </div>
      <div class="form__wrapper">
        <v-text-field
          :rules="[rules.required]"
          v-model="reg.surname"
          outlined
          clearable
          single-line
          placeholder="Фамилия"
          color="black"
        ></v-text-field>
      </div>
      <div class="form__wrapper">
        <v-text-field
          :rules="[rules.required]"
          v-model="reg.country"
          outlined
          clearable
          single-line
          placeholder="Страна"
          color="black"
        ></v-text-field>
      </div>
      <div class="form__wrapper">
        <v-text-field
          v-model="reg.password"
          outlined
          single-line
          placeholder="Пароль"
          color="black"
          :type="reg.showpas ? 'text' : 'password'"
          :append-icon="reg.showpas ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="reg.showpas = !reg.showpas"
        ></v-text-field>
      </div>
      <div class="form__wrapper">
        <v-text-field
          v-model="reg.passwordRepeat"
          outlined
          placeholder="Повторите пароль"
          color="black"
          :type="reg.showpas ? 'text' : 'password'"
          :append-icon="reg.showpas ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="reg.showpas = !reg.showpas"
          :hint="
            reg.password === reg.passwordRepeat
              ? 'Пароли совпадают'
              : 'Пароли должны совпадать!'
          "
        ></v-text-field>
      </div>

      <div class="form__button">
        <CusButton
          v-on:cus-click="sendRegData"
          :disabled="checkRegButton"
          :noLine="true"
          :color="'red'"
          :text="'Зарегистрироваться'"
        />
      </div>
      <input
        v-model="reg.agreement"
        type="checkbox"
        class="custom-checkbox"
        id="check"
        value="yes"
      />
      <label for="check"
        >Я соглашаюсь с правилами
        <a href="#">&nbsp; политики конфиденциальности</a>
      </label>
    </div>
  </div>
</template>

<script>
import CusButton from "./button.vue";
import axios from "@/service/axios.js";

export default {
  name: "form",
  props: {
    login: Boolean,
  },
  components: {
    CusButton,
  },
  data: function () {
    return {
      log: {
        agreement: false,
        showpas: false,
        phone: "",
        email: "",
        password: "",
      },
      reg: {
        agreement: false,
        showpas: false,
        email: "",
        phone: "",
        name: "",
        surname: "",
        country: "",
        password: "",
        passwordRepeat: "",
      },
      rules: {
        required: (value) => !!value || "Поле обязательно для заполнения!",
        min: (v) => v.length >= 6 || "Min 6 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {
    sendLogData() {
      let postQuery = "login/";
      axios
        .post(postQuery, {
          password: this.log.password,
          email: this.log.email,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.$router.push({ name: "Personal" });
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Ошибка входа, попробуйте ещё раз");
        });
    },
    sendRegData() {
      let postQuery = "profile/";
      console.log(this.reg);
      axios
        .post(postQuery, {
          email: this.reg.email,
          first_name: this.reg.name,
          last_name: this.reg.surname,
          password: this.reg.password,
          phone: this.reg.phone,
          country: this.reg.country,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            alert("Регистрация успешно завершена");
            this.$router.push({ name: "Personal" });
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Ошибка при регистрации, попробуйте ещё раз");
        });
    },
  },
  computed: {
    checkRegButton: function () {
      return !(
        this.reg.email &&
        this.reg.phone &&
        this.reg.name &&
        this.reg.surname &&
        this.reg.country &&
        this.reg.password &&
        this.reg.passwordRepeat &&
        this.reg.agreement &&
        this.reg.password === this.reg.passwordRepeat
      );
    },
    checkLogButton: function () {
      return !(this.log.email && this.log.password && this.log.agreement);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 600px;
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  padding: 50px 80px;

  input {
    margin-bottom: 40px;
    width: 100%;
    background: #ffffff;
    border-style: solid;
    border-width: 1px;
    border-color: #515151;
    padding: 22px 26px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
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
  font-size: 12px;
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

.form__wrapper {
  z-index: 2;
  background-color: #ffffff;
  position: relative;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  &::after {
    content: "";
    background-color: #f6f6f6;
    height: 33.3%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
}
</style>

<style>
/* // rewrite vuetify style */
.v-messages {
  font-size: 16px !important;
}
</style>
