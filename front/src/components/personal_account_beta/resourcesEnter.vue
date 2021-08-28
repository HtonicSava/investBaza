<template>
  <div>
    <div class="resources">
      <div class="resources__content">
        <div class="resources__title">
          <h3>Инвестировать</h3>
        </div>
        <div class="resources__item item">
          <div class="item__head">
            <div
              class="item__tab"
              @click="changeTab('card')"
              :class="{ 'item__tab-active': tabs.card }"
            >
              <p>Картой</p>
            </div>
            <div
              class="item__tab"
              @click="changeTab('crypt')"
              :class="{ 'item__tab-active': tabs.crypt }"
            >
              <p>Криптовалютой</p>
            </div>
          </div>
          <div v-if="tabs.card">
            <div class="item__body item__body-card">
              <div class="item__input">
                <input
                  v-model="triadMoney"
                  type="text"
                  placeholder="Введите сумму"
                />
                <svg
                  width="69"
                  height="73"
                  viewBox="0 0 69 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.2362 44.6133V41.478H28.2305V39.9796H30.2362V37.9278H28.2305V36.1758H30.2362V28.1532H34.5702C36.5835 28.1532 38.0743 28.5605 39.0425 29.375C40.0262 30.1896 40.518 31.373 40.518 32.9252C40.518 34.4929 39.9877 35.7224 38.9273 36.6138C37.8668 37.4898 36.3069 37.9278 34.2475 37.9278H32.311V39.9796H36.1148V41.478H32.311V44.6133H30.2362ZM33.9478 36.1758C35.3463 36.1758 36.4298 35.9452 37.1983 35.4842C37.9821 35.0231 38.374 34.1932 38.374 32.9944C38.374 31.9493 38.0513 31.1732 37.4058 30.666C36.7603 30.1588 35.7536 29.9053 34.3858 29.9053H32.311V36.1758H33.9478Z"
                    fill="#F3C68E"
                  />
                </svg>
              </div>
              <div class="item__card card">
                <div class="card__content">
                  <div class="card__img">
                    <svg
                      width="63"
                      height="46"
                      viewBox="0 0 63 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="63" height="46" rx="6" fill="#C1A583" />
                      <line
                        x1="21.5"
                        y1="2.18558e-08"
                        x2="21.5"
                        y2="46"
                        stroke="#B0926D"
                      />
                      <line
                        x1="41.5"
                        y1="2.18558e-08"
                        x2="41.5"
                        y2="46"
                        stroke="#B0926D"
                      />
                      <line
                        x1="42"
                        y1="15.5"
                        x2="63"
                        y2="15.5"
                        stroke="#B0926D"
                      />
                      <line
                        x1="42"
                        y1="29.5"
                        x2="63"
                        y2="29.5"
                        stroke="#B0926D"
                      />
                      <line y1="29.5" x2="21" y2="29.5" stroke="#B0926D" />
                    </svg>
                  </div>
                  <div class="card__input card__code">
                    <input type="text" placeholder="CVC код" />
                  </div>
                  <div class="card__input card__number">
                    <input type="text" placeholder="Номер карты" />
                  </div>
                  <div class="card__input card__date">
                    <input type="text" placeholder="Срок действия" />
                  </div>
                  <div class="card__input card__name">
                    <input type="text" placeholder="Имя на карте" />
                  </div>
                </div>
              </div>
            </div>
            <div class="item__footer item__footer-card">
              <input
                v-model="save"
                type="checkbox"
                class="custom-checkbox"
                id="check"
                value="yes"
              />
              <label for="check">
                <p>Сохранить карту для дальнейшего пополнения</p>
              </label>
            </div>
            <div class="item__button item__button-card">
              <ibButton
                @callback="openSuccessWindow('inputMoney')"
                class="resources__button"
              >
                <p>Инвестировать</p>
              </ibButton>
            </div>
          </div>
          <div v-if="tabs.crypt">
            <div class="item__body item__body-crypt">
              <div class="item__crypt crypt">
                <div class="crypt__title">
                  <p>Выберите криптовалюту</p>
                </div>

                <div class="crypt__items">
                  <div
                    @click="changeCrypt('BTC')"
                    class="crypt__item"
                    :class="{ 'crypt__item-active': crypts.BTC }"
                  >
                    <p>Bitcoin</p>
                    <img
                      src="@/assets/img/personal_account/crypt/BTC.png"
                      alt=""
                    />
                  </div>

                  <div
                    @click="changeCrypt('ETR')"
                    class="crypt__item"
                    :class="{ 'crypt__item-active': crypts.ETR }"
                  >
                    <p>Ethereum</p>
                    <img
                      src="@/assets/img/personal_account/crypt/ETR.png"
                      alt=""
                    />
                  </div>

                  <div
                    @click="changeCrypt('USDT')"
                    class="crypt__item"
                    :class="{ 'crypt__item-active': crypts.USDT }"
                  >
                    <p>USDT</p>
                    <img
                      src="@/assets/img/personal_account/crypt/USDT.png"
                      alt=""
                    />
                  </div>
                </div>
                <div class="item__input">
                  <input
                    v-model="enterCrypt"
                    type="text"
                    placeholder="Введите сумму"
                  />
                  <p v-if="crypts.BTC">BTC</p>
                  <p v-if="crypts.ETR">ETR</p>
                  <p v-if="crypts.USDT">USDT</p>
                </div>
                <div class="crypt__wallet">
                  <h4>Переведите на этот кошелек</h4>
                  <div class="crypt__code">
                    <p>{{ cryptCode }}</p>
                    <svg
                      @click="copyCode"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 8.09375C0 7.007 0.882 6.125 1.96875 6.125H3.65625C3.88003 6.125 4.09464 6.21389 4.25287 6.37213C4.41111 6.53036 4.5 6.74497 4.5 6.96875C4.5 7.19253 4.41111 7.40714 4.25287 7.56537C4.09464 7.72361 3.88003 7.8125 3.65625 7.8125H1.96875C1.89416 7.8125 1.82262 7.84213 1.76988 7.89488C1.71713 7.94762 1.6875 8.01916 1.6875 8.09375V16.5312C1.6875 16.6865 1.8135 16.8125 1.96875 16.8125H10.4062C10.4808 16.8125 10.5524 16.7829 10.6051 16.7301C10.6579 16.6774 10.6875 16.6058 10.6875 16.5312V14.8438C10.6875 14.62 10.7764 14.4054 10.9346 14.2471C11.0929 14.0889 11.3075 14 11.5312 14C11.755 14 11.9696 14.0889 12.1279 14.2471C12.2861 14.4054 12.375 14.62 12.375 14.8438V16.5312C12.375 17.0534 12.1676 17.5542 11.7984 17.9234C11.4292 18.2926 10.9284 18.5 10.4062 18.5H1.96875C1.44661 18.5 0.945846 18.2926 0.576634 17.9234C0.207421 17.5542 0 17.0534 0 16.5312L0 8.09375Z"
                        fill="#F3C68E"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.625 2.46875C5.625 1.382 6.507 0.5 7.59375 0.5H16.0312C17.118 0.5 18 1.382 18 2.46875V10.9062C18 11.4284 17.7926 11.9292 17.4234 12.2984C17.0542 12.6676 16.5534 12.875 16.0312 12.875H7.59375C7.07161 12.875 6.57085 12.6676 6.20163 12.2984C5.83242 11.9292 5.625 11.4284 5.625 10.9062V2.46875ZM7.59375 2.1875C7.51916 2.1875 7.44762 2.21713 7.39488 2.26988C7.34213 2.32262 7.3125 2.39416 7.3125 2.46875V10.9062C7.3125 11.0615 7.4385 11.1875 7.59375 11.1875H16.0312C16.1058 11.1875 16.1774 11.1579 16.2301 11.1051C16.2829 11.0524 16.3125 10.9808 16.3125 10.9062V2.46875C16.3125 2.39416 16.2829 2.32262 16.2301 2.26988C16.1774 2.21713 16.1058 2.1875 16.0312 2.1875H7.59375Z"
                        fill="#F3C68E"
                      />
                    </svg>
                  </div>
                  <p>
                    После перевода нажмите кнопку, чтобы подвтердить транзакцию
                  </p>
                </div>
              </div>
            </div>
            <div class="item__footer item__footer-crypt">
              <div class="item__button item__button-crypt">
                <ibButton
                  @callback="openSuccessWindow('inputMoney')"
                  class="resources__button"
                >
                  <p>Перевел криптовалюту</p>
                </ibButton>
              </div>
              <h4>После подтверджения транзакции вы получите договор</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ibButton from "../ibButton.vue";

