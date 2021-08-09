<template>
  <div class="menu">
    <div class="menu__content">
      <div class="menu__logo">
        <img src="../assets/img/menu/logo80px.png" alt="" />
      </div>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" class="menu__burger">
            <svg
              width="31"
              height="10"
              viewBox="0 0 31 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="31" height="2" fill="black" />
              <rect x="6" y="8" width="25" height="2" fill="black" />
            </svg>
          </div>
        </template>
        <v-list class="menu__items-mobile">
          
          <router-link to="/login">
            <v-list-item
              class="menu__item-mobile supline"
            >
              <v-list-item-title> Войти </v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/registry">
            <v-list-item
              class="menu__item-mobile"
            >
              <v-list-item-title> Регистрация </v-list-item-title>
            </v-list-item>
          </router-link>

          <v-list-item
              class="menu__item-mobile"
            >
              <v-list-item-title>  </v-list-item-title>
          </v-list-item>

          <a href="#main_detailed">
          <v-list-item
            class="menu__item-mobile"
          >
            <v-list-item-title> Подробнее</v-list-item-title>
          </v-list-item>
          </a>
          <a href="#main_documents">
          <v-list-item
            class="menu__item-mobile"
          >
            <v-list-item-title> Документы</v-list-item-title>
          </v-list-item>
          </a>
          <a href="#main_reviews">
          <v-list-item
            class="menu__item-mobile"
          >
            <v-list-item-title> Отзывы</v-list-item-title>
          </v-list-item>
          </a>
          <!-- <v-list-item
            class="menu__item-mobile"
            v-for="(item, index) in items"
            :key="index"
            @click="rout(item.rout)"
          >
            <v-list-item-title> <a :href="item.link">{{ item.title }}</a></v-list-item-title>
            <v-list-item-title> {{ item.title }}</v-list-item-title>
          </v-list-item> -->
        </v-list>
      </v-menu>

      <div class="menu__items">
        <!-- <div class="menu__item">
          <p>Главная</p>
        </div> -->
        <div class="menu__item">
          <a href="#main_detailed"><p>Подробнее</p></a>
        </div>
        <div class="menu__item">
          <a href="#main_documents"><p>Документы</p></a>
        </div>
        <div class="menu__item">
          <a href="#main_reviews"><p>Отзывы</p></a>
        </div>
        <div class="menu__item">
          <p></p>
        </div>
        <div class="menu__item">
          <router-link to="/login">
            <p>Войти</p>
          </router-link>
        </div>
        <div class="menu__item">
          <router-link to="/registry">
            <p>Регистрация</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu",
  data: function () {
    return {
      items: [
        { title: "Регистрация", rout: "Registry" },
        { title: "Войти", rout: "Login" },
        { title: " " },
        
        { title: "Подробнее",
          link: "#main_detailed" },
        { title: "Документы",
          link: "#main_documents" },
        { title: "Отзывы",
          link: "#main_reviews" },
      ],
    };
  },
  methods: {
    rout(name) {
        this.$router.push(name);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  margin-top: 5px;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 89.3%;
  letter-spacing: -0.005em;
  color: rgba(0, 0, 0, 0.7);
}

.menu__content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #000000;
}
.menu__logo {
  max-width: 80px;
  width: 100%;
  img {
    width: 100%;
  }
}

.menu__burger {
  display: none;
}

.menu__items {
  display: flex;
  justify-content: flex-end;
}
.menu__item {
  flex-basis: 120px;
  flex-shrink: 0;
  text-align: center;
  padding-bottom: 8px;
  position: relative;
  cursor: pointer;
  transition: 0.2s;
  color: #000000;
  a {
    color: #000000;
  }
  &:last-child {
    font-weight: bold;
  }

  &:active {
    color: #eb1717;
  }

  &:hover {
    text-shadow: 3px 8px 8px rgba(148, 148, 148, 0.41);
  }
  p {
    margin-bottom: 0px;
  }
  &::after {
    content: "";
    height: 30%;
    width: 1px;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #000000;
  }
  &:first-child {
    &::before {
      content: "";
      height: 30%;
      width: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #000000;
    }
  }
}

@media (max-width: 1120px) {
  .menu {
    // display: none;
  }
  .menu__content {
    border-bottom: none;
    align-items: center;
    position: relative;
  }
  .menu__logo {
  }

  .menu__burger {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    &:active {
      box-shadow: inset 0px 7px 7px rgba(29, 6, 6, 0.25);
    }
  }

  .menu__items {
    display: none;
  }
  .menu__item {
  }

  .menu__items-mobile {
    padding-top: 20px;
    padding-bottom: 40px;
    min-width: 100px;

    background: linear-gradient(180deg, #ffffff 0%, #e6e6e6 100%) !important;
  }

  //vuetify style

  .v-menu__content {
    width: 60%;
    box-shadow: none !important;
  }

  .v-list-item__title {
    font-size: unset;
  }
  //**************

  .supline {
    position: relative;
    &::before {
        position: absolute;
        content: "";
        width: 80%;
        height: 1px;
        right: 0px;
        top: 0px;
        border-bottom: 1px solid #696969;
      }
  }

  .menu__item-mobile {
    font-family: Century Gothic;
    text-align: right;
    position: relative;
    font-size: 14px !important;
    &::after {
      position: absolute;
      content: "";
      width: 80%;
      height: 1px;
      right: 0px;
      border-bottom: 1px solid #696969;
    }
    // &:first-child {
    //   font-weight: 700;
    //   &::before {
    //     position: absolute;
    //     content: "";
    //     width: 80%;
    //     height: 1px;
    //     right: 0px;
    //     top: 0px;
    //     border-bottom: 1px solid #696969;
    //   }
    // }
  }
}
</style>
