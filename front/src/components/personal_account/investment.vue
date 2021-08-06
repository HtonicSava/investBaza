<template>
  <div class="investment">
    <div class="investment__body">
      <div class="investment__title">
        <h3>Мои инвестиции</h3>
      </div>
      <div class="investment__item pack">
        <div class="pack__title">
          <h3>Инвестиционный пакет</h3>
        </div>
        <div class="pack__info">
          <div class="pack__balance">
            <p>100000р</p>
          </div>
          <div class="pack__button">
            <button>
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.05678 2.50836C7.80952 2.42986 7.54554 2.57242 7.47004 2.82522C7.39709 3.06949 7.53965 3.33347 7.78371 3.40605L12.3656 4.77448L2.54802 10.0764C2.31936 10.2004 2.2357 10.4805 2.35929 10.7093C2.48288 10.9382 2.76621 11.0278 2.99507 10.9042L12.8126 5.60228L11.4412 10.1786C11.3712 10.4284 11.514 10.6927 11.7581 10.7653C12.0109 10.8408 12.2752 10.6981 12.3448 10.4485L14.0372 4.78194C14.1157 4.53467 13.9731 4.27069 13.7235 4.20111L8.05678 2.50836Z"
                  fill="#EB1717"
                />
              </svg>
            </button>
            <p>Увеличить пакет</p>
          </div>
        </div>
      </div>
      <div class="investment__item inform">
        <div class="inform__item">
          <div class="inform__title">
            <h4>Дата инвестирования</h4>
          </div>
          <div class="inform__value">0</div>
        </div>
        <div class="inform__item">
          <div class="inform__title">
            <h4>Следующее начисление</h4>
          </div>
          <div class="inform__value">0</div>
        </div>
        <div class="inform__item">
          <div class="inform__title">
            <h4>Будет начислено</h4>
          </div>
          <div class="inform__value">0</div>
        </div>
        <div class="inform__item">
          <div class="inform__title">
            <h4>Статус</h4>
          </div>
          <div class="inform__value">0</div>
        </div>
        <div class="inform__item">
          <div class="inform__title">
            <h4>Осталось дней</h4>
          </div>
          <div class="inform__value">0</div>
        </div>
        <div class="inform__item">
          <div class="inform__title">
            <h4>Уже начислено</h4>
          </div>
          <div class="inform__value">0</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "investment",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.investment {
  padding: 0px 10px;
  p {
    margin-bottom: 0px;
  }
}
.investment__body {
  max-width: 650px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.investment__title {
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-bottom: 60px;
}
.investment__item {
  margin-bottom: 35px;
}
.pack {
  width: 100%;
  background: #eb1717;
  border-radius: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 35px;
}
.pack__title {
  font-size: 25px;
  letter-spacing: -0.04em;
  margin-bottom: 20px;
}
.pack__info {
  display: flex;
  align-items: center;
}
.pack__balance {
  margin-right: 30px;
  font-size: 25px;
}
.pack__button {
  display: flex;
  align-items: center;
  font-family: Century Gothic;
  font-size: 15px;
  button {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #ffffff;
    margin-right: 12px;
    &:hover {
      box-shadow: 3px 8px 8px rgba(148, 148, 148, 0.41);
    }
    &:active {
      box-shadow: inset 0px 7px 7px rgba(29, 6, 6, 0.25);
    }
  }
}
.inform {
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(184, 180, 180, 0.151) 100%
  );
  border-radius: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 50px;
  justify-items: center;
  padding: 60px 0px;
  font-size: 15px;
  font-weight: 700;
}
.inform__item {
  text-align: center;
}
.inform__title {
}
.inform__value {
}

@media (max-width: 600px) {
  .investment {
    padding: 0px;
  }
  .investment__title {
    font-size: 24px;
    margin-bottom: 40px;
  }
  .pack__title {
    font-size: 19px;
    margin-bottom: 15px;
  }
  .pack__balance {
    margin-right: 25px;
    font-size: 15px;
  }

  .inform {
    row-gap: 30px;
    padding: 35px 0px;
    font-size: 12px;
  }
  .pack {
    width: 100%;
    background: #eb1717;
    border-radius: 20px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 10px;
    padding-top: 30px;
    padding-bottom: 25px;
  }
}
</style>
