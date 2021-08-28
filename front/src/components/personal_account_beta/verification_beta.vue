<template>
  <div class="verification">
    <div class="verification__content">
      <div class="verification__title">
        <h3>Верификация</h3>
      </div>
      <div class="verification__body body">
        <div class="body__passport">
          <div class="body__title">
            <h4>Паспорт</h4>
          </div>
          <div class="body__input">
            <input type="text" name="" placeholder="Серия и номер" id="" />
          </div>
        </div>
        <div class="body__issued">
          <div class="body__title-white">
            <h4>Выдан</h4>
          </div>
          <div class="body__input">
            <input type="text" name="" placeholder="Кем выдан" id="" />
          </div>
          <div class="body__input">
            <input type="text" name="" placeholder="Код подразделения" id="" />
          </div>
          <div class="body__input">
            <input type="text" name="" placeholder="Дата выдачи" id="" />
          </div>
        </div>
        <div class="body__adress">
          <div class="body__title-white">
            <h4>Адрес прописки</h4>
          </div>
          <div class="body__input">
            <textarea
              name=""
              style="resize: none"
              placeholder="Область, город, населнный пункт..."
              id=""
            ></textarea>
            <!-- <input type="text" name="" placeholder="Область, город, населнный пункт..." id=""> -->
          </div>
        </div>
        <div class="body__scan">
          <h4>Скан паспорта</h4>
          <p>
            Загрузите фотографию или цветной скан паспорта. Два разворота —
            основной разворот с именем и фотографией и разворот с пропиской
          </p>
          <ibButton class="verification__button">
            <svg
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.11914 0.146484C1.11409 0.146484 0.290039 0.970532 0.290039 1.97558V12.9502C0.290039 13.9552 1.11409 14.7793 2.11914 14.7793H10.6549C11.66 14.7793 12.484 13.9552 12.484 12.9502V4.16193L8.46859 0.146484H2.11914ZM2.11914 1.36588H7.60643V5.02408H11.2646V12.9502C11.2646 13.2931 10.9979 13.5599 10.6549 13.5599H2.11914C1.77618 13.5599 1.50944 13.2931 1.50944 12.9502V1.97558C1.50944 1.63263 1.77618 1.36588 2.11914 1.36588ZM8.82583 2.22804L10.4025 3.80468H8.82583V2.22804ZM3.94824 7.46288V8.68228H8.82583V7.46288H3.94824ZM3.94824 9.90168V11.1211H7.60643V9.90168H3.94824Z"
                fill="#F3C68E"
              />
            </svg>
            <p>Загрузить основной разворот</p>
          </ibButton>
          <ibButton class="verification__button">
            <svg
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.11914 0.146484C1.11409 0.146484 0.290039 0.970532 0.290039 1.97558V12.9502C0.290039 13.9552 1.11409 14.7793 2.11914 14.7793H10.6549C11.66 14.7793 12.484 13.9552 12.484 12.9502V4.16193L8.46859 0.146484H2.11914ZM2.11914 1.36588H7.60643V5.02408H11.2646V12.9502C11.2646 13.2931 10.9979 13.5599 10.6549 13.5599H2.11914C1.77618 13.5599 1.50944 13.2931 1.50944 12.9502V1.97558C1.50944 1.63263 1.77618 1.36588 2.11914 1.36588ZM8.82583 2.22804L10.4025 3.80468H8.82583V2.22804ZM3.94824 7.46288V8.68228H8.82583V7.46288H3.94824ZM3.94824 9.90168V11.1211H7.60643V9.90168H3.94824Z"
                fill="#F3C68E"
              />
            </svg>
            <p>Загрузить разворот с пропиской</p>
          </ibButton>
        </div>
        <div class="body_inn">
          <div class="body__title">
            <h4>ИНН</h4>
          </div>
          <div class="body__input">
            <input type="text" name="" placeholder="Введите ИНН" id="" />
          </div>
          <ibButton class="verification__button">
            <p>Сохранить</p>
          </ibButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ibButton from "../ibButton.vue";

export default {
  name: "verification",
  components: { ibButton },
  data: function () {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.verification {
}
.verification__content {
  max-width: 700px;
}
.verification__title {
  font-family: "Museo Sans Cyrl 500";
  font-size: 41.3115px;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-bottom: 59px;
}

.verification__body {
  margin-bottom: 20px;
}
.body {
  display: grid;
  grid-template-areas:
    "passport ."
    "passport scan"
    "issued scan"
    "issued scan"
    "issued scan"
    "issued scan"
    "issued scan"
    ".        . "
    "adress inn"
    "adress inn"
    "adress inn";
  // row-gap: 40px;
  column-gap: 65px;
  // grid-auto-rows: max-content;
  // grid-template-columns: repeat(auto-fit,minmax(220px, 1fr));
  grid-template-columns: minmax(220px, 1fr) minmax(350px, 1fr);

  grid-template-rows: 50px 100px 50px 50px 50px 50px 50px 50px 50px 50px;
}
.body__passport {
  grid-area: passport;
}
.body__title,
.body__title-white {
  font-family: "Museo Sans Cyrl 500";
  font-size: 17px;
  letter-spacing: 0.02em;
  color: #f3c68e;
  text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
  margin-bottom: 22px;
}
.body__input {
  background: linear-gradient(104.27deg, #292944 20.18%, #1e1e36 97.13%);
  mix-blend-mode: normal;
  opacity: 0.5;
  border-radius: 6.86111px;
  margin-bottom: 23px;
  height: 53px;
  font-family: "Museo Sans Cyrl 500";
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #ffffff;

  text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);

  input,
  textarea {
    padding: 14px 25px;
    width: 100%;
    height: 100%;
    border-radius: 6.86111px;
    color: #ffffff;
    opacity: 1;
    border: 1px solid #f3c68e00;
    opacity: 0.2s;
    &:focus {
      border: 1px solid #f3c68e;
    }
  }
}
.body__issued {
  grid-area: issued;
}
.body__title-white {
  color: #ffffff;
}
.body__adress {
  grid-area: adress;
  .body__input {
    height: calc(100% - 48px);
  }
}
.body__scan {
  grid-area: scan;
  background: linear-gradient(104.27deg, #15152a 20.18%, #101020 97.13%);
  mix-blend-mode: normal;
  border-radius: 5px;
  padding: 38px;
  h4 {
    font-family: "Museo Sans Cyrl 500";
    font-size: 15px;
    letter-spacing: 0.02em;
    color: #ffffff;
    text-shadow: 0px 0px 25.2222px rgba(255, 216, 132, 0.6);
    margin-bottom: 19px;
  }
  p {
    font-family: "Museo Sans Cyrl 500";
    font-size: 11px;
    letter-spacing: 0.02em;
    color: #ffffff;
    opacity: 0.7;
  }
  .verification__button {
    margin-top: 32px;
    max-width: 293px;
  }
}
.body_inn {
  grid-area: inn;
}

@media (max-width: 1024px) {
  .body {
    display: grid;
    grid-template-areas:
      "passport "
      "passport "
      "issued "
      "issued "
      "issued "
      "issued "
      "issued "
      ".         "
      "adress "
      "adress "
      "adress "
      ".         "
      "scan"
      "scan"
      "scan"
      "scan"
      "scan"
      "scan"
      "."
      "inn"
      "inn"
      "inn";
    column-gap: 65px;
    grid-template-columns: minmax(300px, 1fr);
    grid-auto-rows: 60px;
  }

  .verification__title {
    font-size: 36px;
  }
  .verification__content {
    margin: auto;
  }
}
</style>
