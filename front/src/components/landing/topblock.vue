<template>
  <div class="topblock">
    <div class="topblock__content">
      <ibmenu
        @exit="exit"
        :authorization="authorization"
        :class="{ 'topblock__menu-black': scrollValue >= 35 }"
        class="topblock__menu"
        @toggleSideMenu="emitSideMenu"
      />
      <div class="topblock__title">
        <h4>INVEST</h4>
        <h4>BAZA</h4>
      </div>
      <div class="topblock__subtitle">
        <p>Инвестиционный фонд в юридической форме акционерного общества</p>
        <div class="topblock__extra">
          <div class="topblock__extra-img">
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="36.2793"
                y="24"
                width="17.3654"
                height="17.3654"
                transform="rotate(45 36.2793 24)"
                fill="#F3C68E"
              />
            </svg>
          </div>

          <p>Ежемесячная выплата дивидендов всем инвесторам</p>
        </div>
      </div>
      <div class="topblock__target">
        <div class="topblock__target-img">
          <svg
            width="99"
            height="105"
            viewBox="0 0 99 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                d="M56.1078 39.4923H56.1051C56.078 39.4326 56.0508 39.3729 56.0237 39.3105C56.0508 39.3729 56.078 39.4326 56.1078 39.4923Z"
                fill="#D5C478"
              />
              <path
                d="M44.0591 37.792C43.8366 38.454 43.6114 39.1132 43.389 39.7725C43.3618 39.9461 43.332 40.117 43.3049 40.2907C43.0878 40.6217 43.0146 41.0042 42.9088 41.3759C42.8572 41.4654 42.8084 41.5549 42.7596 41.6418C41.7367 41.6472 40.7139 41.6472 39.6938 41.658C39.3927 41.6608 39.1458 41.6391 39.2326 41.2348C39.3547 41.1263 39.3981 40.9906 39.3737 40.8306C39.4687 40.5159 39.5663 40.2011 39.6613 39.8837C39.6233 39.6748 39.6694 39.5093 39.9027 39.4524C39.8892 39.4089 39.8973 39.3737 39.9299 39.3438C40.3694 38.0009 40.8116 36.6552 41.2511 35.3096C42.0135 35.8169 42.5425 36.5684 43.2099 37.1707C43.4731 37.4094 43.682 37.716 44.0591 37.792Z"
                fill="#5D340F"
              />
              <path
                d="M59.1084 41.6588C58.3434 41.6588 57.581 41.6506 56.8159 41.6452C56.7237 41.6425 56.6341 41.6425 56.5419 41.6425C56.55 41.5475 56.5555 41.4526 56.5609 41.3576C56.6016 40.6902 56.1811 40.1313 56.1078 39.4911C56.078 39.4314 56.0509 39.3717 56.0237 39.3093C55.9966 39.2496 55.9722 39.1872 55.9478 39.1248C55.7958 38.7586 55.6792 38.3787 55.6222 37.9826C56.2598 37.4943 56.7237 36.835 57.2853 36.2707C57.5783 35.9777 57.8631 35.6576 58.2945 35.5518C58.4302 35.7824 58.5631 36.013 58.696 36.2436C58.8805 37.1307 59.2332 37.9609 59.5588 38.802C59.5886 38.9837 59.6158 39.1628 59.6429 39.3446C59.6619 39.4314 59.6809 39.5155 59.7026 39.5996C59.8681 39.643 59.9413 39.7434 59.9061 39.9143C59.9468 40.0499 59.9874 40.1829 60.0281 40.3185C60.02 40.3565 60.0281 40.3918 60.058 40.4216C60.427 41.6615 60.427 41.6615 59.1084 41.6588Z"
                fill="#5D340F"
              />
              <path
                d="M56.1078 39.4923H56.1051C56.078 39.4326 56.0508 39.3729 56.0237 39.3105C56.0508 39.3729 56.078 39.4326 56.1078 39.4923Z"
                fill="#5D340F"
              />
              <path
                d="M66.0402 43.9349C65.948 43.6636 65.8557 43.3896 65.7635 43.1183C65.7797 43.0695 65.7689 43.0315 65.7309 42.9962C65.6522 42.7656 65.5736 42.535 65.4976 42.3044C65.4705 42.28 65.446 42.2555 65.4243 42.2284C65.4243 42.223 65.4488 42.2013 65.4623 42.185C65.2778 41.5447 65.1123 40.8963 64.8139 40.294C64.4042 39.2142 63.9973 38.1318 63.7585 37.0004C63.6772 36.6179 63.4438 36.5039 63.1183 36.4253C61.6777 36.0726 60.237 35.709 58.7991 35.3536C58.5875 35.3021 58.3406 35.1773 58.2945 35.5517C58.4302 35.7823 58.5631 36.0129 58.696 36.2435C58.8805 37.1306 59.2332 37.9608 59.5588 38.8019C59.5886 38.9836 59.6158 39.1627 59.6429 39.3445C59.6619 39.4313 59.6809 39.5154 59.7026 39.5995C59.8681 39.6429 59.9413 39.7433 59.906 39.9142C59.9467 40.0499 59.9874 40.1828 60.0281 40.3184C60.0851 40.3537 60.1421 40.389 60.1963 40.4243C60.1502 40.4215 60.1041 40.4215 60.058 40.4215C60.4269 41.6614 60.4269 41.6614 59.1084 41.6587C58.3433 41.6587 57.581 41.6505 56.8159 41.6451C56.7237 41.6424 56.6341 41.6424 56.5419 41.6424C56.55 41.5474 56.5555 41.4525 56.5609 41.3575C56.6016 40.6901 56.1811 40.1312 56.1078 39.491H56.1051C56.078 39.4313 56.0508 39.3716 56.0237 39.3092C55.9966 39.2495 55.9722 39.1871 55.9477 39.1247C55.7958 38.7585 55.6792 38.3786 55.6222 37.9825C55.5706 37.9391 55.5218 37.8984 55.473 37.855C55.1393 36.7997 54.7893 35.747 54.4827 34.6835C54.3661 34.2874 54.149 34.1002 53.7583 34.0025C52.5782 33.7095 51.4034 33.3894 50.2314 33.0638C49.9357 32.9824 49.659 32.977 49.3687 33.0584C48.1749 33.3812 46.9812 33.7177 45.7793 34.0134C45.4022 34.1083 45.2177 34.2982 45.1038 34.6591C44.7755 35.709 44.412 36.7481 44.0593 37.7926C43.8368 38.4546 43.6116 39.1139 43.3892 39.7731C43.362 39.9468 43.3322 40.1177 43.3051 40.2913C43.088 40.6223 43.0148 41.0048 42.909 41.3765C42.8574 41.4661 42.8086 41.5556 42.7597 41.6424C41.7369 41.6478 40.7141 41.6478 39.694 41.6587C39.3929 41.6614 39.146 41.6397 39.2328 41.2354C39.3549 41.1269 39.3983 40.9913 39.3739 40.8312C39.4688 40.5165 39.5665 40.2018 39.6615 39.8844C39.6235 39.6755 39.6696 39.51 39.9029 39.453C39.8894 39.4096 39.8975 39.3743 39.9301 39.3445C40.3696 38.0015 40.8118 36.6559 41.2513 35.3102C39.5394 35.5761 37.8899 36.116 36.2051 36.4958C35.9908 36.5419 35.9175 36.6911 35.8605 36.8648C35.5295 37.8957 35.1985 38.9267 34.8648 39.9576C34.8404 40.02 34.816 40.0824 34.7916 40.1448C34.7021 40.4215 34.6125 40.6983 34.523 40.975C34.1405 42.0738 33.7634 43.1753 33.3754 44.2713C33.2913 44.5074 33.3428 44.6484 33.5517 44.7759C34.7726 45.5275 35.9908 46.2844 37.2089 47.0386L37.2279 47.0712L37.2659 47.0603C37.7569 47.3289 37.9251 47.7277 37.7569 48.2649C37.7352 48.3327 37.7135 48.4005 37.6918 48.4657C37.4585 48.954 37.369 49.4776 37.2957 50.0067C37.274 50.088 37.2523 50.1721 37.2306 50.2535C36.6392 52.3209 36.1156 54.4072 35.6353 56.5043C35.6218 56.5966 35.6082 56.6888 35.5947 56.7838C35.4644 56.9411 35.4481 57.1283 35.459 57.321C35.2067 57.9043 35.0548 58.512 35.0168 59.1468C34.9896 59.2119 34.9598 59.2771 34.93 59.3449C34.7807 59.5918 34.759 59.8712 34.74 60.1506C34.5718 60.4464 34.5556 60.7801 34.4932 61.1002C34.0265 62.3618 34.3412 63.5121 35.4237 64.505C36.6256 65.3162 37.8437 66.103 39.1867 66.6728C39.5312 67.1123 40.063 67.275 40.5188 67.5463C41.8889 68.3711 43.2617 69.1932 44.6643 69.9609C45.4049 70.3679 46.0669 70.9268 46.9107 71.1357C48.647 72.9995 51.4821 72.8883 53.053 70.8969C53.2998 70.8535 53.5196 70.7667 53.7393 70.6365C54.7974 70.0016 55.8691 69.3885 56.9326 68.7618C57.6814 68.3223 58.517 68.0238 59.141 67.3836C59.2278 67.3646 59.3282 67.3646 59.4041 67.3239C60.861 66.4883 62.3206 65.6581 63.764 64.8035C64.1926 64.5512 64.5209 64.1795 64.6864 63.6911C65.0472 63.154 65.4189 62.6168 65.2127 61.9114C65.2046 61.7757 65.1937 61.6401 65.1829 61.5044C65.153 61.442 65.1205 61.3796 65.0906 61.3145C65.0418 61.1029 64.9848 60.8886 64.9496 60.6743C64.7542 59.3883 64.4178 58.1376 64.0244 56.9032C63.8155 55.8532 63.5632 54.8114 63.2322 53.794C62.9473 52.5542 62.695 51.3062 62.2718 50.1016C62.1009 49.3691 61.9354 48.6366 61.7563 47.9041C61.6722 47.5487 61.8025 47.3642 62.1253 47.1715C63.0369 46.6344 63.9837 46.146 64.8085 45.4705C65.0527 45.3782 65.2887 45.2751 65.4271 45.0364C65.4298 45.0364 65.4677 45.0472 65.4677 45.0472C65.9778 44.8411 66.5367 44.6593 66.0402 43.9349Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M65.4975 42.3039C65.4704 42.2795 65.446 42.2551 65.4243 42.228C65.4243 42.2226 65.4487 42.2008 65.4622 42.1846C65.5002 42.2171 65.5111 42.2578 65.4975 42.3039Z"
                fill="#C6B068"
              />
              <path
                d="M60.1963 40.4251C60.1502 40.4224 60.1041 40.4224 60.0579 40.4224C60.0281 40.3926 60.0199 40.3573 60.0281 40.3193C60.0851 40.3546 60.142 40.3899 60.1963 40.4251Z"
                fill="#AB8E4B"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0.858475"
                y="0.521561"
                width="97.8533"
                height="104.422"
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
                <feGaussianBlur stdDeviation="16.2392" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.847003 0 0 0 0 0.516667 0 0 0 1 0"
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
              <linearGradient
                id="paint0_linear"
                x1="49.7851"
                y1="33"
                x2="49.7851"
                y2="72.465"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFDA9A" />
                <stop offset="1" stop-color="#F5CA69" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="topblock__target-text">
          <p>
            Цель фонда — создание надежных источников пассивного дохода
            с передачей родового капитала по наследству
          </p>
        </div>
        <div class="topblock__target-button">
          <a href="#main_detailed">
            <ibButton>
              <p>Подробнее</p>
            </ibButton>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ibButton from "../ibButton.vue";
