<template>
  <div class="news">
    <div class="news__title">
      <h3>Тех. поддержка</h3>
    </div>
    <!-- <div class="news__content">
      <div class="news__item">
        <img src="@/assets/img/personal_account/news/item1.png" alt="" />
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div class="news__item">
        <img src="@/assets/img/personal_account/news/item2.png" alt="" />
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div class="news__item">
        <img src="@/assets/img/personal_account/news/item3.png" alt="" />
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  components: {},
  name: "news",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.news {
  padding: 0px 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #000000;
}
.news__title {
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
}

.news__content {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  // flex-direction: column;
  // align-items: center;
}
.news__item {
  max-width: 220px;
  // flex-basis: 33%;
  flex-grow: 1;
  margin: 20px 10px;
  font-size: 18px;
  font-weight: 700;
  img {
    max-width: 100%;
    width: auto;
    margin-bottom: 15px;
  }
}

@media (max-width: 600px) {
  .news__title {
    font-size: 24px;
  }
}
</style>
