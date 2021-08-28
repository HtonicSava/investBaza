<template>
  <div class="team">
    <div class="team__content">
      <div class="team__title">
        <h3>Моя команда</h3>
      </div>
      <div class="team__list list">
        <div v-for="(item, i) in list" :key="i" class="list__item">
          <div class="list__img"></div>
          <div class="list__name">
            <p>{{ item.name }} {{ item.surname }}</p>
          </div>
          <div class="list__deposit">
            <p>Депозит:</p>
            <p>{{ getTriad(item.deposit) }}</p>
          </div>
          <div class="list__info">
            <p>{{ item.email }}</p>
            <p>{{ item.phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ibButton from "../ibButton.vue";

export default {
  name: "ibteam",
  components: { ibButton },
  data: function () {
    return {
      list: [
        {
          name: "Имя",
          surname: "Фамилия",
          deposit: 1000000,
          email: "Email",
          phone: "Телефон",
        },
        {
          name: "Имя",
          surname: "Фамилия",
          deposit: 1000000,
          email: "Email",
          phone: "Телефон",
        },
        {
          name: "Имя",
          surname: "Фамилия",
          deposit: 1000000,
          email: "Email",
          phone: "Телефон",
        },
        {
          name: "Имя",
          surname: "Фамилия",
          deposit: 1000000,
          email: "Email",
          phone: "Телефон",
        },
        {
          name: "Имя",
          surname: "Фамилия",
          deposit: 1000000,
          email: "Email",
          phone: "Телефон",
        },
        {
          name: "Имя",
          surname: "Фамилия",
          deposit: 1000000,
          email: "Email",
          phone: "Телефон",
        },
      ],
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
.team {
  p {
    margin-bottom: 0px;
  }
}
.team__content {
  // max-width: 560px;
}
.team__title {
  font-family: "Museo Sans Cyrl 500";
  font-size: 41.3115px;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-bottom: 59px;
}

.team__list {
}
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));
  column-gap: 36px;
  row-gap: 58px;
}
.list__item {
  padding: 40px 45px;
  background: linear-gradient(104.27deg, #15152a 20.18%, #101020 97.13%);
  mix-blend-mode: normal;
  border-radius: 5px;
}
.list__img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #c4c4c4;
  margin: auto;
  margin-bottom: 36px;
}
.list__name,
.list__deposit {
  font-family: "Museo Sans Cyrl 500";
  font-size: 17px;
  text-align: center;
  color: #f3c68e;
  text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
}

.list__name {
  margin-bottom: 20px;
}

.list__deposit {
  margin-bottom: 29px;
}
.list__info {
  font-family: "Museo Sans Cyrl 500";
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
  p {
    margin-bottom: 16px;
  }
}

@media (max-width: 1024px) {
  .team__title {
    font-size: 36px;
  }
}
</style>
