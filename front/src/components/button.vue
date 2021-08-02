<template>
  <div :class="{ 'button-red': color === 'red', button: color != 'red', 'disabled': disabled === true }">
    <div v-if="up === false" class="button__body">
      <button v-on:click="disabled ? '' : $emit('cus-click')">
        <svg
          width="35"
          height="25"
          viewBox="0 0 35 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.1101 0.51257C22.6441 0.0302339 21.8684 0.0302339 21.3861 0.51257C20.92 0.978611 20.92 1.75426 21.3861 2.21921L30.1279 10.961H1.28115C0.608699 10.9621 0.0742188 11.4966 0.0742188 12.169C0.0742188 12.8415 0.608699 13.3933 1.28115 13.3933H30.1279L21.3861 22.1188C20.92 22.6012 20.92 23.3779 21.3861 23.8429C21.8684 24.3252 22.6452 24.3252 23.1101 23.8429L33.9214 13.0316C34.4037 12.5655 34.4037 11.7899 33.9214 11.3249L23.1101 0.51257Z"
          />
        </svg>
      </button>
    </div>
    <div
      v-if="up === false"
      class="button__text"
      :class="{ noLine: noLine === true }"
    >
      <h4>
        {{ text }}
      </h4>
    </div>
    <button v-if="up === true" v-on:click="$emit('cus-click')">
      <div class="button__bodyUp">
        <svg
          width="25"
          height="35"
          viewBox="0 0 25 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.494565 11.937C0.0122285 12.403 0.0122285 13.1787 0.494565 13.661C0.960606 14.1271 1.73625 14.1271 2.20121 13.661L10.943 4.91923L10.943 33.766C10.9441 34.4384 11.4786 34.9729 12.151 34.9729C12.8235 34.9729 13.3753 34.4384 13.3753 33.766L13.3753 4.91923L22.1008 13.661C22.5832 14.1271 23.3599 14.1271 23.8249 13.661C24.3072 13.1787 24.3072 12.402 23.8249 11.937L13.0136 1.12572C12.5475 0.643389 11.7719 0.643389 11.3069 1.12572L0.494565 11.937Z"
            fill="#1E201D"
          />
        </svg>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "button",
  props: {
    color: String,
    text: String,
    up: Boolean,
    noLine: Boolean,
    disabled: Boolean,
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.button {
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 87.8%;
  letter-spacing: -0.015em;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  .button__body {
    button {
      svg {
        fill: #1e201d;
      }
    }
  }
}

.button__body {
  width: 86px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  border-radius: 50%;
  margin-right: 8px;
  button {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    &:hover {
      box-shadow: 3px 8px 8px rgba(148, 148, 148, 0.41);
    }
    &:active {
      box-shadow: inset 0px 7px 7px rgba(29, 6, 6, 0.25);
    }
  }
  svg {
    transform: rotate(-28.37deg);
  }
}

.button__text {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 1px;
    right: -10px;
    bottom: -70%;
    background: #c4c4c4;
  }
}

.noLine {
  &::after {
    content: none;
  }
}

.button__bodyUp {
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 0px;
  border: 1px solid #000000;
  border-radius: 50%;
  transform: rotate(25.6deg);
  svg {
    transform: rotate(-25.6deg);
  }
  &:hover {
    box-shadow: 3px 8px 8px rgba(148, 148, 148, 0.41);
  }
  &:active {
    box-shadow: inset 0px 7px 7px rgba(29, 6, 6, 0.25);
  }
}

.button-red {
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 87.8%;
  letter-spacing: -0.015em;
  color: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  .button__body {
    border: 1px solid #eb1717;
    button {
      background-color: #eb1717;
      svg {
        fill: #ffffff;
      }
    }
  }
  .button__text {
    &::after {
      background: #ee3838;
    }
  }
}

.disabled{
  opacity: 0.3;
  button{
    cursor: default;
    &:hover {
      box-shadow: 0px 0px 0px rgba(148, 148, 148, 0.41);
    }
    &:active {
      box-shadow: inset 0px 0px 0px rgba(29, 6, 6, 0.25);
    }
  }
  
}
</style>
