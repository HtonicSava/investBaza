<template>
  <div class="menu">
    <div class="menu__content">
      <div class="menu__logo">
        <img src="../assets/img/menu/logo.png" alt="" />
      </div>
      <div class="menu__items">
        <div class="menu__item">
          <p>Главная</p>
        </div>
        <div class="menu__item">
          <p>Подробнее</p>
        </div>
        <div class="menu__item">
          <p>Документы</p>
        </div>
        <div class="menu__item">
          <p>Отзывы</p>
        </div>
        <div class="menu__item">
          <p></p>
        </div>
        <div class="menu__item">
          <p>Войти</p>
        </div>
        <div class="menu__item">
          <p>Регистрация</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.menu {
  margin-top: 60px;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 89.3%;
  letter-spacing: -0.005em;
  color: rgba(0, 0, 0, 0.7);
}

.menu__content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #000000;
}
.menu__logo {
  max-width: 38px;
  width: 100%;
  img {
    width: 100%;
  }
}
.menu__items {
  display: flex;
  justify-content: flex-end;
}
.menu__item {
  flex-basis: 120px;
  flex-shrink: 0;
  text-align: center;
  padding-bottom: 8px;
  position: relative;
  cursor: pointer;
  transition: 0.2s;
  &:hover{
      font-weight: bold;
  }
  p {
    margin-bottom: 0px;
  }
  &::after {
    content: "";
    height: 30%;
    width: 1px;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #000000;
  }
  &:first-child {
    &::before {
      content: "";
      height: 30%;
      width: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #000000;
    }
  }
}
</style>
