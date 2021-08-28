<template>
  <div class="verification">
    <div class="verification__title">
      <h3>Верификация аккаунта</h3>
    </div>
    <div class="verification__subtitle">
      <h3>Чтобы подтвердить ваш аккаунт, предоставьте следующую информацию</h3>
    </div>
    <div class="verification__items">
      <div class="verification__item">
        <v-text-field
          :rules="[rules.required]"
          v-model="number"
          outlined
          rounded
          clearable
          single-line
          placeholder="Номер паспорта"
          color="black"
        ></v-text-field>
      </div>
      <div class="verification__item">
        <v-text-field
          :rules="[rules.required]"
          v-model="seria"
          outlined
          rounded
          clearable
          single-line
          placeholder="Серия паспорта"
          color="black"
        ></v-text-field>
      </div>
      <div class="verification__item">
        <v-text-field
          :rules="[rules.required]"
          v-model="who"
          outlined
          rounded
          clearable
          single-line
          placeholder="Кем выдан"
          color="black"
        ></v-text-field>
      </div>
      <div class="verification__item">
        <v-text-field
          :rules="[rules.required]"
          v-model="when"
          outlined
          rounded
          clearable
          single-line
          placeholder="Когда выдан"
          color="black"
        ></v-text-field>
      </div>
      <div class="verification__item">
        <v-text-field
          :rules="[rules.required]"
          v-model="adress"
          outlined
          rounded
          clearable
          single-line
          placeholder="Адрес прописки"
          color="black"
        ></v-text-field>
      </div>
      <div class="verification__item">
        <v-text-field
          :rules="[rules.required]"
          v-model="code"
          outlined
          rounded
          clearable
          single-line
          placeholder="Код подразделения"
          color="black"
        ></v-text-field>
      </div>
      <div class="verification__item">
        <v-text-field
          :rules="[rules.required]"
          v-model="inn"
          outlined
          rounded
          clearable
          single-line
          placeholder="ИНН"
          color="black"
        ></v-text-field>
      </div>
      <!-- <div class="verification__item">
      </div> -->
    </div>
    <div class="verification__download">
      <h3>Загрузите фотографию, на которой видно ваше лицо и паспорт</h3>
      <div class="verification__downloadItems">
        <v-file-input
          outlined
          rounded
          clearable
          single-line
          placeholder="Фото с паспортом"
          color="black"
          class="download"
        ></v-file-input>
        <v-file-input
          outlined
          rounded
          clearable
          single-line
          placeholder="Фото с пропиской"
          color="black"
          class="download"
        ></v-file-input>
      </div>
    </div>
    <CusButton :color="'red'" :noLine="true" :text="'Сохранить'" />
    <!-- <div class="verification__img">
      <img src="@/assets/img/personal_account/verification/item1.png" alt="" />
    </div> -->
  </div>
</template>

<script>
import CusButton from "../button.vue";

export default {
  components: {
    CusButton,
  },
  name: "verification",
  data: function () {
    return {
      number: null,
      seria: null,
      inn: null,
      date: null,
      code: null,
      who: null,
      when: null,
      adress: null,
      rules: {
        required: (value) => !!value || "Поле обязательно для заполнения!",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.verification {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  column-gap: 20px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 280px);
  // column-gap: 50px;
  justify-items: center;
  justify-content: center;
}

.verification__download {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // padding: 0px 20px;
  .download {
    // max-width: 280px;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 40px;
  }
}

.verification__downloadItems {
  display: grid;
  column-gap: 10px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 280px);
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

  .verification__download {
    h3 {
      font-size: 14px;
      margin-bottom: 30px;
    }
  }

  .verification__items {
    // display: grid;
    // grid-template-columns: repeat(3, 80px);
    // column-gap: 20px;
    // justify-items: center;
    // justify-content: center;
  }
}
</style>
