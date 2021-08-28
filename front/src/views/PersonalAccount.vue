<template>
  <div class="main">
    <div class="container">
      <Links />
      <div class="content">
        <div class="content__top">
          <div v-if="authorization" class="content__conditions">
            <p>{{ user.name }} {{ user.surname }}</p>
          </div>
          <div
            v-if="authorization && curator.name && curator.surname"
            class="content__curator"
          >
            <p>
              Наставник <span>{{ curator.name }} {{ curator.surname }}</span>
            </p>
          </div>
          <div v-if="!authorization" class="content__conditions">
            <p>Войдите в личный кабинет для доступа ко всем функциям</p>
          </div>
          <div v-if="authorization" class="content__img">
            <!-- <img src="@/assets/img/personal_account/item.png" alt="" /> -->
          </div>
        </div>

        <Main v-if="pages.Main" />
        <Verification v-if="pages.Verification" />
        <Investment v-if="pages.Investment" />
        <Team v-if="pages.Team" />
        <Status v-if="pages.Status" />
        <Finance v-if="pages.Finance" />
        <Profile v-if="pages.Profile" />
        <Reports v-if="pages.Reports" />
        <News v-if="pages.News" />
      </div>
      <Botmobilepanel @change-page="changePage" class="footer" />
      <Sidemenu @change-page="changePage" />
    </div>
  </div>
</template>

<script>
import Main from "../components/personal_account/main.vue";
import Verification from "../components/personal_account/verification.vue";
import Investment from "../components/personal_account/investment.vue";
import Team from "../components/personal_account/team.vue";
import Status from "../components/personal_account/status.vue";
import Finance from "../components/personal_account/finance.vue";
import Profile from "../components/personal_account/profile.vue";
import Reports from "../components/personal_account/reports.vue";
import News from "../components/personal_account/news.vue";
import Sidemenu from "../components/personal_account/sidemenu.vue";
import Links from "../components/personal_account/links.vue";
import Botmobilepanel from "../components/personal_account/botmobilepanel.vue";
import axios from "@/service/axios.js";

export default {
  components: {
    Main,
    Verification,
    Investment,
    Team,
    Status,
    Finance,
    Profile,
    Reports,
    News,
    Sidemenu,
    Links,
    Botmobilepanel,
  },
  data: function () {
    return {
      authorization: null,
      user: {
        name: null,
        surname: null,
      },
      curator: {
        name: null,
        surname: null,
      },
      pages: {
        Main: true,
        Verification: false,
        Investment: false,
        Team: false,
        Status: false,
        Finance: false,
        Profile: false,
        Reports: false,
        News: false,
      },
    };
  },
  methods: {
    changePage(data) {
      for (const key in this.pages) {
        this.pages[key] = false;
      }
      this.pages[data.page] = true;
    },
    getAthorizationFromLocal() {
      if (localStorage.getItem("authorization") != "undefined") {
        this.authorization = JSON.parse(localStorage.getItem("authorization"));
      }
    },
    authorizationQuery() {
      let getQuery = `profile/?authorization=${this.authorization}`;
      axios
        .get(getQuery)
        .then((res) => {
          console.log(res);
          this.updateAuthorization(res.data.authorization);
          this.user.name = res.data.first_name;
          this.user.surname = res.data.last_name;
          this.curator.name = res.data.curator_name;
          this.curator.surname = res.data.curator_last_name;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateAuthorization(token) {
      localStorage.setItem("authorization", JSON.stringify(token));
    },
  },
  mounted() {
    this.getAthorizationFromLocal();
    this.authorizationQuery();
  },
};
</script>

<style lang="scss" scoped>
// font-family: "Century Gothic";
// font-family: "Padauk";
.main {
}

.container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 135px 1fr 295px;
  height: 100vh;
}

.content {
  padding-bottom: 170px;
}

.content__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px;
}

.content__img {
  display: none;
  background-color: #cccccc;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;
  img {
    max-width: 70px;
    width: auto;
  }
  &::after {
    content: "Загрузить фото";
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.content__conditions {
  cursor: pointer;
  background: #f6f6f6;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.04em;
  color: #000000;
  padding: 19px 14px 20px;
  display: inline-block;
  // margin: 60px 0px 60px 60px;
  p {
    margin-bottom: 0px;
  }
}

.content__curator {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;

  // margin: 60px 0px 60px 60px;
  p {
    margin-bottom: 0px;
  }
  span {
    padding: 19px 14px 20px;
    display: inline-block;
    background: #f6f6f6;
    margin-left: 8px;
  }
}

@media (max-width: 1024px) {
  .container {
    grid-template-columns: unset;
    display: block;
    // position: relative;
    // grid-template-rows: 1fr, 60px;
  }

  .content {
    padding: 0px 20px 200px;
  }

  .content__top {
    flex-wrap: wrap;
    padding: 0px;
  }

  .content__conditions {
    margin: 60px 15px 60px 0px;
  }

  .content__img {
    display: block;
  }

  .content__curator {
    order: 3;
    flex-grow: 1;
    width: 100%;
    margin-bottom: 60px;
    padding-left: 14px;
  }
}
</style>
