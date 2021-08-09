<template>
  <div class="team">
    <div class="team__body">
      <div class="team__title">
        <h3>Моя команда</h3>
      </div>
      <div class="team__content">
        <div v-for="(item, i) in items" :key="i" class="team__item">
          <img
            :src="
              require('@/assets/img/personal_account/team/' +
                item.photoName +
                '.png' +
                '')
            "
            alt=""
          />
          <p>{{ item.name }} {{ item.surname }}</p>
          <p>{{ item.phone }}</p>
          <p>{{ item.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "team",
  data: function () {
    return {
      items: [
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item1",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item2",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item3",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item4",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item5",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item6",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item7",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item8",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item9",
          email: "Email"
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.team {
  p {
    margin-bottom: 0px;
  }
}
.team__body {
  max-width: 650px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.team__title {
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-bottom: 60px;
}

.team__content {
  display: grid;
  justify-content: center;
  justify-items: center;
  width: 100%;
  gap: 60px;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
}
.team__item {
  font-size: 15px;
  font-weight: 700;
  img {
    max-width: 100%;
    width: auto;
  }
  text-align: center;
}

@media (max-width: 600px) {
  .team__title {
    font-size: 24px;
  }
  .team__item {
    font-size: 12px;
    font-weight: 700;
    img {
      max-width: 70%;
    }
  }
}
</style>
