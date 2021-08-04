<template>
  <div class="team">
    <div class="team__body">
      <div class="team__title">
        <h3>Моя команда</h3>
      </div>
      <div class="team__content">
          <div v-for="(item, i) in items" :key="i" class="team__item">
              <img :src="require('@/assets/img/personal_account/team/' + item.photoName + '.png' + '')" alt="">
              <p>{{item.name}} {{item.surname}}</p>
              <p>{{item.city}}</p>
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
             city: "Город",
             photoName: "item1"
            },
            {
             name: "Имя",
             surname: "Фамилия",
             city: "Город",
             photoName: "item2"
            },
            {
             name: "Имя",
             surname: "Фамилия",
             city: "Город",
             photoName: "item3"
            },
            {
             name: "Имя",
             surname: "Фамилия",
             city: "Город",
             photoName: "item4"
            },
            {
             name: "Имя",
             surname: "Фамилия",
             city: "Город",
             photoName: "item5"
            },
            {
             name: "Имя",
             surname: "Фамилия",
             city: "Город",
             photoName: "item6"
            },
            {
             name: "Имя",
             surname: "Фамилия",
             city: "Город",
             photoName: "item7"
            },
            {
             name: "Имя",
             surname: "Фамилия",
             city: "Город",
             photoName: "item8"
            },
            {
             name: "Имя",
             surname: "Фамилия",
             city: "Город",
             photoName: "item9"
            },
        ]
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
    img{
        max-width: 100%;
        width: auto;
    }
    text-align: center;
}
</style>
