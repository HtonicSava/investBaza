<template>
  <div class="button">
    <div class="button__body">
      <button>
        <svg
          width="35"
          height="25"
          viewBox="0 0 35 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.1101 0.51257C22.6441 0.0302339 21.8684 0.0302339 21.3861 0.51257C20.92 0.978611 20.92 1.75426 21.3861 2.21921L30.1279 10.961H1.28115C0.608699 10.9621 0.0742188 11.4966 0.0742188 12.169C0.0742188 12.8415 0.608699 13.3933 1.28115 13.3933H30.1279L21.3861 22.1188C20.92 22.6012 20.92 23.3779 21.3861 23.8429C21.8684 24.3252 22.6452 24.3252 23.1101 23.8429L33.9214 13.0316C34.4037 12.5655 34.4037 11.7899 33.9214 11.3249L23.1101 0.51257Z"
            fill="#1E201D"
          />
        </svg>
      </button>
    </div>
    <div class="button__text">
      <h4>
        {{ text }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "button",
  props: {
    color: String,
    text: String,
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
}

.button__body {
  width: 96px;
  height: 96px;
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
</style>
