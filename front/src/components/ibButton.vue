<template>
  <div
    @click="callback"
    class="button"
    :class="{ 'button-disabled': disabled }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ibButton",
  components: {},
  props: {
    disabled: Boolean,
  },
  data: function () {
    return {};
  },
  methods: {
    callback() {
      this.$emit("callback");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  p {
    margin-bottom: 0px;
    width: 100%;
    text-align: center;
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  min-width: 220px;
  padding: 0px 35px;
  border: 1px solid #f3c68e;
  border-radius: 30px;
  font-family: "Museo Sans Cyrl 300";
  font-size: 16px;
  letter-spacing: -0.015em;
  color: #f3c68e;
  transition: 0.3s;
  &:hover {
    border: 1px solid #10102000;
    box-shadow: 0px 4px 24px rgba(252, 184, 100, 0.253);
  }
}

.button-disabled {
  cursor: default;
  opacity: 0.3;
  &:hover {
    border: 1px solid #f3c68e;
    box-shadow: unset;
  }
}

@media (max-width: 1024px) {
}
</style>
