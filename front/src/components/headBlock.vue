<template>
  <div class="headBlock">
    <div class="headBlock__content">
      <div class="headBlock__logo">
        <div class="headBlock__logoTitle">
          <h1>INVEST</h1>
          <h1>BAZA</h1>
        </div>
      </div>
      <div class="headBlock__text">
        <div class="headBlock__textTitle">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M16.8347 3.81608C16.4941 3.47769 15.9273 3.47769 15.5748 3.81608C15.2342 4.14304 15.2342 4.68721 15.5748 5.01341L21.9633 11.1464H0.882026C0.3906 11.1472 0 11.5221 0 11.9939C0 12.4657 0.3906 12.8529 0.882026 12.8529H21.9633L15.5748 18.9744C15.2342 19.3128 15.2342 19.8577 15.5748 20.1839C15.9273 20.5223 16.4949 20.5223 16.8347 20.1839L24.7356 12.5991C25.0881 12.2721 25.0881 11.7279 24.7356 11.4017L16.8347 3.81608Z"
                fill="#1E201D"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="25" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1>Ежемесячная выплата дивидендов всем инвесторам</h1>
        </div>
        <div class="headBlock__textMain">
          <p>Инвестиционный фонд в юридической форме акционерного общества</p>
          <p>
            Цель фонда-создание надежных источников пассивного дохода с
            передачей родового капитала по наследству
          </p>
        </div>
        <div class="headBlock__button">
          <CusButton :anchor="'#main_detailed'" :noLine="true" :text="'Подробнее'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "./button.vue";

export default {
  components: {
    CusButton,
  },
  name: "headBlock",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.headBlock {
  position: relative;

  width: 100%;
}

.headBlock__content {
  display: flex;
  justify-content: space-between;
  padding-top: 180px;
  width: 100%;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    width: 650px;
    height: 1px;
    background: #000000;
    top: 90px;
  }
  &::after {
    position: absolute;
    content: "";
    width: 650px;
    height: 1px;
    background: #000000;
    bottom: 0px;
    right: 40px;
  }
}

.headBlock__logo {
  background-image: url("../assets/img/headerBlock/logo.png");
  background-size: contain;
  height: 600px;
  // width: 450px;
  flex-basis: 50%;
  display: flex;
  align-items: center;
}

.headBlock__logoTitle {
  font-family: Padauk;
  font-style: normal;
  font-weight: normal;
  font-size: 130px;
  line-height: 87.19%;
  letter-spacing: -0.04em;
  color: #000000;
  h1 {
    &:last-child {
      position: relative;
      left: 46%;
    }
  }
}

.headBlock__text {
  font-family: Century Gothic;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 87.8%;
  letter-spacing: -0.015em;
  color: rgba(0, 0, 0, 0.7);
  position: relative;
  flex-basis: 50%;
  min-width: 585px;
  padding: 30px 20px 40px 0px;
  position: relative;
}

.headBlock__textTitle {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 138px;
  svg {
    min-width: 25px;
  }

  :first-child {
    margin-right: 14px;
  }
}

.headBlock__textMain {
  margin-bottom: 30px;
  width: 80%;
}

.headBlock__button {
  margin-bottom: 50px;
}

@media (max-width: 1120px) {
  .headBlock {
  }
  .headBlock__content {
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    &::before {
      position: absolute;
      content: "";
      width: 70%;
      height: 1px;
      background: #000000;
      top: 30px;
      left: 0px;
    }
    &::after {
      position: absolute;
      content: "";
      width: 70%;
      height: 1px;
      background: #000000;
      bottom: 0px;
      right: 0px;
    }
  }
  .headBlock__logo {
    background-image: none;
    flex-basis: unset;
    height: auto;
  }
  .headBlock__logoTitle {
    font-size: 60px;
    margin-bottom: 20px;
  }
  .headBlock__text {
    position: static;
    width: 70%;
    flex-basis: unset;
    min-width: unset;
    min-width: 320px;
    &::after {
      width: 50%;
    }
  }
  .headBlock__textTitle {
    margin-bottom: 60px;
  }
  .headBlock__textMain {
  }
  .headBlock__button {
  }
}
</style>
