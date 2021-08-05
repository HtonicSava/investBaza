<template>
  <div class="documents">
    <div class="documents__title">
      <h3>Документы</h3>
    </div>
    <div class="documents__body">
      <div class="documents__img">
        <img
          ref="image"
          :src="require('@/assets/img/documents/' + photos[currentPhoto] + '')"
          alt=""
          srcset=""
        />
      </div>
      <div @click="leftClick" class="documents__button">
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
      <div @click="rightClick" class="documents__button">
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
      <div @click="leftClick" class="documents__button-mobile">
        <svg
          width="5"
          height="9"
          viewBox="0 0 5 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.64975 0.00268459C4.75777 0.00248241 4.8455 0.0899153 4.8457 0.197941C4.84579 0.250019 4.82511 0.299989 4.78823 0.336774L0.623146 4.50147L4.78823 8.66616C4.86472 8.74264 4.86472 8.86664 4.78823 8.94312C4.71175 9.01961 4.58775 9.01961 4.51127 8.94312L0.208079 4.63994C0.131722 4.56356 0.131722 4.43975 0.208079 4.36336L4.51127 0.0601902C4.54794 0.023387 4.59778 0.00268459 4.64975 0.00268459Z"
            fill="black"
          />
        </svg>
      </div>
      <div @click="rightClick" class="documents__button-mobile">
        <svg
          width="5"
          height="9"
          viewBox="0 0 5 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.350251 8.99732C0.242225 8.99752 0.154499 8.91008 0.154297 8.80206C0.154205 8.74998 0.17489 8.70001 0.211767 8.66323L4.37685 4.49853L0.211767 0.333844C0.135281 0.257359 0.135281 0.133361 0.211767 0.0568757C0.288252 -0.0196096 0.41225 -0.0196096 0.488735 0.0568757L4.79192 4.36006C4.86828 4.43644 4.86828 4.56025 4.79192 4.63664L0.488735 8.93981C0.45206 8.97661 0.402219 8.99732 0.350251 8.99732Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="documents__download">
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5672 11.8086C16.3283 11.8086 16.1345 12.0024 16.1345 12.2414V13.895C16.1345 14.8495 15.3579 15.6261 14.4034 15.6261H2.59658C1.64209 15.6261 0.865539 14.8495 0.865539 13.895V12.2414C0.865539 12.0024 0.671799 11.8086 0.43277 11.8086C0.19374 11.8086 0 12.0024 0 12.2414V13.895C0 15.3268 1.16483 16.4916 2.59658 16.4916H14.4034C15.8352 16.4916 17 15.3268 17 13.895V12.2414C17 12.0024 16.8063 11.8086 16.5672 11.8086Z"
            fill="black"
          />
          <path
            d="M13.9393 13.5137H3.05972C2.82076 13.5137 2.62695 13.7075 2.62695 13.9464C2.62695 14.1854 2.82069 14.3792 3.05972 14.3792H13.9392C14.1783 14.3792 14.372 14.1855 14.372 13.9464C14.372 13.7075 14.1783 13.5137 13.9393 13.5137Z"
            fill="black"
          />
          <path
            d="M12.8801 7.42494C12.7209 7.24674 12.4473 7.23124 12.269 7.39048L8.93269 10.371V1.98355C8.93269 1.74459 8.73895 1.55078 8.49992 1.55078C8.26096 1.55078 8.06715 1.74452 8.06715 1.98355V10.371L4.73084 7.39051C4.55264 7.23127 4.27904 7.24681 4.11977 7.42498C3.96059 7.60325 3.97596 7.87684 4.1542 8.03605L7.77912 11.2742C7.98454 11.4578 8.24217 11.5496 8.49989 11.5496C8.75751 11.5496 9.01517 11.4578 9.22066 11.2743L12.8456 8.03605C13.0239 7.87674 13.0393 7.60315 12.8801 7.42494Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "documents",
  data: function () {
    return {
      photos: ["document1.png", "document1.png", "document1.png"],
      currentPhoto: 0,
    };
  },
  methods: {
    leftClick: function () {
      this.transition();
      setTimeout(() => {
        if (this.currentPhoto > 0) {
          this.currentPhoto--;
        } else {
          this.currentPhoto = this.photos.length - 1;
        }
      }, 500);
    },
    rightClick: function () {
      this.transition();
      setTimeout(() => {
        if (this.currentPhoto < this.photos.length - 1) {
          this.currentPhoto++;
        } else {
          this.currentPhoto = 0;
        }
      }, 500);
    },
    transition: function () {
      this.$refs.image.style.opacity = 0;
      setTimeout(() => (this.$refs.image.style.opacity = 1), 499);
    },
  },
};
</script>

<style lang="scss" scoped>
.documents__title {
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-bottom: 170px;
  margin-left: 150px;
  h3 {
    width: auto;
    display: inline;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      top: -25px;
      left: -50%;
      width: 200%;
      height: 170%;
      border: 2px solid rgba(235, 23, 23, 0.7);
      border-radius: 50%;
      transform: rotate(-4.95deg);
    }
  }
}

.documents__body {
  position: relative;
}
.documents__img {
  display: flex;
  justify-content: center;
  img {
    max-width: 70%;
    width: auto;
  }
}

.documents__button {
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
  &:nth-child(3) {
    right: 20px;
  }
  &:hover {
    box-shadow: 3px 8px 8px rgba(148, 148, 148, 0.41);
  }
  &:active {
    box-shadow: inset 0px 7px 7px rgba(29, 6, 6, 0.25);
  }
}

.documents__button-mobile {
  display: none;
}

.documents__download {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 50px;
  width: 42px;
  height: 42px;
  background-color: #ededed;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 8px 8px rgba(148, 148, 148, 0.41);
  }
  &:active {
    box-shadow: inset 0px 7px 7px rgba(29, 6, 6, 0.25);
  }
}

@media (max-width: 900px) {
  .documents__title {
    font-size: 30px;
    margin-bottom: 100px;
    margin-left: 60px;
    h3 {
      &::before {
        top: -10px;
        left: -40%;
        width: 180%;
        height: 150%;
      }
    }
  }
}

@media (max-width: 768px) {
  .documents__img {
    img {
      max-width: 80%;
    }
  }
  .documents__button {
    display: none;
  }
  .documents__button-mobile {
    display: block;
    cursor: pointer;
    top: 50%;
    position: absolute;
    transform: translate(0%, -50%);
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(4) {
      left: 5px;
    }
    &:nth-child(5) {
      right: 5px;
    }
    &:hover {
      box-shadow: 3px 8px 8px rgba(148, 148, 148, 0.41);
    }
    &:active {
      box-shadow: inset 0px 7px 7px rgba(29, 6, 6, 0.25);
    }
  }

  .documents__download {
    right: 0px;
  }
}
</style>
