<template>
  <div class="sidebar">
    <div class="sidebar__container">
      <div class="sidebar__profile profile">
        <div class="profile__photo"></div>
        <div class="profile__info">
          <div class="profile__name">
            <div class="profile__checked">
              <svg
                width="36"
                height="31"
                viewBox="0 0 36 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <path
                    d="M23.6796 11.502C23.7812 11.6034 23.8617 11.7237 23.9167 11.8562C23.9717 11.9887 24 12.1307 24 12.2742C24 12.4176 23.9717 12.5597 23.9167 12.6922C23.8617 12.8247 23.7812 12.945 23.6796 13.0463L17.136 19.59C17.0346 19.6915 16.9143 19.7721 16.7818 19.8271C16.6493 19.8821 16.5073 19.9104 16.3638 19.9104C16.2204 19.9104 16.0783 19.8821 15.9458 19.8271C15.8133 19.7721 15.693 19.6915 15.5917 19.59L12.3198 16.3182C12.2184 16.2168 12.138 16.0964 12.0831 15.9639C12.0282 15.8314 12 15.6894 12 15.546C12 15.4026 12.0282 15.2606 12.0831 15.1281C12.138 14.9956 12.2184 14.8753 12.3198 14.7739C12.4212 14.6725 12.5416 14.592 12.6741 14.5372C12.8066 14.4823 12.9486 14.454 13.092 14.454C13.2354 14.454 13.3774 14.4823 13.5099 14.5372C13.6424 14.592 13.7627 14.6725 13.8641 14.7739L16.3638 17.2757L22.1353 11.502C22.2366 11.4005 22.357 11.3199 22.4895 11.2649C22.6219 11.2099 22.764 11.1816 22.9074 11.1816C23.0509 11.1816 23.1929 11.2099 23.3254 11.2649C23.4579 11.3199 23.5783 11.4005 23.6796 11.502Z"
                    fill="#F3C68E"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="0.942858"
                    y="0.124498"
                    width="34.1143"
                    height="30.843"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5.52857" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.847003 0 0 0 0 0.516667 0 0 0 0.6 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            {{ user.name }} {{ user.surname }}
          </div>
          <div v-if="curator.name" class="profile__curator">
            <p>Ваш пригласитель:</p>
            <p @click="changePage(pages[6].name)">
              <span>{{ curator.name }} {{ curator.surname }}</span>
            </p>
          </div>
        </div>
        <div class="profile__buttons">
          <div class="profile__notification">
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4975 10.2896L11.2128 8.99783V5.81472C11.2299 4.63271 10.8187 3.48442 10.0553 2.5819C9.2918 1.67937 8.22756 1.08355 7.05907 0.90446C6.38092 0.815152 5.69152 0.871497 5.03687 1.06974C4.38222 1.26797 3.77738 1.60355 3.2627 2.05406C2.74802 2.50458 2.33533 3.05968 2.05218 3.68232C1.76903 4.30497 1.62192 4.98084 1.62067 5.66484V8.99783L0.336007 10.2896C0.174644 10.4537 0.0652175 10.6617 0.0214082 10.8876C-0.0224011 11.1135 0.00135033 11.3473 0.0896932 11.5598C0.178036 11.7722 0.327051 11.954 0.518109 12.0822C0.709166 12.2105 0.93379 12.2796 1.1639 12.2808H3.56193V12.5235C3.59527 13.2481 3.91447 13.9298 4.44958 14.4195C4.9847 14.9091 5.69208 15.1666 6.41674 15.1357C7.14139 15.1666 7.84878 14.9091 8.38389 14.4195C8.91901 13.9298 9.2382 13.2481 9.27154 12.5235V12.2808H11.6696C11.8997 12.2796 12.1243 12.2105 12.3154 12.0822C12.5064 11.954 12.6554 11.7722 12.7438 11.5598C12.8321 11.3473 12.8559 11.1135 12.8121 10.8876C12.7683 10.6617 12.6588 10.4537 12.4975 10.2896ZM7.84414 12.5235C7.80456 12.8668 7.63406 13.1816 7.36815 13.4023C7.10225 13.623 6.76144 13.7326 6.41674 13.7083C6.07203 13.7326 5.73123 13.623 5.46532 13.4023C5.19942 13.1816 5.02892 12.8668 4.98934 12.5235V12.2808H7.84414V12.5235ZM1.78482 10.8534L2.62699 10.0113C2.76057 9.87849 2.86655 9.72058 2.93882 9.54664C3.01109 9.3727 3.04822 9.18618 3.04807 8.99783V5.66484C3.04846 5.18338 3.15183 4.70757 3.35125 4.26935C3.55066 3.83113 3.84151 3.44063 4.20427 3.12407C4.56213 2.79982 4.98618 2.55721 5.44706 2.41303C5.90795 2.26885 6.39466 2.22654 6.87351 2.28904C7.69889 2.42306 8.44807 2.85073 8.98313 3.49332C9.51819 4.13592 9.8031 4.95017 9.78541 5.78617V8.99783C9.78432 9.18568 9.82033 9.3719 9.89136 9.54582C9.96239 9.71973 10.0671 9.8779 10.1994 10.0113L11.0487 10.8534H1.78482Z"
                fill="#F3C68E"
              />
            </svg>
          </div>
          <div @click="exit" class="profile__exit">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.56738 4.84058V2.85193C6.56738 2.32451 6.7769 1.81869 7.14984 1.44574C7.52279 1.0728 8.02861 0.863281 8.55603 0.863281H16.5106C17.038 0.863281 17.5439 1.0728 17.9168 1.44574C18.2898 1.81869 18.4993 2.32451 18.4993 2.85193V14.7838C18.4993 15.3112 18.2898 15.8171 17.9168 16.19C17.5439 16.563 17.038 16.7725 16.5106 16.7725H8.95376C7.85553 16.7725 6.56738 15.8821 6.56738 14.7838V12.7952"
                stroke="#F3C68E"
                stroke-width="1.16668"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.3408 12.7944L15.3181 8.81714L11.3408 4.83984"
                stroke="#F3C68E"
                stroke-width="1.16668"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 8.81836H14.5228"
                stroke="#F3C68E"
                stroke-width="1.16668"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="sidebar__menu menu">
        <div class="menu__container">
          <div
            @click="changePage(pages[0].name)"
            class="menu__item"
            :class="{ 'menu__item-active': pages[0].view }"
          >
            <img src="@/assets/img/sidebar_beta/main.svg" alt="" />
            <p>Главная информация</p>
          </div>
          <div
            @click="changePage(pages[1].name)"
            class="menu__item"
            :class="{ 'menu__item-active': pages[1].view }"
          >
            <img src="@/assets/img/sidebar_beta/verification.svg" alt="" />
            <p>Верификация</p>
          </div>
          <div
            @click="changePage(pages[2].name)"
            class="menu__item"
            :class="{ 'menu__item-active': pages[2].view }"
          >
            <img src="@/assets/img/sidebar_beta/my_investments.svg" alt="" />
            <p>Мои инвестиции</p>
          </div>
          <div
            @click="changePage(pages[3].name)"
            class="menu__item"
            :class="{ 'menu__item-active': pages[3].view }"
          >
            <img src="@/assets/img/sidebar_beta/my_team.svg" alt="" />
            <p>Моя команда</p>
          </div>
          <div
            @click="changePage(pages[4].name)"
            class="menu__item"
            :class="{ 'menu__item-active': pages[4].view }"
          >
            <img src="@/assets/img/sidebar_beta/my_profile.svg" alt="" />
            <p>Мой профиль</p>
          </div>
          <div
            @click="changePage(pages[5].name)"
            class="menu__item"
            :class="{ 'menu__item-active': pages[5].view }"
          >
            <img src="@/assets/img/sidebar_beta/support.svg" alt="" />
            <p>Техническая поддержка</p>
          </div>
        </div>
      </div>
      <div class="sidebar__buttons">
        <ibButton @callback="changePage(pages[7].name)" class="sidebar__button">
          <p>Инвестировать</p>
        </ibButton>
        <ibButton @callback="changePage(pages[8].name)" class="sidebar__button">
          <p>Вывести средства</p>
        </ibButton>
      </div>
      <div class="sidebar__back">
        <router-link to="/">
              <p>Вернуться на главную</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "@/service/axios.js";
