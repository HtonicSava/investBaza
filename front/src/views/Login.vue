<template>
  <div>
    <div class="main">
      <div class="container">
        <LoginForm :login="true" class="LoginForm" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/form.vue";

export default {
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
// font-family: "Century Gothic";
// font-family: "Padauk";

.container {
  max-width: 1220px;
  padding: 0px 10px;
  width: 100%;
  margin: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.LoginForm {
  padding-top: 100px;
}
</style>
