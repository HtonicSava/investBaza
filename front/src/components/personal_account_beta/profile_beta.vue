<template>
  <div>
    <div v-if="!flag_redactor" class="profile">
      <div class="profile__content">
        <div class="profile__title">
          <h3>Мой профиль</h3>
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
          <div class="profile__button">
            <ibButton v-on:callback="toggleRedactor">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.54975 11.2C2.58475 11.2 2.61975 11.1965 2.65475 11.1912L5.59825 10.675C5.63325 10.668 5.6665 10.6523 5.691 10.626L13.1093 3.20775C13.1255 3.19156 13.1383 3.17233 13.1471 3.15116C13.1559 3.12999 13.1604 3.10729 13.1604 3.08437C13.1604 3.06146 13.1559 3.03876 13.1471 3.01759C13.1383 2.99642 13.1255 2.97719 13.1093 2.961L10.2008 0.05075C10.1675 0.0175 10.1237 0 10.0765 0C10.0293 0 9.9855 0.0175 9.95225 0.05075L2.534 7.469C2.50775 7.49525 2.492 7.52675 2.485 7.56175L1.96875 10.5052C1.95173 10.599 1.95781 10.6955 1.98647 10.7864C2.01514 10.8772 2.06552 10.9597 2.13325 11.0267C2.24875 11.1388 2.394 11.2 2.54975 11.2ZM3.72925 8.148L10.0765 1.8025L11.3593 3.08525L5.012 9.43075L3.45625 9.7055L3.72925 8.148ZM13.44 12.67H0.56C0.25025 12.67 0 12.9202 0 13.23V13.86C0 13.937 0.063 14 0.14 14H13.86C13.937 14 14 13.937 14 13.86V13.23C14 12.9202 13.7498 12.67 13.44 12.67Z"
                  fill="#F3C68E"
                />
              </svg>
              <p>Редактировать профиль</p>
            </ibButton>
          </div>
          <div class="profile__referal">
            <h4>Ваша реферальная ссылка:</h4>
            <div class="profile__link">
              <p>
                {{ reflink }}
              </p>
            </div>

            <div class="profile__button">
              <ibButton v-on:callback="copyLink">
                <p>Скопировать</p>
              </ibButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="flag_redactor" class="redactor">
      <div class="redactor__content">
        <div class="redactor__title">
          <h3>Редактировать профиль</h3>
        </div>
        <div class="redactor__body">
          <div class="redactor__img"></div>
          <div class="redactor__button">
            <ibButton>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 0C3.36689 0 0 3.36689 0 7.5C0 11.6331 3.36689 15 7.5 15C11.6331 15 15 11.6331 15 7.5C15 3.36689 11.6331 0 7.5 0ZM7.5 1.15385C11.0111 1.15385 13.8462 3.98888 13.8462 7.5C13.8462 9.04597 13.2963 10.4567 12.3858 11.5565C11.89 10.1502 10.8173 9.01893 9.44711 8.46004C10.0195 7.93269 10.3846 7.17999 10.3846 6.34615C10.3846 4.75962 9.08654 3.46154 7.5 3.46154C5.91346 3.46154 4.61538 4.75962 4.61538 6.34615C4.61538 7.17999 4.98047 7.93269 5.55289 8.46004C4.18269 9.01893 3.11448 10.1502 2.61869 11.5565C1.70373 10.4567 1.15385 9.04597 1.15385 7.5C1.15385 3.98888 3.98888 1.15385 7.5 1.15385ZM7.5 4.61538C8.46454 4.61538 9.23077 5.38161 9.23077 6.34615C9.23077 7.3107 8.46454 8.07692 7.5 8.07692C6.53546 8.07692 5.76923 7.3107 5.76923 6.34615C5.76923 5.38161 6.53546 4.61538 7.5 4.61538ZM7.5 9.23077C9.46064 9.23077 11.0697 10.6235 11.4438 12.4715C10.3576 13.3323 8.99189 13.8462 7.5 13.8462C6.00811 13.8462 4.64243 13.3323 3.5607 12.4715C3.93029 10.6235 5.53936 9.23077 7.5 9.23077Z"
                  fill="#F3C68E"
                />
              </svg>
              <p>Заменить фото</p>
            </ibButton>
          </div>
          <div class="redactor__field">
            <div class="redactor__name">
              <p>Имя</p>
            </div>
            <div class="redactor__input">
              <input v-model="profile.name" type="text" />
            </div>
          </div>
          <div class="redactor__field">
            <div class="redactor__name">
              <p>Фамилия</p>
            </div>
            <div class="redactor__input">
              <input v-model="profile.surname" type="text" />
            </div>
          </div>
          <div class="redactor__field">
            <div class="redactor__name">
              <p>Номер телефона</p>
            </div>
            <div class="redactor__input">
              <input v-model="profile.phone" type="text" />
            </div>
          </div>
          <div class="redactor__field">
            <div class="redactor__name">
              <p>Email</p>
            </div>
            <div class="redactor__input">
              <input v-model="profile.email" type="text" />
            </div>
          </div>
          <div class="redactor__field">
            <div class="redactor__name">
              <p>Страна</p>
            </div>
            <div class="redactor__input">
              <input v-model="profile.country" type="text" />
            </div>
          </div>
          <div class="redactor__button">
            <ibButton v-on:callback="toggleRedactor">
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6796 0.320406C11.7812 0.421714 11.8617 0.542064 11.9167 0.674562C11.9717 0.80706 12 0.949103 12 1.09256C12 1.23601 11.9717 1.37805 11.9167 1.51055C11.8617 1.64305 11.7812 1.7634 11.6796 1.86471L5.13595 8.40835C5.03465 8.50991 4.9143 8.59049 4.7818 8.64547C4.6493 8.70045 4.50726 8.72875 4.3638 8.72875C4.22035 8.72875 4.07831 8.70045 3.94581 8.64547C3.81331 8.59049 3.69296 8.50991 3.59165 8.40835L0.319835 5.13653C0.218435 5.03512 0.138 4.91475 0.0831224 4.78226C0.0282451 4.64977 1.06842e-09 4.50778 0 4.36438C-1.06842e-09 4.22097 0.0282451 4.07898 0.0831224 3.94649C0.138 3.81401 0.218435 3.69363 0.319835 3.59223C0.421235 3.49083 0.541614 3.41039 0.6741 3.35551C0.806586 3.30064 0.948583 3.27239 1.09198 3.27239C1.23539 3.27239 1.37738 3.30064 1.50987 3.35551C1.64236 3.41039 1.76273 3.49083 1.86413 3.59223L4.3638 6.09408L10.1353 0.320406C10.2366 0.218842 10.357 0.138261 10.4895 0.0832805C10.6219 0.0282999 10.764 0 10.9074 0C11.0509 0 11.1929 0.0282999 11.3254 0.0832805C11.4579 0.138261 11.5783 0.218842 11.6796 0.320406Z"
                  fill="#F3C68E"
                />
              </svg>
              <p>Сохранить</p>
            </ibButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ibButton from "../ibButton.vue";
