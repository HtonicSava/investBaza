<template>
  <div>
    <div class="profile">
      <div class="profile__content">
        <div class="profile__title">
          <h3>Ваш пригласитель</h3>
        </div>
        <div class="profile__body">
          <div class="profile__img"></div>
          <div class="profile__name">
            <p>{{ profile.name }} {{ profile.surname }}</p>
          </div>
          <div class="profile__info">
            <p>{{ profile.phone }}</p>
            <p>{{ profile.email }}</p>
            <p>{{ profile.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "curator",
  props: {
    profile: Object,
  },
  data: function () {
    return {
      // profile: {
      //   name: "Мустафа",
      //   surname: "Темиргазиев",
      //   phone: "+7 (926) 967-33-70",
      //   email: "ArtMalikoff@gmail.com",
      //   country: "Россия",
      // },
    };
  },
  methods: {
    getTriad: function (value) {
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + " " + "₽";
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.profile {
  p {
    margin-bottom: 0px;
  }
}
.profile__content {
  // max-width: 560px;
}
.profile__title,
.redactor__title {
  font-family: "Museo Sans Cyrl 500";
  font-size: 41.3115px;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-bottom: 59px;
}

.profile__body {
}
.profile__img {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: #c4c4c4;
  margin-bottom: 51px;
}
.profile__name {
  font-family: "Museo Sans Cyrl 300";
  font-size: 17px;
  letter-spacing: 0.02em;
  color: #f3c68e;
  text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
  margin-bottom: 22px;
}
.profile__info {
  font-family: "Museo Sans Cyrl 300";
  font-size: 15px;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-shadow: 0px 0px 25.2222px rgba(255, 216, 132, 0.6);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 350px;
  p {
    margin-bottom: 23px;
    margin-right: 8px;
  }
  margin-bottom: 4px;
}
.profile__button {
  max-width: 250px;
  p {
    font-size: 13.0961px;
  }
}

@media (max-width: 1024px) {
  .profile__title {
    font-size: 36px;
  }

  .profile__body {
    margin: auto;
  }

  .profile__info {
    margin: auto;
  }

  .profile__img {
    margin: auto;
    margin-bottom: 51px;
  }

  .profile__name {
    text-align: center;
  }

  .profile__info {
    flex-direction: column;
    align-items: center;
    p {
      margin-right: 0px;
    }
  }
}
</style>
