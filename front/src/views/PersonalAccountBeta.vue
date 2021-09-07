<template>
  <div class="main">
    <div class="container">
      <div class="sidebar-desktop">
        <sidebar
          :user="user"
          :curator="curator"
          :pages="pages"
          @pages="changePage"
        />
      </div>

      <div class="content">
        <div class="content__mobmenu">
          <svg
            @click.stop="drawer = !drawer"
            width="38"
            height="33"
            viewBox="0 0 38 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 19H38V13.5714H0V19ZM0 32.5714H38V27.1429H0V32.5714ZM0 0V5.42857H38V0H0Z"
              fill="#FBD282"
            />
          </svg>
        </div>

        <v-navigation-drawer
          class="mobsidebar"
          v-model="drawer"
          absolute
          width="320"
          temporary
        >
          <sidebar
            :user="user"
            :curator="curator"
            :pages="pages"
            @pages="changePage"
          />
        </v-navigation-drawer>

        <ibMain v-if="pages[0].view" />
        <verification :id="user.id" v-if="pages[1].view" />
        <investment v-if="pages[2].view" />
        <team v-if="pages[3].view" />
        <profile :profile="user" v-if="pages[4].view" />
        <support v-if="pages[5].view" />
        <curator :profile="curator" v-if="pages[6].view" />
        <resourcesEnter
          @inputMoney="togglePopupInputMoney"
          v-if="pages[7].view"
        />
        <resourceOut @outMoney="togglePopupOutMoney" v-if="pages[8].view" />
      </div>
    </div>
    <popupInputMoney
      @close="togglePopupInputMoney"
      v-if="flag_popupInputMoney"
    />
    <popupOutMoney @close="togglePopupOutMoney" v-if="flag_popupOutMoney" />
  </div>
</template>

<script>
import sidebar from "@/components/personal_account_beta/sidebar_beta.vue";
import ibMain from "@/components/personal_account_beta/main_beta.vue";
import verification from "../components/personal_account_beta/verification_beta.vue";
import investment from "../components/personal_account_beta/investment_beta.vue";
import team from "../components/personal_account_beta/team_beta.vue";
import profile from "../components/personal_account_beta/profile_beta.vue";
import support from "../components/personal_account_beta/support_beta.vue";
import curator from "../components/personal_account_beta/curator.vue";
import resourcesEnter from "../components/personal_account_beta/resourcesEnter.vue";
import popupInputMoney from "../components/personal_account_beta/popupInputMoney.vue";
import resourceOut from "../components/personal_account_beta/resourcesOut.vue";
import popupOutMoney from "../components/personal_account_beta/popupOutMoney.vue";
import axios from "@/service/axios.js";

export default {
  components: {
    sidebar,
    ibMain,
    verification,
    investment,
    team,
    profile,
    support,
    curator,
    resourcesEnter,
    popupInputMoney,
    resourceOut,
    popupOutMoney,
  },
  data: function () {
    return {
      flag_popupInputMoney: false,
      flag_popupOutMoney: false,
      drawer: false,
      group: null,
      pages: [
        { name: "Главаня информация", view: true },
        { name: "Верификация", view: false },
        { name: "Мои инвестиции", view: false },
        { name: "Моя команда", view: false },
        { name: "Мой профиль", view: false },
        { name: "Техничсекая поддержка", view: false },
        { name: "Куратор", view: false },
        { name: "Инвестировать", view: false },
        { name: "Вывести средства", view: false },
      ],
      authorization: null,
      user: {
        id: null,
        name: null,
        surname: null,
        phone: null,
        country: null,
        email: null,
      },
      curator: {
        name: null,
        surname: null,
      },
      reflink: null,
    };
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    togglePopupInputMoney() {
      this.flag_popupInputMoney = !this.flag_popupInputMoney;
    },
    togglePopupOutMoney() {
      this.flag_popupOutMoney = !this.flag_popupOutMoney;
    },
    changePage(data) {
      this.pages = data.pages;
      this.drawer = false;
    },
    getAthorizationFromLocal() {
      if (localStorage.getItem("authorization") != "undefined") {
        this.authorization = JSON.parse(localStorage.getItem("authorization"));
      }
    },
    authorizationQuery() {
      this.getAthorizationFromLocal();
      let getQuery = `profile/?authorization=${this.authorization}`;
      axios
        .get(getQuery)
        .then((res) => {
          console.log(res);
          this.updateAuthorization(res.data.authorization);
          this.user.id = res.data.id
          this.user.name = res.data.first_name;
          this.user.surname = res.data.last_name;
          this.user.country = res.data.country;
          this.user.phone = res.data.phone;
          this.user.email = res.data.email;
          this.curator.name = res.data.curator_name;
          this.curator.surname = res.data.curator_last_name;
        })
        .catch((err) => {
          console.log(err);
          this.exit();
        });
    },
    updateAuthorization(token) {
      localStorage.setItem("authorization", JSON.stringify(token));
    },
    getRefLink() {
      this.getAthorizationFromLocal();
      let postQuery = "referal_link/";
      axios
        .post(postQuery, {
          authorization: this.authorization,
        })
        .then((res) => {
          console.log(res);
          this.reflink = res.data.referal_link;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    exit() {
      localStorage.removeItem("authorization");
      this.$router.push({ name: "Login" });
    },
  },
  mounted() {
    // this.getRefLink();
    this.authorizationQuery();
  },
};
</script>

<style lang="scss" scoped>
// font-family: "Century Gothic";
// font-family: "Padauk";
.main {
  background: #101020;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 320px 1fr;
  min-height: 100vh;
}

.content {
  margin-left: 15px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 70px;
  border-left: 2px solid rgba($color: #ffffff, $alpha: 0.05);
}

.content__mobmenu {
  margin-bottom: 40px;
  display: none;
}

.mobsidebar {
}

@media (max-width: 1024px) {
  .container {
    display: block;
  }

  .content {
    margin-left: 0px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
    border-left: 0px;
    padding-bottom: 20px;
  }

  .sidebar-desktop {
    display: none;
  }

  .content__mobmenu {
    display: block;
  }
}
</style>
