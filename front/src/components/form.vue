<template>
  <div class="form">
    <div v-if="login === true">
      <div class="form__wrapper">
        <v-text-field
          :rules="[rules.required]"
          v-model="log.email"
          outlined
          clearable
          dark
          single-line
          placeholder="E - mail"
          color="#F3C68E"
        ></v-text-field>
      </div>
      <div class="form__wrapper">
        <v-text-field
          v-model="log.password"
          outlined
          single-line
          placeholder="Пароль"
          dark
          color="#F3C68E"
          :type="log.showpas ? 'text' : 'password'"
          :append-icon="log.showpas ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="log.showpas = !log.showpas"
        ></v-text-field>
      </div>
      <div class="form__button">
        <!-- <CusButton
          v-on:cus-click="sendLogData"
          :disabled="checkLogButton"
          :noLine="true"
          :color="'red'"
          :text="'Войти'"
        /> -->
        <ibButton :disabled="checkLogButton" @callback="sendLogData">
          <p>Войти</p>
        </ibButton>
      </div>
      <input
        v-model="log.agreement"
        type="checkbox"
        class="custom-checkbox"
        id="check"
        value="yes"
      />
      <!-- <label for="check">
        <p>
          Я соглашаюсь с правилами
          <a href="#">&nbsp; политики конфиденциальности</a>
        </p>
      </label> -->
      <router-link to="/registry">
        <p>Регистрация</p>
      </router-link>
    </div>
    <div v-else>
      <div v-if="curator.name && curator.surname" class="form__curator">
        <p>Вас пригласил:</p>
        <p>
          <span>{{ curator.name }} {{ curator.surname }}</span>
        </p>
      </div>
      <div class="form__wrapper">
        <v-text-field
          :rules="[rules.required]"
          v-model="reg.name"
          outlined
          dark
          clearable
          single-line
          placeholder="Имя"
          color="#F3C68E"
        ></v-text-field>
      </div>
      <div class="form__wrapper">
        <v-text-field
          :rules="[rules.required]"
          v-model="reg.surname"
          dark
          outlined
          clearable
          single-line
          placeholder="Фамилия"
          color="#F3C68E"
        ></v-text-field>
      </div>
      <div class="form__wrapper">
        <v-autocomplete
          ref="country"
          dark
          v-model="reg.country"
          :rules="[rules.required]"
          :items="reg.countries"
          clearable
          placeholder="Страна"
          outlined
          color="#F3C68E"
        ></v-autocomplete>
      </div>
      <div class="form__wrapper">
        <v-text-field
          :rules="[rules.required]"
          v-model="reg.phone"
          outlined
          dark
          clearable
          single-line
          placeholder="Телефон"
          color="#F3C68E"
        ></v-text-field>
      </div>
      <div class="form__wrapper">
        <v-text-field
          :rules="[rules.required]"
          v-model="reg.email"
          outlined
          dark
          clearable
          single-line
          placeholder="Email"
          color="#F3C68E"
        ></v-text-field>
      </div>

      <div class="form__wrapper">
        <v-text-field
          v-model="reg.password"
          outlined
          single-line
          dark
          placeholder="Пароль"
          color="#F3C68E"
          :type="reg.showpas ? 'text' : 'password'"
          :append-icon="reg.showpas ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="reg.showpas = !reg.showpas"
        ></v-text-field>
      </div>
      <div class="form__wrapper">
        <v-text-field
          v-model="reg.passwordRepeat"
          outlined
          dark
          placeholder="Повторите пароль"
          color="#F3C68E"
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
        <!-- <CusButton
          v-on:cus-click="sendRegData"
          :disabled="checkRegButton"
          :noLine="true"
          :color="'red'"
          :text="'Зарегистрироваться'"
        /> -->
        <ib-button :disabled="checkRegButton" @callback="sendRegData">
          <p>Зарегистрироваться</p>
        </ib-button>
      </div>
      <input
        v-model="reg.agreement"
        type="checkbox"
        class="custom-checkbox"
        id="check"
        value="yes"
      />
      <label for="check">
        <p>
          Я соглашаюсь с правилами
          <a href="#">&nbsp; политики конфиденциальности</a>
        </p>
      </label>
      <router-link to="/login">
        <p>Войти</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import CusButton from "./button.vue";
import axios from "@/service/axios.js";
import IbButton from "./ibButton.vue";
// import { ModelSelect } from 'vue-search-select'

