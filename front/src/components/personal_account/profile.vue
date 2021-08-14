<template>
  <div class="profile">
    <div class="profile__title">
      <h3>Профиль</h3>
    </div>
    <div class="profile__img">
      <img src="@/assets/img/personal_account/profile/item.png" alt="" />
    </div>
    <div class="profile__info">
      <div v-for="(item, i) in items" :key="i" class="profile__item">
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "profile",
  data: function () {
    return {
      items: [
        { text: "Имя" },
        { text: "Фамилия" },
        { text: "Email" },
        { text: "Телефон" },
        { text: "Страна" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  font-style: normal;
  font-weight: normal;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #000000;
}
.profile__title {
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
}

.profile__img {
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    width: auto;
  }
  margin-bottom: 40px;
}
.profile__info {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(180px, 260px));
  justify-content: center;
}
.profile__item {
  text-align: center;
  padding: 20px 10px;
  background-color: #f6f6f6;
  p {
    margin-bottom: 0px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
  }
}

@media (max-width: 600px) {
  .profile__title {
    font-size: 24px;
  }
  .profile__img {
    img {
      max-width: 180px;
      width: auto;
    }
  }
  .profile__info {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, minmax(140px, 260px));
    justify-content: center;
  }
  .profile__item {
    text-align: center;
    padding: 15px 7px;
    background-color: #f6f6f6;
    p {
      margin-bottom: 0px;
      font-size: 14px;
      font-weight: 700;
      color: rgb(0, 0, 0);
    }
  }
}
</style>
