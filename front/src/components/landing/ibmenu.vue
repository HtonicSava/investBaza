<template>
  <div class="menu">
    <div class="menu__content">
      <div class="menu__logo">
        <img src="@/assets/img/landing/menu/item.png" alt="" />
      </div>
      <div class="menu__items">
        <div class="menu__items-nav">
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
            <a target="_blank" href="https://www.instagram.com/invest.baza/">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 4.47266C6.72738 4.47266 4.47168 6.72836 4.47168 9.50098C4.47168 12.2736 6.72738 14.5293 9.5 14.5293C12.2726 14.5293 14.5283 12.2736 14.5283 9.50098C14.5283 6.72836 12.2726 4.47266 9.5 4.47266ZM9.5 13.416C7.34128 13.416 5.58496 11.6597 5.58496 9.50098C5.58496 7.34225 7.34128 5.58594 9.5 5.58594C11.6589 5.58594 13.415 7.34225 13.415 9.50098C13.415 11.6597 11.6589 13.416 9.5 13.416Z"
                  fill="#F9CF77"
                />
                <path
                  d="M17.0855 1.91447C15.8511 0.679855 14.2158 0 12.4812 0H6.51878C4.78421 0 3.14893 0.679855 1.91447 1.91447C0.679855 3.14893 0 4.78421 0 6.51878V12.4811C0 14.2158 0.679855 15.8511 1.91447 17.0855C3.14893 18.3201 4.78421 19 6.51878 19H12.4812C14.2158 19 15.8511 18.3201 17.0855 17.0855C18.3201 15.8511 19 14.2158 19 12.4811V6.51878C19 4.78421 18.3201 3.14893 17.0855 1.91447ZM17.8867 12.4811C17.8867 15.4617 15.4617 17.8867 12.4812 17.8867H6.51878C3.53829 17.8867 1.11328 15.4617 1.11328 12.4811V6.51878C1.11328 3.53829 3.53829 1.11328 6.51878 1.11328H12.4812C15.4617 1.11328 17.8867 3.53829 17.8867 6.51878V12.4811Z"
                  fill="#F9CF77"
                />
                <path
                  d="M14.6771 3.76562C14.5304 3.76562 14.3869 3.82535 14.2833 3.92899C14.1798 4.03249 14.1205 4.17615 14.1205 4.32227C14.1205 4.46882 14.1798 4.61247 14.2833 4.71597C14.3869 4.81962 14.5304 4.87891 14.6771 4.87891C14.8232 4.87891 14.9669 4.81962 15.0704 4.71597C15.1739 4.61247 15.2338 4.46882 15.2338 4.32227C15.2338 4.17615 15.1739 4.03249 15.0704 3.92899C14.9669 3.82549 14.8232 3.76562 14.6771 3.76562Z"
                  fill="#F9CF77"
                />
              </svg>
            </a>
          </div>
        </div>
        <div v-if="!authorization" class="menu__items-personal">
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
        <div v-else class="menu__items-personal">
          <div class="menu__item">
            <p @click="exit">Выйти</p>
          </div>
          <div class="menu__item">
            <router-link to="/personal_beta">
              <p>Мой профиль</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="menu__content-mobile">
      <div class="menu__nav-mobile">
        <div @click="toggleSideMenu" class="menu__burger-mobile">
          <svg
            width="38"
            height="34"
            viewBox="0 0 38 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 19.7148H38V14.2863H0V19.7148ZM0 33.2863H38V27.8577H0V33.2863ZM0 0.714844V6.14342H38V0.714844H0Z"
              fill="#FBD282"
            />
          </svg>
        </div>
        <div class="menu__logo-mobile">
          <img src="@/assets/img/landing/menu/item.png" alt="" />
        </div>
        <div class="menu__inst-mobile">
          <a target="_blank" href="https://www.instagram.com/invest.baza/">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 7.77148C11.6844 7.77148 7.7666 11.6893 7.7666 16.5049C7.7666 21.3205 11.6844 25.2383 16.5 25.2383C21.3156 25.2383 25.2334 21.3205 25.2334 16.5049C25.2334 11.6893 21.3156 7.77148 16.5 7.77148ZM16.5 23.3047C12.7506 23.3047 9.7002 20.2542 9.7002 16.5049C9.7002 12.7555 12.7506 9.70508 16.5 9.70508C20.2496 9.70508 23.2998 12.7555 23.2998 16.5049C23.2998 20.2542 20.2496 23.3047 16.5 23.3047Z"
                fill="#F9CF77"
              />
              <path
                d="M29.6749 3.32513C27.5308 1.1808 24.6906 0 21.6779 0H11.3221C8.30942 0 5.4692 1.1808 3.32513 3.32513C1.1808 5.4692 0 8.30942 0 11.3221V21.6777C0 24.6906 1.1808 27.5308 3.32513 29.6749C5.4692 31.8192 8.30942 33 11.3221 33H21.6779C24.6906 33 27.5308 31.8192 29.6749 29.6749C31.8192 27.5308 33 24.6906 33 21.6777V11.3221C33 8.30942 31.8192 5.4692 29.6749 3.32513ZM31.0664 21.6777C31.0664 26.8545 26.8545 31.0664 21.6779 31.0664H11.3221C6.14545 31.0664 1.93359 26.8545 1.93359 21.6777V11.3221C1.93359 6.14545 6.14545 1.93359 11.3221 1.93359H21.6779C26.8545 1.93359 31.0664 6.14545 31.0664 11.3221V21.6777Z"
                fill="#F9CF77"
              />
              <path
                d="M25.4919 6.54297C25.2372 6.54297 24.9879 6.6467 24.8079 6.82671C24.6281 7.00648 24.5251 7.25598 24.5251 7.50977C24.5251 7.76431 24.6281 8.01381 24.8079 8.19357C24.9879 8.37359 25.2372 8.47656 25.4919 8.47656C25.7457 8.47656 25.9952 8.37359 26.175 8.19357C26.3548 8.01381 26.4587 7.76431 26.4587 7.50977C26.4587 7.25598 26.3548 7.00648 26.175 6.82671C25.9952 6.64695 25.7457 6.54297 25.4919 6.54297Z"
                fill="#F9CF77"
              />
            </svg>
          </a>
        </div>
      </div>

      <div v-if="!authorization" class="menu__pa-mobile">
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
      <div v-else class="menu__pa-mobile">
        <div class="menu__item">
          <p @click="exit">Выйти</p>
        </div>
        <div class="menu__item">
          <router-link to="/personal_beta">
            <p>Мой профиль</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ibmenu",
  props: {
    authorization: String,
  },
  data: function () {
    return {
      items: [
        { title: "Регистрация", rout: "Registry" },
        { title: "Войти", rout: "Login" },
        { title: " " },

        { title: "Подробнее", link: "#main_detailed" },
        { title: "Документы", link: "#main_documents" },
        { title: "Отзывы", link: "#main_reviews" },
      ],
    };
  },
  methods: {
    rout(name) {
      this.$router.push(name);
    },
    toggleSideMenu() {
      this.$emit("toggleSideMenu");
    },
    exit() {
      this.$emit("exit");
    },
  },
  created() {
    console.log(this.authorization);
  },
};
</script>

