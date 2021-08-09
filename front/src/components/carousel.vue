<template>
  <div class="carousel">
    <div
      :class="{
        'carousel__body-rightimg': rightimg == true,
        'carousel__body-topimg': topimg == true,
      }"
      class="carousel__body"
    >
      <div class="carousel__picture">
        <img
          ref="image"
          :src="require('@/assets/img/carousel/' + photos[currentPhoto] + '')"
          alt=""
          srcset=""
        />
        <div @click="leftClick" class="carousel__button">
          <svg
            width="22"
            height="42"
            viewBox="0 0 22 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0348 0.0102463C21.5389 0.00930786 21.9483 0.417324 21.9492 0.921444C21.9496 1.16447 21.8531 1.39767 21.681 1.56933L2.24396 21.0046L21.681 40.4398C22.038 40.7967 22.038 41.3754 21.681 41.7323C21.3241 42.0892 20.7454 42.0892 20.3885 41.7323L0.30698 21.6508C-0.0493526 21.2944 -0.0493526 20.7166 0.30698 20.3601L20.3885 0.278606C20.5597 0.106861 20.7922 0.0102463 21.0348 0.0102463Z"
              fill="black"
            />
          </svg>
        </div>

        <div @click="leftClick" class="carousel__button-mobile">
          <svg
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.85235 0.755651C8.02204 0.755335 8.15984 0.892675 8.16016 1.06237C8.1603 1.14417 8.12781 1.22266 8.06988 1.28045L1.52725 7.82247L8.06988 14.3645C8.19003 14.4846 8.19003 14.6794 8.06988 14.7995C7.94974 14.9197 7.75496 14.9197 7.63481 14.7995L0.875251 8.03998C0.755308 7.92001 0.755308 7.72552 0.875251 7.60551L7.63481 0.845984C7.69242 0.788172 7.77071 0.755651 7.85235 0.755651Z"
              fill="black"
            />
          </svg>
        </div>
        <div @click="rightClick" class="carousel__button-mobile">
          <svg
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.13789 14.8855C0.968198 14.8858 0.830395 14.7484 0.830079 14.5787C0.829935 14.4969 0.862427 14.4184 0.920353 14.3607L7.46298 7.81864L0.920353 1.27664C0.800208 1.1565 0.800208 0.961719 0.920353 0.841574C1.0405 0.721429 1.23528 0.721429 1.35542 0.841574L8.11498 7.60113C8.23493 7.72111 8.23493 7.9156 8.11498 8.0356L1.35542 14.7951C1.29781 14.8529 1.21952 14.8855 1.13789 14.8855Z"
              fill="black"
            />
          </svg>
        </div>

        <div @click="rightClick" class="carousel__button">
          <svg
            width="22"
            height="42"
            viewBox="0 0 22 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.965232 41.9898C0.461112 41.9907 0.051724 41.5827 0.0507827 41.0786C0.0503548 40.8355 0.146883 40.6023 0.318974 40.4307L19.756 20.9954L0.318974 1.56022C-0.0379579 1.20329 -0.0379579 0.62463 0.318974 0.267699C0.675905 -0.0892329 1.25456 -0.0892329 1.61149 0.267699L21.693 20.3492C22.0494 20.7056 22.0494 21.2834 21.693 21.6399L1.61149 41.7214C1.44034 41.8931 1.20775 41.9898 0.965232 41.9898Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div class="carousel__text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "carousel",
  props: {
    photos: Array,
    rightimg: Boolean,
    topimg: Boolean,
  },
  data: function () {
    return {
      currentPhoto: 0,
    };
  },
  methods: {
    leftClick: function () {
      // this.transition();
      setTimeout(() => {
        if (this.currentPhoto > 0) {
          this.currentPhoto--;
        } else {
          this.currentPhoto = this.photos.length - 1;
        }
      }, 100);
    },
    rightClick: function () {
      // this.transition();
      setTimeout(() => {
        if (this.currentPhoto < this.photos.length - 1) {
          this.currentPhoto++;
        } else {
          this.currentPhoto = 0;
        }
      }, 100);
    },
    transition: function () {
      this.$refs.image.style.opacity = 0;
      // setTimeout(() => (this.$refs.image.style.opacity = 1), 500);
      this.$refs.image.style.opacity = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
}
.carousel__body {
  border: 3px solid #515151;
  display: flex;
  justify-content: space-between;
}

.carousel__body-rightimg {
  flex-direction: row-reverse;
}

.carousel__picture {
  flex-basis: 45%;
  position: relative;
  img {
    max-width: 100%;
    width: 100%;
    transition: 0.2s;
    // opacity: 1;
  }
}

.carousel__button {
  cursor: pointer;
  top: 50%;
  position: absolute;
  transform: translate(0%, -50%);
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(2) {
    left: 20px;
  }
  &:last-child {
    right: 20px;
  }
  &:hover {
    box-shadow: 3px 8px 8px rgba(148, 148, 148, 0.41);
  }
  &:active {
    box-shadow: inset 0px 7px 7px rgba(29, 6, 6, 0.25);
  }
}

.carousel__button-mobile {
  display: none;
}

.carousel__text {
  flex-basis: 55%;
  padding: 50px 50px 50px;
}

.carousel__body-topimg {
  flex-direction: column;
  .carousel__picture {
    flex-basis: unset;
  }
  .carousel__text {
    flex-basis: unset;
  }
}

@media (max-width: 1050px) {
  .carousel__body {
    flex-direction: column;
    .carousel__picture {
      flex-basis: unset;
    }
    .carousel__text {
      flex-basis: unset;
    }
  }

  .carousel__body-rightimg {
    flex-direction: column;
    .carousel__picture {
      flex-basis: unset;
    }
    .carousel__text {
      flex-basis: unset;
    }
  }
}

@media (max-width: 768px) {
  .carousel__text {
    flex-basis: 55%;
    padding: 25px 25px 25px;
  }

  .carousel__button {
    display: none;
  }
  .carousel__button-mobile {
    display: block;
    cursor: pointer;
    top: 50%;
    position: absolute;
    transform: translate(0%, -50%);
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(3) {
      left: 10px;
    }
    &:nth-child(4) {
      right: 10px;
    }
    &:hover {
      box-shadow: 3px 8px 8px rgba(148, 148, 148, 0.41);
    }
    &:active {
      box-shadow: inset 0px 7px 7px rgba(29, 6, 6, 0.25);
    }
  }
}
</style>