import ibButton from "../ibButton.vue";

export default {
  name: "sidebar",
  components: { ibButton },
  props: {
    pages: Array,
    user: Object,
    curator: Object,
  },
  data: function () {
    return {
      // authorization: null,
      // user: {
      //   name: null,
      //   surname: null,
      // },
      // curator: {
      //   name: null,
      //   surname: null,
      // },
      // pages: [
      //   {name: "Главаня информация",
      //   view: true},
      //   {name: "Верификация",
      //   view: false},
      //   {name: "Мои инвестиции",
      //   view: false},
      //   {name: "Моя команда",
      //   view: false},
      //   {name: "Мой профиль",
      //   view: false},
      //   {name: "Техничсекая поддержка",
      //   view: false},
      // ],
    };
  },
  methods: {
    exit() {
      localStorage.removeItem("authorization");
      this.$router.push({ name: "Login" });
    },
    changePage(page) {
      this.pages.forEach((element) => {
        element.view = false;
        if (element.name === page) {
          element.view = true;
        }
      });
      this.$emit("pages", {
        pages: this.pages,
      });
    },
    // getAthorizationFromLocal() {
    //   if (localStorage.getItem("authorization") != "undefined") {
    //     this.authorization = JSON.parse(localStorage.getItem("authorization"));
    //   }
    // },
    // authorizationQuery() {
    //   let getQuery = `profile/?authorization=${this.authorization}`;
    //   axios
    //     .get(getQuery)
    //     .then((res) => {
    //       console.log(res);
    //       this.updateAuthorization(res.data.authorization);
    //       this.user.name = res.data.first_name;
    //       this.user.surname = res.data.last_name;
    //       this.curator.name = res.data.curator_name;
    //       this.curator.surname = res.data.curator_last_name;
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    // updateAuthorization(token) {
    //   localStorage.setItem("authorization", JSON.stringify(token));
    // },
  },
  mounted() {
    // this.getAthorizationFromLocal();
    // this.authorizationQuery();
  },
};
</script>