export default {
  name: "form",
  props: {
    login: Boolean,
  },
  components: {
    // ModelSelect,
    CusButton,
    IbButton,
  },
  data: function () {
    return {
      referal_id: null,
      curator: {
        id: null,
        name: null,
        surname: null,
      },
      log: {
        // agreement: false,
        showpas: false,
        phone: "",
        email: "",
        password: "",
      },
      reg: {
        countries: [
          "Afghanistan",
          "Albania",
          "Algeria",
          "Andorra",
          "Angola",
          "Anguilla",
          "Antigua &amp; Barbuda",
          "Argentina",
          "Armenia",
          "Aruba",
          "Australia",
          "Austria",
          "Azerbaijan",
          "Bahamas",
          "Bahrain",
          "Bangladesh",
          "Barbados",
          "Belarus",
          "Belgium",
          "Belize",
          "Benin",
          "Bermuda",
          "Bhutan",
          "Bolivia",
          "Bosnia &amp; Herzegovina",
          "Botswana",
          "Brazil",
          "British Virgin Islands",
          "Brunei",
          "Bulgaria",
          "Burkina Faso",
          "Burundi",
          "Cambodia",
          "Cameroon",
          "Cape Verde",
          "Cayman Islands",
          "Chad",
          "Chile",
          "China",
          "Colombia",
          "Congo",
          "Cook Islands",
          "Costa Rica",
          "Cote D Ivoire",
          "Croatia",
          "Cruise Ship",
          "Cuba",
          "Cyprus",
          "Czech Republic",
          "Denmark",
          "Djibouti",
          "Dominica",
          "Dominican Republic",
          "Ecuador",
          "Egypt",
          "El Salvador",
          "Equatorial Guinea",
          "Estonia",
          "Ethiopia",
          "Falkland Islands",
          "Faroe Islands",
          "Fiji",
          "Finland",
          "France",
          "French Polynesia",
          "French West Indies",
          "Gabon",
          "Gambia",
          "Georgia",
          "Germany",
          "Ghana",
          "Gibraltar",
          "Greece",
          "Greenland",
          "Grenada",
          "Guam",
          "Guatemala",
          "Guernsey",
          "Guinea",
          "Guinea Bissau",
          "Guyana",
          "Haiti",
          "Honduras",
          "Hong Kong",
          "Hungary",
          "Iceland",
          "India",
          "Indonesia",
          "Iran",
          "Iraq",
          "Ireland",
          "Isle of Man",
          "Israel",
          "Italy",
          "Jamaica",
          "Japan",
          "Jersey",
          "Jordan",
          "Kazakhstan",
          "Kenya",
          "Kuwait",
          "Kyrgyz Republic",
          "Laos",
          "Latvia",
          "Lebanon",
          "Lesotho",
          "Liberia",
          "Libya",
          "Liechtenstein",
          "Lithuania",
          "Luxembourg",
          "Macau",
          "Macedonia",
          "Madagascar",
          "Malawi",
          "Malaysia",
          "Maldives",
          "Mali",
          "Malta",
          "Mauritania",
          "Mauritius",
          "Mexico",
          "Moldova",
          "Monaco",
          "Mongolia",
          "Montenegro",
          "Montserrat",
          "Morocco",
          "Mozambique",
          "Namibia",
          "Nepal",
          "Netherlands",
          "Netherlands Antilles",
          "New Caledonia",
          "New Zealand",
          "Nicaragua",
          "Niger",
          "Nigeria",
          "Norway",
          "Oman",
          "Pakistan",
          "Palestine",
          "Panama",
          "Papua New Guinea",
          "Paraguay",
          "Peru",
          "Philippines",
          "Poland",
          "Portugal",
          "Puerto Rico",
          "Qatar",
          "Reunion",
          "Romania",
          "Россия",
          "Rwanda",
          "Saint Pierre &amp; Miquelon",
          "Samoa",
          "San Marino",
          "Satellite",
          "Saudi Arabia",
          "Senegal",
          "Serbia",
          "Seychelles",
          "Sierra Leone",
          "Singapore",
          "Slovakia",
          "Slovenia",
          "South Africa",
          "South Korea",
          "Spain",
          "Sri Lanka",
          "St Kitts &amp; Nevis",
          "St Lucia",
          "St Vincent",
          "St. Lucia",
          "Sudan",
          "Suriname",
          "Swaziland",
          "Sweden",
          "Switzerland",
          "Syria",
          "Taiwan",
          "Tajikistan",
          "Tanzania",
          "Thailand",
          `Timor L'Este`,
          "Togo",
          "Tonga",
          "Trinidad &amp; Tobago",
          "Tunisia",
          "Turkey",
          "Turkmenistan",
          "Turks &amp; Caicos",
          "Uganda",
          "Ukraine",
          "United Arab Emirates",
          "United Kingdom",
          "United States",
          "Uruguay",
          "Uzbekistan",
          "Venezuela",
          "Vietnam",
          "Virgin Islands (US)",
          "Yemen",
          "Zambia",
          "Zimbabwe",
        ],
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
            alert("Вход выполнен успешно");
            localStorage.setItem(
              "authorization",
              JSON.stringify(res.data.authorization)
            );
            this.$router.push({ name: "PersonalBeta" });
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
          curator: this.curator.id,
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
            localStorage.setItem(
              "authorization",
              JSON.stringify(res.data.authorization)
            );
            // console.log(res.data.authorization)
            this.$router.push({ name: "PersonalBeta" });
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Ошибка при регистрации, попробуйте ещё раз");
        });
    },
    getCuratorId() {
      let getQuery = `referal_link/?referal_id=${this.referal_id}`;
      axios
        .get(getQuery)
        .then((res) => {
          console.log(res);
          this.curator.id = res.data.id;
          this.curator.name = res.data.first_name;
          this.curator.surname = res.data.last_name;
        })
        .catch((err) => {
          console.log(err);
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
      return !(this.log.email && this.log.password);
    },
  },
  mounted() {
    this.referal_id = this.$route.query.referal_id;
    this.getCuratorId();
    console.log(this.$route.query.referal_id);
  },
};
</script>

<style lang="scss" scoped>
a {
  margin-top: 8px;
  width: 100%;
  text-align: center;
  color: #c1a58288;
  transition: 0.4s;
  &:hover {
    color: #c1a582;
  }
}

.form {
  border-radius: 10px;
  background: #101020;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 50px 80px;
  p {
    margin-bottom: 0px;
  }

  input {
    margin-bottom: 40px;
    // width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: #515151;
    padding: 22px 26px;
    font-family: "Museo Sans Cyrl 500";
    font-size: 21px;
    letter-spacing: -0.025em;
    color: #ffffff;
    text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
  }
}

.form__curator {
  font-family: Century Gothic;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 40px;
  font-family: "Museo Sans Cyrl 500";
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #f3c68e;
  text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
  span {
    color: #ffffff;
  }
}

// .form__question {
//   height: 200px;
//   margin-bottom: 10px;
//   width: 100%;
//   background: #25253A;
//   border-radius: 20px;
//   border-style: solid;
//   border-width: 3px;
//   border-color: #515151;
//   padding: 40px 50px;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 21px;
//   line-height: 79.19%;
//   letter-spacing: -0.025em;
//   color: rgba(0, 0, 0, 0.7);
// }

.form__button {
  padding-top: 15px;
  margin-bottom: 35px;
  p {
    font-size: 20px;
  }
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
  font-family: "Museo Sans Cyrl 500";
  font-size: 14px;
  /* or 11px */
  letter-spacing: -0.015em;
  color: #ffffff;
  a {
    color: #c1a582;
  }
  text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
}
.custom-checkbox + label::before {
  cursor: pointer;
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #c1a582;
  border-radius: 6px;
  margin-right: 14px;
  box-shadow: inset 0px 5px 5px rgba(155, 155, 155, 0.14);
}

.custom-checkbox:checked + label::before {
  background-size: 60%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 9'%3e%3cpath fill='rgb(243,198,142)' d='M11.6796 0.320406C11.7812 0.421714 11.8617 0.542064 11.9167 0.674562C11.9717 0.80706 12 0.949103 12 1.09256C12 1.23601 11.9717 1.37805 11.9167 1.51055C11.8617 1.64305 11.7812 1.7634 11.6796 1.86471L5.13595 8.40835C5.03465 8.50991 4.9143 8.59049 4.7818 8.64547C4.6493 8.70045 4.50726 8.72875 4.3638 8.72875C4.22035 8.72875 4.07831 8.70045 3.94581 8.64547C3.81331 8.59049 3.69296 8.50991 3.59165 8.40835L0.319835 5.13653C0.218435 5.03512 0.138 4.91475 0.0831224 4.78226C0.0282451 4.64977 1.06842e-09 4.50778 0 4.36438C-1.06842e-09 4.22097 0.0282451 4.07898 0.0831224 3.94649C0.138 3.81401 0.218435 3.69363 0.319835 3.59223C0.421235 3.49083 0.541614 3.41039 0.6741 3.35551C0.806586 3.30064 0.948583 3.27239 1.09198 3.27239C1.23539 3.27239 1.37738 3.30064 1.50987 3.35551C1.64236 3.41039 1.76273 3.49083 1.86413 3.59223L4.3638 6.09408L10.1353 0.320406C10.2366 0.218842 10.357 0.138261 10.4895 0.0832805C10.6219 0.0282999 10.764 0 10.9074 0C11.0509 0 11.1929 0.0282999 11.3254 0.0832805C11.4579 0.138261 11.5783 0.218842 11.6796 0.320406Z'/%3e%3c/svg%3e");
  background-position: center center;
}

.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: #ffbeb3;
}

.form__wrapper {
  border-radius: 5px;
  z-index: 2;
  background: linear-gradient(104.27deg, #292944 20.18%, #1e1e36 97.13%);
  position: relative;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  &::after {
    content: "";
    background: #101020;
    height: 33.3%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
}

// .test {
//   margin-bottom: 30px;
//   border: 1px solid #000000;
//   background-color: #ffffff;
//   padding: 22px 14px;
//   .search {
//     width: 100%;
//     height: 100%;
//   }
//   .menu {
//     z-index: 1000;
//   }
// }

@media (max-width: 420px) {
  .form {
    padding: 20px 30px;
  }
}
</style>

<style>
/* // rewrite vuetify style */
.v-messages {
  font-size: 16px !important;
}
.v-select__selection--comma {
  margin: 7px 4px 7px 8px !important;
}
</style>
