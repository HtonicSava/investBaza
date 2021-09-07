<template>
  <div class="marketing">
    <div class="marketing__title">
      <h3>Маркетинг план</h3>
    </div>
    <div class="marketing__body">
        <div class="marketing__plan">
            <div class="marketing__scheme">
                <img src="@/assets/img/landing/marketing/item1.png" alt="">
            </div>
            <div class="marketing__scheme-mobile">
                <img src="@/assets/img/landing/marketing/item1-mobile.png" alt="">
            </div>
            <div class="marketing__card-wrapper">
                <div class="card">
                    <div class="card__title">
                        <h4>Статус</h4>
                    </div>
                    <div class="card__title">
                        <h4>Личный депозит</h4>
                    </div>
                    <div class="card__title">
                        <h4>1-я линия</h4>
                    </div>
                    <div class="card__whitetext">
                        <p>M1</p>
                    </div>
                    <div class="card__goldtext">
                        <p>100 000 ₽</p>
                    </div>
                    <div class="card__goldtext">
                        <p>500 000 ₽</p>
                    </div>
                    <div class="card__whitetext">
                        <p>M2</p>
                    </div>
                    <div class="card__goldtext">
                        <p>200 000 ₽</p>
                    </div>
                    <div class="card__goldtext">
                        <p>1 000 000 ₽</p>
                    </div><div class="card__whitetext">
                        <p>M3</p>
                    </div>
                    <div class="card__goldtext">
                        <p>300 000 ₽</p>
                    </div>
                    <div class="card__goldtext">
                        <p>2 000 000 ₽</p>
                    </div><div class="card__whitetext">
                        <p>M4</p>
                    </div>
                    <div class="card__goldtext">
                        <p>400 000 ₽</p>
                    </div>
                    <div class="card__goldtext">
                        <p>5 000 000 ₽</p>
                    </div><div class="card__whitetext">
                        <p>M5</p>
                    </div>
                    <div class="card__goldtext">
                        <p>500 000 ₽</p>
                    </div>
                    <div class="card__goldtext">
                        <p>10 000 000 ₽</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="marketing__turn">
            <img src="@/assets/img/landing/marketing/item2.png" alt="">
        </div>
        <div class="marketing__turn-mobile">
            <img src="@/assets/img/landing/marketing/item2-mobile.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>

export default {

  name: "marketing",
  data: function () {
    return {

    };
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.marketing{
    p{
        margin-bottom: 0px;
    }
    padding-top: 60px;
    padding-bottom: 60px;
}

.marketing__title {
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 39.2428px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 40px;
}

.marketing__body {
    max-width: 1157px;
    width: 100%;
    margin: auto;
}

.marketing__plan {
    justify-content: center;
    display: flex;
    margin-bottom: 60px;
}
.marketing__scheme {
    img{
        max-width: 100%;
        width: auto;
    }
    flex-basis: 40%;
}
.marketing__card-wrapper {
    flex-basis: 50%;
    position: relative;
    z-index: 1;
    &::before{
        position: absolute;
        z-index: 2;
        content: "";
        right: 0;
        top: 20%;
        width: 50%;
        height: 50%;
        background: #F3C68E;
        opacity: 1;
        filter: blur(200px);
        transform: rotate(-26.72deg);
    }
}
.card {
    z-index: 3;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 53px;
    align-items: flex-start;
    background: #0D0E25;
    box-shadow: 0px 64px 84px -40px rgba(0, 0, 0, 0.85);
    border-radius: 10px;
    justify-items: center;
    padding: 70px 35px 70px;

}
.card__title {
    font-family: Georgia;
    font-style: italic;
    font-weight: normal;
    font-size: 24.408px;
    letter-spacing: -0.015em;
    color: #F3C68E;
    text-align: center;


}
.card__whitetext {
    font-family: Padauk;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    letter-spacing: -0.04em;
    color: #F6F6F6;


}
.card__goldtext {
    font-family: Georgia;
    font-style: italic;
    font-weight: normal;
    font-size: 19.2577px;
    letter-spacing: -0.015em;
    color: #F3C68E;
}

.marketing__turn{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    img{
        max-width: 100%;
        width: auto;

    }
}

.marketing__scheme-mobile{
    display: none;
}

.marketing__turn-mobile{
    display: none;
}

@media (max-width: 950px){

.marketing__title{
    font-size: 28px;
}

.marketing__plan{
    flex-direction: column;
}

.marketing__scheme-mobile{
    display: flex;
    justify-content: center;
    padding: 0px 10px;
    margin-bottom: 40px;
    img{
        max-width: 100%;
        width: auto;
    }
}

.marketing__turn-mobile{
    display: flex;
    justify-content: center;
    padding: 0px 10px;
    img{
        max-width: 100%;
        width: auto;
    }
}

.marketing__scheme{
    display: none;
}

.marketing__turn{
    display: none;
}

}

@media (max-width: 420px){
    .card{
        padding: 35px 15px;
    }
    .card__title{
        font-size: 20px;
    }
    .card__whitetext{
        font-size: 16px;
    }
    .card__goldtext{
        font-size: 16px;
    }

}

</style>
