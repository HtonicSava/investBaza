<template>
  <div class="status">
    <div class="status__body">
      <div class="status__title">
        <h3>Мой статус</h3>
      </div>
      <div class="status__content">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="status__item"
          :class="{ 'status__item-active': item.active }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "status",
  data: function () {
    return {
      items: [
        {
          active: true,
          name: "A",
        },
        {
          active: false,
          name: "B",
        },
        {
          active: false,
          name: "C",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.status {
  p {
    margin-bottom: 0px;
  }
}
.status__body {
  max-width: 650px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.status__title {
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-bottom: 90px;
}

.status__content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.status__item {
  color: #000000;
  margin-right: 90px;
  font-size: 22px;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #515151;
  border-radius: 50%;
  &:last-child {
    margin-right: 0px;
  }
}

.status__item-active {
  color: #ffffff;
  background: #eb1717;
  border-color: #eb1717;
  width: 60px;
  height: 60px;
}

@media (max-width: 600px) {
  .status__title {
    font-size: 24px;
  }
  .status__item {
    margin-right: 40px;
  }
}
</style>
