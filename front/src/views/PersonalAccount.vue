<template>
  <div class="main">
    <div class="container">
      <Links />
      <div class="content">
        <div class="content__top">
          <div class="content__conditions">
            <p>Имя Фамилия</p>
          </div>
          <div class="content__img">
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
}

.content__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  &::after{
    
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
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  padding: 19px 14px 20px;
  display: inline-block;
  margin: 60px 0px 60px 60px;
  p {
    margin-bottom: 0px;
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

  .content__conditions {
    margin: 60px 15px 60px 0px;
  }

  .content__img {
    display: block;
  }
}
</style>