import ibmenu from "./ibmenu.vue";
export default {
  components: {
    ibmenu,
    ibButton,
  },
  props: {
    authorization: String,
  },
  name: "topblock",
  data: function () {
    return {
      scrollValue: null,
    };
  },
  methods: {
    emitSideMenu() {
      this.$emit("toggleSideMenu");
    },
    handleScroll() {
      this.scrollValue = window.scrollY;
    },
    exit() {
      this.$emit("exit");
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.topblock__menu {
  position: fixed;
  width: 100%;
  z-index: 100;
  // background: #20203F;
  transition: 0.4s;
}

.topblock__menu-black {
  background: #20203ffa;
}

.topblock {
  // padding-top: 72px;
  p {
    margin-bottom: 0px;
  }
  // height: 800px;
  background-image: url("../../assets/img/landing/topblock/back.png");
  background-position: center center;
  background-repeat: no-repeat;
  // height: 100vh;
  padding-bottom: 50px;
}

.topblock__content {
}

.topblock__title {
  padding-top: 90px;
  // margin-top: 20px;
  text-align: center;
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 115.016px;

  letter-spacing: 0.29em;
  color: #ffffff;
  text-shadow: 0px 0px 44px rgba(255, 255, 255, 0.65);
}

.topblock__subtitle {
  max-width: 430px;
  margin: auto;
  margin-top: 20px;
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 33.5287px;
  text-align: center;
  color: #ffffff;
  position: relative;
}

.topblock__extra {
  position: absolute;
  font-family: Georgia;
  font-style: italic;
  font-weight: normal;
  font-size: 18.4457px;
  letter-spacing: -0.015em;
  color: #f3c68e;
  top: 0px;
  right: 0px;
  display: flex;
  text-align: left;
  transform: translate(80%, -70%);

  p {
    max-width: 200px;
  }
}

.topblock__extra-img {
  transform: translate(0%, -35%);
  position: relative;
  &::before {
    position: absolute;
    content: " ";
    z-index: 100;
    width: 100%;
    height: 100%;
    background: #ffdf9a;
    opacity: 0.8;
    filter: blur(50px);
  }
}

.topblock__target {
  margin: auto;
  max-width: 390px;
}
.topblock__target-img {
  // margin-bottom: 10px;
  display: flex;
  justify-content: center;
}
.topblock__target-text {
  font-family: "Museo Sans Cyrl 500";
  font-size: 17.4198px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #f3c68e;
  opacity: 0.8;
  margin-bottom: 30px;
}
.topblock__target-button {
  max-width: 290px;
  margin: auto;
}

@media (max-width: 830px) {
  .topblock__title {
    font-size: 58px;
  }

  .topblock__subtitle {
    font-size: 26px;
  }

  .topblock__extra {
    position: relative;
    transform: unset;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .topblock__extra-img {
    transform: unset;
  }
}
</style>
