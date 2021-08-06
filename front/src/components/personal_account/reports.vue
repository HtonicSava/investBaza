<template>
  <div class="reports">
    <div class="reports__title">
      <h3>Отчёты</h3>
    </div>
    <div class="reports__img">
      <img src="@/assets/img/personal_account/reports/item.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "reports",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.reports {
  padding: 0px 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #000000;
}
.reports__title {
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
}
.reports__img {
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    width: auto;
  }
}

@media (max-width: 600px) {
  .reports__title {
    font-size: 24px;
  }
}
</style>