<style lang="scss" scoped>
.menu {
  // position: fixed;
  // width: 100%;
  margin-top: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 89.3%;
  letter-spacing: -0.005em;
  color: rgba(0, 0, 0, 0.7);
  p {
    margin-bottom: 0px;
  }
  a {
    color: inherit;
    text-decoration: none;
    &:visited {
      text-decoration: none;
      color: inherit;
    }
  }
}

.menu__content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1180px;
  margin: auto;
  padding: 0px 10px;
}
.menu__logo {
  margin-right: 72px;
  max-width: 80px;
  width: 100%;
  img {
    width: 100%;
  }
}

.menu__items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.menu__items-nav,
.menu__items-personal {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu__items-nav {
  max-width: 423px;
  width: 100%;
  font-family: "Museo Sans Cyrl 500";
  font-size: 16px;
  letter-spacing: -0.005em;
  color: #ffffff;
}

.menu__items-personal {
  max-width: 202px;
  width: 100%;
  font-family: "Museo Sans Cyrl 500";
  font-size: 16px;
  letter-spacing: -0.005em;
  color: #fcd487;
  .menu__item {
    &:last-child {
      font-family: "Museo Sans Cyrl 900";
      font-weight: bold;
    }
  }
}

.menu__item {
  cursor: pointer;
  &:hover {
    text-shadow: 3px 4px 4px rgba(165, 165, 165, 0.678);
  }
}

.menu__content-mobile {
  display: none;
  justify-content: space-between;
  align-items: center;
  max-width: 1180px;
  margin: auto;
  padding: 0px 10px;
}

.menu__nav-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
  width: 100%;
}

.menu__burger-mobile {
}
.menu__logo-mobile {
}
.menu__inst-mobile {
}
.menu__pa-mobile {
  max-width: 202px;
  width: 100%;
  font-family: "Museo Sans Cyrl 500";
  font-size: 16px;
  letter-spacing: -0.005em;
  color: #fcd487;
  display: flex;
  justify-content: space-between;
  .menu__item {
    &:last-child {
      font-family: "Museo Sans Cyrl 900";
      font-weight: bold;
    }
  }
}

@media (max-width: 830px) {
  .menu__content {
    display: none;
  }

  .menu__content-mobile {
    display: flex;
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

@media (max-width: 460px) {
  .menu__nav-mobile {
    max-width: 130px;
  }
  .menu__pa-mobile {
    font-size: 14px;
    max-width: 150px;
  }
  .menu__logo-mobile {
    width: 50px;
    img {
      max-width: 100%;
      width: auto;
    }
  }
}
</style>
