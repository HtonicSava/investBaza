<template>
  <div class="reviews">
    <div class="reviews__head">
      <CusButton :up="true" />
      <div class="reviews__title">
        <h3>Отзывы</h3>
      </div>
    </div>
    <div class="reviews__content">
      <div class="reviews__item">
        <div class="reviews__img">
          <svg
            width="42"
            height="82"
            viewBox="0 0 42 82"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.691406 81.752L41.3068 41.1366L0.691406 0.521187L0.691406 81.752Z"
              fill-opacity="0.8"
            />
          </svg>

          <img src="../assets/img/reviews/item1.png" alt="" />
        </div>
        <p>Мария Кузнецова</p>
        <p>Москва</p>
      </div>
      <div class="reviews__item">
        <div class="reviews__img">
          <svg
            width="42"
            height="82"
            viewBox="0 0 42 82"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.691406 81.752L41.3068 41.1366L0.691406 0.521187L0.691406 81.752Z"
              fill-opacity="0.8"
            />
          </svg>

          <img src="../assets/img/reviews/item2.png" alt="" />
        </div>

        <p>Анжелика Субеди</p>
        <p>Санкт - Петербург</p>
      </div>
      <div class="reviews__item">
        <div class="reviews__img">
          <svg
            width="42"
            height="82"
            viewBox="0 0 42 82"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.691406 81.752L41.3068 41.1366L0.691406 0.521187L0.691406 81.752Z"
              fill-opacity="0.8"
            />
          </svg>

          <img src="../assets/img/reviews/item3.png" alt="" />
        </div>
        <p>Аркадий Васильев</p>
        <p>Вязьма</p>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "./button.vue";

export default {
  name: "reviews",
  components: {
    CusButton,
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  margin-top: 150px;
}

.reviews__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 150px;
}

.reviews__title {
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-right: 100px;
  text-align: right;
  h3 {
    width: auto;
    display: inline;
    position: relative;
  }
}

.reviews__content {
  margin: auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-evenly;
}

.reviews__item {
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    svg {
      fill: red;
    }
  }
}

.reviews__img {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  img {
    max-width: 80%;
    width: auto;
  }
  svg {
    transition: 0.5s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media (max-width: 900px) {
  .reviews {
    margin-top: 0px;
  }

  .reviews__head {
    margin-bottom: 100px;
  }

  .reviews__title {
    font-size: 30px;
    margin-right: 25px;

    h3 {
      width: auto;
      display: inline;
      position: relative;
    }
  }

  .reviews__content {
    flex-wrap: wrap;
  }

  .reviews__item {
    font-size: 16px;
    margin-bottom: 15px;
  }

  .reviews__img {
    margin-bottom: 20px;
    img {
      max-width: 90px;
      width: auto;
    }
    svg {
      display: none;
    }
  }
}
</style>
