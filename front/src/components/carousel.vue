<template>
  <div class="carousel">
    <div class="carousel__body">
      <div  class="carousel__picture">
        <img
          ref="image"
          :src="require('@/assets/img/carousel/' + photos[currentPhoto] + '')"
          alt=""
          srcset=""
        />
            <div @click="leftClick" class="carousel__button" >
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
        <div  @click="rightClick" class="carousel__button">
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
  },
  data: function () {
    return {
      currentPhoto: 1,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require(pic);
    },
    leftClick: function() {
        this.transition()
        setTimeout(() => {
        if (this.currentPhoto > 0) {
            this.currentPhoto--
        } else{
            this.currentPhoto = this.photos.length - 1
        }
        }, 500);

        

    },
    rightClick: function() {

        this.transition()
        setTimeout(() => {
            if (this.currentPhoto < this.photos.length - 1) {
            this.currentPhoto++
        } else{
            this.currentPhoto = 0
        }
        }, 500);
        
        
    },
    transition: function() {
        // this.$refs.image.style.transition = 'none'
        this.$refs.image.style.opacity = 0
        // this.$refs.image.style.transition = '0.2s'
        // this.$refs.image.style.transition = '0.5s'
        setTimeout(() => this.$refs.image.style.opacity = 1, 499);
        

    }
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  height: 750px;
}
.carousel__body {
  border: 3px solid #515151;
  display: flex;
  justify-content: space-between;
}
.carousel__picture {
  flex-basis: 50%;
  position: relative;
  img {
    max-width: 100%;
    width: auto;
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

.carousel__text {
  flex-basis: 50%;
  padding: 110px 50px 0px;
}
</style>