<style lang="scss" scoped>
// font-family: "Century Gothic";
// font-family: "Padauk";

::-webkit-scrollbar { /* chrome based */
    width: 0px;  /* ширина scrollbar'a */
    background: transparent;  /* опционально */
}

.sidebar {
  min-height: 100%;
  -ms-overflow-style: none;  
  scrollbar-width: none;
  padding-top: 40px;
  padding-left: 15px;
  background: #101020;
  p {
    margin-bottom: 0px;
  }

}
.sidebar__container {
}
.sidebar__profile {
  margin-bottom: 20px;
}
.profile {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 80px;
}
.profile__photo {
  position: relative;
  flex-basis: 53px;
  height: 100%;
  margin-right: 8px;
  &::before {
    content: "";
    position: absolute;
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background: #c4c4c4;
    top: 0px;
    transform: translate(0%, -35%);
  }
}
.profile__info {
  flex-basis: 150px;
  height: 100%;
}
.profile__name {
  font-family: "Museo Sans Cyrl 300";
  font-size: 18.9789px;
  line-height: 87.8%;
  letter-spacing: -0.015em;
  color: #ffffff;
  position: relative;
  margin-bottom: 21px;
}
.profile__checked {
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translate(0%, -50%);
  font-family: "Museo Sans Cyrl 300";

  &::before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 5px;
    height: 5px;
    content: "";
    filter: blur(5px);
    background-color: rgba(255, 216, 132, 0.397);
    box-shadow: 0px 0px 11.0571px rgba(255, 216, 132, 0.6);
  }
}
.profile__curator {
  font-size: 14px;
  line-height: 87.8%;
  letter-spacing: -0.015em;
  color: #ffffff;
  opacity: 0.5;
  p {
    margin-bottom: 8px;
    span {
      cursor: pointer;
    }
  }
  span {
    margin-bottom: 11px;
    text-decoration: underline;
    color: #f3c68e;
  }
}
.profile__buttons {
  flex-basis: 42px;
  display: flex;
  justify-content: space-between;
}
.profile__notification {
  cursor: pointer;
  position: relative;
  &::before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -70%);
    border-radius: 50%;
    width: 10px;
    height: 10px;
    content: "";
    transition: 0.2s;
  }
  &:hover {
    &::before {
      filter: blur(10px);
      background-color: rgb(255, 216, 132);
      box-shadow: 0px 0px 11.0571px rgb(255, 216, 132);
    }
  }
}
.profile__exit {
  cursor: pointer;
  position: relative;
  &::before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-30%, -70%);
    border-radius: 50%;
    width: 10px;
    height: 10px;
    content: "";
    transition: 0.2s;
  }
  &:hover {
    &::before {
      filter: blur(10px);
      background-color: rgb(255, 216, 132);
      box-shadow: 0px 0px 11.0571px rgb(255, 216, 132);
    }
  }
}

.sidebar__menu {
  margin-bottom: 20px;
}
.menu {
  font-family: "Museo Sans Cyrl 300";
  font-style: normal;
  font-size: 14px;
  line-height: 76.69%;
  letter-spacing: 0.02em;
  color: #ffffff;
}
.menu__container {
  max-width: 250px;
  margin: auto;
}
.menu__item {
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    max-width: 50px;
    width: auto;
  }
  &:hover {
    background: #101020;
    box-shadow: 0px 4px 24px rgba(252, 184, 100, 0.1);
    border-radius: 30px;
  }
}

.menu__item-active {
  background: #101020;
  box-shadow: 0px 4px 24px rgba(252, 184, 100, 0.1);
  border-radius: 30px;
}

.sidebar__buttons {
  max-width: 220px;
  margin: auto;
}

.sidebar__button {
  margin-bottom: 12px;
}

.sidebar__back{
  color: #f3c68e;
  cursor: pointer;
  text-align: center;
  a{
    color: inherit;
    &:visited{
      color: inherit;
    }
  }
}

@media (max-width: 1024px) {
  .sidebar {
    background: #20203f;
    padding-right: 15px;
  }
}
</style>
