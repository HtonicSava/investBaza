<template>
  <div class="documents">
    <div class="documents__title">
      <h3>Документы</h3>
    </div>
    <div class="documents__body">
      <div class="documents__img">
          <img src="@/assets/img/landing/documents/item.png" alt="">
      </div>

      <div class="documents__download">
        <a href="http://188.225.47.84:8000/api/file/">
          <IbButton>
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 13L15 9M11 13V1V13ZM11 13L7 9L11 13Z" stroke="#F3C68E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 15L1.621 17.485C1.72915 17.9177 1.97882 18.3018 2.33033 18.5763C2.68184 18.8508 3.11501 18.9999 3.561 19H18.439C18.885 18.9999 19.3182 18.8508 19.6697 18.5763C20.0212 18.3018 20.2708 17.9177 20.379 17.485L21 15" stroke="#F3C68E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              <p>
                  Скачать договор
              </p>
          </IbButton>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import IbButton from '../ibButton.vue';
export default {
  components: {IbButton},
  name: "documents",
  data: function () {
    return {

    };
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.documents__title {
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 39.2428px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 40px;
}

.documents__body {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.documents__img {
    position: relative;
    img{
      max-width: 100%;
      width: auto;
    }
    &::before{
        top: 10%;
        position: absolute;
        width: 80%;
        height: 50%;
        content: "";
        background: #F3C68E;
        opacity: 0.6;
        filter: blur(200px);
        transform: rotate(-26.72deg);
    }

}
.documents__download {
    max-width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(50%,-50%);
}

@media (max-width: 950px){
  .documents__title{
    font-size: 28px;
  }
  .documents__body{
    flex-direction: column;
  }
  .documents__download{
    position: static;
    transform: unset;
    margin-top: 40px;
  }
  
}

</style>