import axios from "@/service/axios.js";

export default {
  name: "ibprofile",
  components: { ibButton },
  props: {
    profile: Object,
  },
  data: function () {
    return {
      reflink: null,
      flag_redactor: false,
      // profile: {
      //   name: "Артём",
      //   surname: "Маликов",
      //   phone: "+7 (926) 967-33-70",
      //   email: "ArtMalikoff@gmail.com",
      //   country: "Россия",
      // },
    };
  },
  methods: {
    getAthorizationFromLocal() {
      if (localStorage.getItem("authorization") != "undefined") {
        this.authorization = JSON.parse(localStorage.getItem("authorization"));
      }
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
    toggleRedactor() {
      this.flag_redactor = !this.flag_redactor;
    },
    getTriad: function (value) {
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ") + " " + "₽";
    },
    copyLink() {
      const el = document.createElement("textarea");
      el.value = this.reflink;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
      this.buttonText = "Скопировано";
    },
  },
  computed: {},
  mounted() {
    this.getRefLink();
  },
};
</script>

<style lang="scss" scoped>
.profile,
.redactor {
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
  margin-bottom: 20px;
  max-width: 250px;
  p {
    font-size: 13.0961px;
  }
}

.profile__referal {
  font-family: "Museo Sans Cyrl 300";
  font-size: 17px;
  letter-spacing: 0.02em;

  text-shadow: 0px 0px 27.4444px rgb(255 216 132 / 60%);
  margin-bottom: 22px;
  h4 {
    color: #f3c68e;
    margin-bottom: 20px;
  }
}

.redactor__body {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(247px, 1fr));
  column-gap: 27px;
  row-gap: 23px;
  align-items: center;
}
.redactor__img {
  min-width: 215px;
  min-height: 215px;
  width: 100%;
  height: 100%;
  position: relative;
  &::before {
    content: "";
    width: 215px;
    height: 215px;
    background-color: #c4c4c4;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
  }
}
.redactor__button {
  font-size: 13px;
  max-width: 190px;
}
.redactor__field {
}
.redactor__name {
  font-family: "Museo Sans Cyrl 300";
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
  margin-bottom: 11px;
}
.redactor__input {
  background: linear-gradient(104.27deg, #29294488 20.18%, #1e1e3688 97.13%);
  mix-blend-mode: normal;
  opacity: 1;
  border-radius: 6.86111px;
  margin-bottom: 23px;
  height: 53px;
  font-family: "Museo Sans Cyrl 500";
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);

  input,
  textarea {
    padding: 14px 25px;
    width: 100%;
    height: 100%;
    border-radius: 6.86111px;
    color: #ffffff;
    opacity: 1;
    border: 1px solid #f3c68e00;
    opacity: 0.2s;
    &:focus {
      border: 1px solid #f3c68e;
    }
  }
}

.profile__link {
  margin-bottom: 20px;
  color: #ffffff;
  max-width: 250px;
  overflow: hidden;
}

// 390
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

  .profile__button {
    margin: auto;
  }

  .redactor__title {
    font-size: 36px;
  }

  .redactor__button {
    margin: auto;
    max-width: 220px;
  }
}
</style>