export default {
  components: { ibButton },
  name: "resourcesEnter",

  data: function () {
    return {
      enterCrypt: "",
      enterMoney: "",
      save: false,
      cryptCode: "dafsyfu7fa7df8",
      crypts: {
        BTC: true,
        ETR: false,
        USDT: false,
      },
      tabs: {
        card: true,
        crypt: false,
      },
    };
  },
  methods: {
    copyCode() {
      const el = document.createElement("textarea");
      el.value = this.cryptCode;
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
    },

    changeCrypt(crypt) {
      for (const key in this.crypts) {
        this.crypts[key] = false;
      }
      this.crypts[crypt] = true;
    },
    changeTab(tab) {
      for (const key in this.tabs) {
        this.tabs[key] = false;
      }
      this.tabs[tab] = true;
    },
    openSuccessWindow(message) {
      this.$emit(message);
    },
    formatTriad(num) {
      return Number(num)
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
    },
    parseTriad(text) {
      return Number(text.replace(/ /g, ""));
    },
  },
  computed: {
    triadMoney: {
      get: function () {
        if (this.enterMoney !== "") {
          return this.formatTriad(this.enterMoney);
        }
      },
      set: function (newValue) {
        this.enterMoney = this.parseTriad(newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.resources {
  p {
    margin-bottom: 0px;
  }
}
.resources__content {
  // max-width: 560px;
}
.resources__title,
.redactor__title {
  font-family: "Museo Sans Cyrl 500";
  font-size: 41.3115px;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-bottom: 59px;
}

.resources__item {
}
.item {
}
.item__head {
  display: flex;
  font-family: "Museo Sans Cyrl 500";
  font-size: 16px;
  letter-spacing: -0.04em;
  color: #ffffff;
}
.item__tab {
  padding: 20px 45px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
}
.item__tab-active {
  background: #27274488;
}
.item__body {
  background: linear-gradient(#27274488 20.18%, #1e1e3300 97.13%);
  mix-blend-mode: normal;
  border-radius: 5px;
  border-top-left-radius: 0px;
  padding: 69px 60px 0px 45px;
  margin-bottom: 24px;
}

.item__body-crypt {
  margin-bottom: 40px;
}

.item__footer {
  display: flex;
  justify-content: center;
  margin-bottom: 29px;
}
.item__input {
  background: linear-gradient(104.27deg, #363652 20.18%, #262641 97.13%);
  mix-blend-mode: normal;
  opacity: 1;
  border-radius: 6.86111px;
  margin-bottom: 60px;
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
  svg,
  p {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translate(0%, -50%);
  }

  p {
    right: 15px;
    color: #f3c68e;
    text-shadow: 0px 0px 20.5333px rgba(255, 216, 132, 0.6);
  }
  position: relative;
  max-width: 386px;
}
.item__card {
}
.card {
  max-width: 500px;
  background: linear-gradient(104.27deg, #272738 20.18%, #191928 97.13%);
  mix-blend-mode: normal;
  border-radius: 20px;
  padding: 68px 45px 31px 28px;
}
.card__content {
  display: grid;
  grid-template-areas:
    "img . code"
    "num num num"
    "date name name";
  align-items: flex-end;
}
.card__img {
  grid-area: img;
  svg {
    max-width: 60px;
  }
}
.card__input {
  background: linear-gradient(104.27deg, #363652 20.18%, #262641 97.13%);
  mix-blend-mode: normal;
  opacity: 1;
  border-radius: 6.86111px;
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
.card__code {
  grid-area: code;
  max-width: 140px;
  justify-self: end;
}
.card__number {
  grid-area: num;
  margin-top: 38px;
  margin-bottom: 17px;
}
.card__date {
  grid-area: date;
  // max-width: 166px;
}
.card__name {
  grid-area: name;
  // max-width: 205px;
  justify-self: end;
  margin-left: 17px;
}

.custom-checkbox {
  margin: auto;
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-family: "Museo Sans Cyrl 500";
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
}
.custom-checkbox + label::before {
  cursor: pointer;
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #c1a582;
  border-radius: 6px;
  margin-right: 14px;
  box-shadow: inset 0px 5px 5px rgba(155, 155, 155, 0.14);
}

.custom-checkbox:checked + label::before {
  background-size: 60%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 9'%3e%3cpath fill='rgb(243,198,142)' d='M11.6796 0.320406C11.7812 0.421714 11.8617 0.542064 11.9167 0.674562C11.9717 0.80706 12 0.949103 12 1.09256C12 1.23601 11.9717 1.37805 11.9167 1.51055C11.8617 1.64305 11.7812 1.7634 11.6796 1.86471L5.13595 8.40835C5.03465 8.50991 4.9143 8.59049 4.7818 8.64547C4.6493 8.70045 4.50726 8.72875 4.3638 8.72875C4.22035 8.72875 4.07831 8.70045 3.94581 8.64547C3.81331 8.59049 3.69296 8.50991 3.59165 8.40835L0.319835 5.13653C0.218435 5.03512 0.138 4.91475 0.0831224 4.78226C0.0282451 4.64977 1.06842e-09 4.50778 0 4.36438C-1.06842e-09 4.22097 0.0282451 4.07898 0.0831224 3.94649C0.138 3.81401 0.218435 3.69363 0.319835 3.59223C0.421235 3.49083 0.541614 3.41039 0.6741 3.35551C0.806586 3.30064 0.948583 3.27239 1.09198 3.27239C1.23539 3.27239 1.37738 3.30064 1.50987 3.35551C1.64236 3.41039 1.76273 3.49083 1.86413 3.59223L4.3638 6.09408L10.1353 0.320406C10.2366 0.218842 10.357 0.138261 10.4895 0.0832805C10.6219 0.0282999 10.764 0 10.9074 0C11.0509 0 11.1929 0.0282999 11.3254 0.0832805C11.4579 0.138261 11.5783 0.218842 11.6796 0.320406Z'/%3e%3c/svg%3e");
  background-position: center center;
}

.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: #ffbeb3;
}

.resources__button {
  max-width: 268px;
}

.item__button-card,
.item__footer-crypt {
  margin-left: 45px;
}

.item__crypt {
}
.crypt {
}

.crypt__title {
  margin-bottom: 27px;
  font-family: "Museo Sans Cyrl 500";
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
}

.crypt__items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 465px;
  // flex-wrap: wrap;
  margin-bottom: 59px;
}
.crypt__item {
  cursor: pointer;
  background: linear-gradient(104.27deg, #272738 20.18%, #191928 97.13%);
  mix-blend-mode: normal;
  border-radius: 5px;
  width: 135px;
  height: 95px;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: "Museo Sans Cyrl 500";
  font-size: 16px;
  letter-spacing: -0.04em;
  color: #ffffff;
  transition: 0.2s;
  position: relative;
  p {
    width: 100%;
  }
  img {
    max-width: 100%;
    width: auto;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.crypt__item-active {
  color: #101020;
  background: linear-gradient(121.86deg, #f9d7ae 8.91%, #bf9561 102.82%);
}

.crypt__wallet {
  font-family: "Museo Sans Cyrl 500";
  letter-spacing: 0.02em;

  h4 {
    font-size: 17px;
    color: #f3c68e;
    text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
    margin-bottom: 40px;
  }

  p {
    color: #ffffff;
    opacity: 0.5;
    text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
    font-size: 14px;
  }
}
.crypt__code {
  position: relative;
  width: max-content;
  p {
    color: #ffffff;
    text-shadow: 0px 0px 55.1837px rgba(255, 216, 132, 0.6);
    font-size: 24px;
    margin-bottom: 44px;
    opacity: 1;
  }
  svg {
    cursor: pointer;
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translate(150%, -50%);
  }
}

.item__footer-crypt {
  display: block;
  h4 {
    margin-top: 45px;
    font-family: "Museo Sans Cyrl 500";
    letter-spacing: 0.02em;
    color: #ffffff;
    opacity: 0.5;
    text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
    font-size: 14px;
  }
}
.item__button {
}
.item__button-crypt {
}

@media (max-width: 1024px) {
  .resources__title {
    font-size: 36px;
  }

  .resources__item {
    margin: auto;
  }

  @media (max-width: 600px) {
    .item__body {
      padding: 20px 5px 0px 5px;
    }

    .item__body-crypt {
      padding: 20px 20px 0px 20px;
    }

    .card__content {
      display: grid;
      grid-template-areas:
        "img . code"
        "num num num"
        "date date date"
        "name name name";
      align-items: flex-end;
    }
    .card__date {
      margin-bottom: 17px;
    }

    .card__name {
      margin-left: 0px;
      justify-self: unset;
    }

    .card {
      // padding: 10px;
    }

    .item__tab {
      padding: 20px 20px;
    }

    .item__button-card {
      margin-left: 5px;
    }
    .item__footer-crypt {
      margin-left: 20px;
    }

    .crypt__items {
      flex-direction: column;
      align-items: center;
      margin-bottom: 0px;
    }
    .crypt__item {
      margin-bottom: 35px;
      width: 80%;
    }
  }
}
</style>
