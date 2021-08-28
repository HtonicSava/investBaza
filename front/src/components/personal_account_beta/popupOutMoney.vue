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
        <h4>Благодарим за вывод средств!</h4>
      </div>
      <div class="message__subtitle">
        <p>Средства поступят вам в течение трех рабочих дней</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popupOutMoney",

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
  height: 270px;
  position: relative;
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

@media (max-width: 1024px) {
  .message__title {
    font-size: 26px;
  }
}
</style>
