<template>
  <div class="instagram">
    <div class="instagram__body">
      <div class="instagram__img">
        <img src="@/assets/img/landing/instagram/item.png" alt="" />
      </div>
      <div class="instagram__text">
        <div class="instagram__title">
          <h4>Наш инстаграм</h4>
        </div>
        <div class="instagram__subtitle">
          <h4>@Invest.Baza</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IbButton from "../ibButton.vue";
export default {
  components: { IbButton },
  name: "instagram",
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.instagram {
  padding-top: 60px;
  padding-bottom: 60px;
}
.instagram__title {
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 39.2428px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
}

.instagram__text {
  margin-left: 60px;
}

.instagram__body {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.instagram__img {
  position: relative;
  &::before {
    top: 30%;
    position: absolute;
    width: 80%;
    height: 50%;
    content: "";
    background: #f3c68e;
    opacity: 0.7;
    filter: blur(150px);
    transform: rotate(-26.72deg);
  }
}
.instagram__subtitle {
  font-family: Georgia;
  font-style: italic;
  font-weight: normal;
  font-size: 52.9997px;
  line-height: 145.8%;
  /* identical to box height, or 77px */

  letter-spacing: -0.015em;

  color: #f3c68e;
}

@media (max-width: 740px) {
  .instagram__body {
    flex-direction: column;
  }
  .instagram__text {
    margin-left: 0px;
  }
  .instagram__title {
    font-size: 28px;
    text-align: center;
  }
  .instagram__subtitle {
    text-align: center;
    font-size: 22px;
  }
}
</style>
