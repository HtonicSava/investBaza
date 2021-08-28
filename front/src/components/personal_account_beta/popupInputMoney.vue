<template>
  <div class="popup">
    <div v-click-outside="close" class="popup__message message">
      <div @click="close" class="message__close">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 1.8375L19.1625 0L10.5 8.6625L1.8375 0L0 1.8375L8.6625 10.5L0 19.1625L1.8375 21L10.5 12.3375L19.1625 21L21 19.1625L12.3375 10.5L21 1.8375Z"
            fill="#F3C68E"
          />
        </svg>
      </div>
      <div class="message__title">
        <h4>Поздравляем вас с инвестицией!</h4>
      </div>
      <div class="message__subtitle">
        <p>Скачайте ваш договор</p>
      </div>
      <div class="message__button">
        <ibButton>
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.25489 8.42482L9.75685 5.92286M7.25489 8.42482V0.918945V8.42482ZM7.25489 8.42482L4.75293 5.92286L7.25489 8.42482Z"
              stroke="#F3C68E"
              stroke-width="1.25098"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 9.67651L1.38843 11.2309C1.45608 11.5015 1.61224 11.7418 1.83211 11.9134C2.05197 12.0851 2.32292 12.1784 2.60188 12.1785H11.9079C12.1869 12.1784 12.4578 12.0851 12.6777 11.9134C12.8975 11.7418 13.0537 11.5015 13.1214 11.2309L13.5098 9.67651"
              stroke="#F3C68E"
              stroke-width="1.25098"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Скачать договор</p>
        </ibButton>
      </div>
      <div class="message__img">
        <img src="@/assets/img/personal_account/popup/item.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import ibButton from "../ibButton.vue";

export default {
  components: { ibButton },
  name: "popupInputMoney",

  data: function () {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.popup {
  background-color: #00000088;
  width: 100%;
  // min-height: 100vh;
  height: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 0px;
  }
}
.popup__message {
}
.message {
  background: linear-gradient(
    115.27deg,
    #21213a 9.04%,
    #161623 94.16%,
    #171735 99.84%
  );
  border-radius: 5px;
  padding: 40px 5px 0px;
  max-width: 500px;
  height: 480px;
  position: relative;
  transform: translate(0%, -10%);
  &::after {
    z-index: 2;
    position: absolute;
    content: "";
    width: 50%;
    height: 70%;
    top: 40%;
    left: 30%;
    background: #f3c68e;
    opacity: 0.5;
    filter: blur(150px);
    transform: rotate(-26.72deg);
  }
}

.message__close {
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
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

.message__title {
  font-family: "Museo Sans Cyrl 700";
  font-style: normal;
  font-size: 32px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-bottom: 20px;
  padding: 0px 20px;
}
.message__subtitle {
  font-family: "Museo Sans Cyrl 300";
  font-size: 14px;
  letter-spacing: -0.04em;
  color: #ffffff;
  text-align: center;
  margin-bottom: 27px;
}
.message__button {
  margin: auto;
  position: relative;
  z-index: 3;
  max-width: 205px;
}
.message__img {
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    width: auto;
  }
  position: absolute;
  top: 60%;
  z-index: 1;
}

@media (max-width: 1024px) {
  .message__title {
    font-size: 26px;
  }
}
</style>
