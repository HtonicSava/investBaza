<template>
  <div>
    <div class="main">
      <div class="container">
        <RegForm :login="false" class="RegForm" />
      </div>
    </div>
  </div>
</template>

<script>
import RegForm from "../components/form.vue";

export default {
  components: {
    RegForm,
  },
};
</script>

<style lang="scss" scoped>
// font-family: "Century Gothic";
// font-family: "Padauk";

.main {
  padding: 200px 0px;
  background: #25253a;
}

.container {
  max-width: 1220px;
  padding: 0px 10px;
  width: 100%;
  margin: auto;
  //   height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.RegForm {
  padding-top: 80px;
}
</style>
