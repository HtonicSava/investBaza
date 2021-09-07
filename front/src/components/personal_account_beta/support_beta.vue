<template>
  <div class="support">
    <div class="support__content">
      <div class="support__title">
        <h3>Техническая поддержка</h3>
      </div>
      <div class="support__chat chat">
        <div class="sidebar">
          <div class="sidebar__img"></div>
          <div class="sidebar__name">
            {{ manager.name }}
          </div>
          <div class="sidebar__post">
            <p>Ваш менеджер</p>
          </div>
          <div class="sidebar__location">
            <svg
              width="17"
              height="21"
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.77041 0.754883C13.2368 0.754883 16.8572 4.37529 16.8572 8.8417C16.8572 12.2589 14.4561 15.983 9.71594 20.0538C9.45237 20.2802 9.11633 20.4045 8.76886 20.4042C8.42139 20.4039 8.08556 20.279 7.82239 20.0521L7.50887 19.78C2.97859 15.8154 0.683594 12.1826 0.683594 8.8417C0.683594 4.37529 4.304 0.754883 8.77041 0.754883ZM8.77041 1.99901C6.95561 1.99901 5.21515 2.71993 3.9319 4.00319C2.64864 5.28644 1.92772 7.0269 1.92772 8.8417C1.92772 11.7463 4.04107 15.093 8.32584 18.842L8.63521 19.1099C8.67283 19.1422 8.7208 19.16 8.77041 19.16C8.82002 19.16 8.86799 19.1422 8.9056 19.1099C13.3977 15.2514 15.6131 11.8152 15.6131 8.8417C15.6131 7.9431 15.4361 7.05331 15.0922 6.22311C14.7484 5.39292 14.2443 4.63859 13.6089 4.00319C12.9735 3.36778 12.2192 2.86375 11.389 2.51988C10.5588 2.176 9.669 1.99901 8.77041 1.99901ZM8.77041 5.73138C9.59531 5.73138 10.3864 6.05908 10.9697 6.64237C11.553 7.22567 11.8807 8.01679 11.8807 8.8417C11.8807 9.6666 11.553 10.4577 10.9697 11.041C10.3864 11.6243 9.59531 11.952 8.77041 11.952C7.9455 11.952 7.15438 11.6243 6.57108 11.041C5.98779 10.4577 5.6601 9.6666 5.6601 8.8417C5.6601 8.01679 5.98779 7.22567 6.57108 6.64237C7.15438 6.05908 7.9455 5.73138 8.77041 5.73138ZM8.77041 6.97551C8.27547 6.97551 7.80079 7.17213 7.45081 7.5221C7.10084 7.87208 6.90422 8.34675 6.90422 8.8417C6.90422 9.33664 7.10084 9.81131 7.45081 10.1613C7.80079 10.5113 8.27547 10.7079 8.77041 10.7079C9.26535 10.7079 9.74002 10.5113 10.09 10.1613C10.44 9.81131 10.6366 9.33664 10.6366 8.8417C10.6366 8.34675 10.44 7.87208 10.09 7.5221C9.74002 7.17213 9.26535 6.97551 8.77041 6.97551Z"
                fill="#F3C68E"
              />
            </svg>
            <p>Симферополь</p>
          </div>
          <div class="sidebar__worktime">
            <p>Рабочее время с 8:00 до 18:00</p>
          </div>
        </div>
        <div class="body">
          <div class="head">
            <div class="head__img"></div>
            <div class="head__info">
              <div class="head__name">
                <h4>{{ manager.name }}</h4>
              </div>
              <div class="head__worktime">
                <p>Рабочее время с 8:00 до 18:00</p>
              </div>
            </div>
          </div>
          <div class="content">
            <div
              v-for="(message, i) in messages"
              :key="i"
              class="message"
              :class="{ 'message-right': message.user }"
            >
              <div class="message__text">
                <p>
                  {{ message.text }}
                </p>
              </div>
              <div class="message__date">
                <p>
                  {{ message.date }}
                </p>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel__input">
              <svg
                width="13"
                height="15"
                viewBox="0 0 13 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.26129 7.574L6.56529 2.27C6.82071 2.01464 7.12393 1.8121 7.45763 1.67393C7.79133 1.53575 8.14897 1.46466 8.51015 1.46471C8.87132 1.46475 9.22895 1.53594 9.56261 1.6742C9.89627 1.81246 10.1994 2.01508 10.4548 2.2705C10.7101 2.52592 10.9127 2.82914 11.0509 3.16284C11.189 3.49653 11.2601 3.85418 11.2601 4.21535C11.26 4.57653 11.1889 4.93415 11.0506 5.26782C10.9123 5.60148 10.7097 5.90464 10.4543 6.16L4.09029 12.524C3.85571 12.7586 3.53754 12.8904 3.20579 12.8904C2.87404 12.8904 2.55588 12.7586 2.32129 12.524C2.08671 12.2894 1.95492 11.9713 1.95492 11.6395C1.95492 11.3077 2.08671 10.9896 2.32129 10.755L7.97829 5.098C8.11077 4.95583 8.1829 4.76778 8.17947 4.57348C8.17604 4.37918 8.09733 4.19379 7.95991 4.05638C7.8225 3.91897 7.63712 3.84025 7.44281 3.83683C7.24851 3.8334 7.06047 3.90552 6.91829 4.038L1.26129 9.695C0.745446 10.2108 0.455647 10.9105 0.455647 11.64C0.455647 12.3695 0.745446 13.0692 1.26129 13.585C1.77714 14.1008 2.47678 14.3906 3.20629 14.3906C3.93581 14.3906 4.63545 14.1008 5.15129 13.585L11.5143 7.22C12.296 6.41987 12.7307 5.34383 12.7242 4.22525C12.7177 3.10667 12.2705 2.03576 11.4795 1.2448C10.6885 0.453829 9.61762 0.00658612 8.49904 7.2159e-05C7.38046 -0.0064418 6.30442 0.428298 5.50429 1.21L0.201292 6.513C0.0688116 6.65518 -0.00331137 6.84322 0.000116847 7.03752C0.00354506 7.23182 0.0822568 7.41721 0.21967 7.55462C0.357083 7.69203 0.542468 7.77075 0.736769 7.77417C0.93107 7.7776 1.11912 7.70548 1.26129 7.573V7.574Z"
                  fill="#F3C68E"
                />
              </svg>

              <input type="text" placeholder="Введите сообщение..." />
            </div>
            <div class="panel__button">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.51666 9.99982H2.90038L1.02227 2.52824C1.01025 2.48481 1.00292 2.44022 1.00042 2.39524C0.979525 1.7103 1.73381 1.23531 2.38739 1.54881L20 9.99982L2.38739 18.4508C1.74141 18.7615 0.996625 18.2998 1.00042 17.6272C1.00235 17.5671 1.01291 17.5076 1.03177 17.4505L2.42539 12.8498"
                  stroke="#F3C68E"
                  stroke-width="1.89996"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "support",
  data: function () {
    return {
      manager: {
        name: "Лилия",
      },
      messages: [
        {
          user: true,
          text: "Добрый день",
          date: "05.04.21 11:38",
        },
        {
          user: true,
          text: "Скажите пожалуйста, как вывести средства, если я не резидент РФ?",
          date: "05.04.21 11:39",
        },
        {
          user: true,
          text: "Скажите пожалуйста, как вывести средства, если я не резидент РФ?",
          date: "05.04.21 11:39",
        },
        {
          user: true,
          text: "Скажите пожалуйста, как вывести средства, если я не резидент РФ?",
          date: "05.04.21 11:39",
        },
        {
          user: false,
          text: "Добрый день!",
          date: "05.04.21 11:40",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.support {
  p {
    margin-bottom: 0px;
  }
}
.support__content {
  // max-width: 560px;
}
.support__title {
  font-family: "Museo Sans Cyrl 500";
  font-size: 41.3115px;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-bottom: 59px;
}

.support__chat {
}
.chat {
  // width: 100%;
  display: flex;
  max-width: 900px;
  margin: auto;
}
.sidebar {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 39px;
  padding-bottom: 39px;
  max-width: 215px;
  width: 100%;
  background: linear-gradient(126.83deg, #191930 18.67%, #101020 98.96%);
  mix-blend-mode: normal;
}
.sidebar__img {
  width: 83px;
  height: 83px;
  border-radius: 50%;
  background-color: #c4c4c4;
  margin-bottom: 24px;
}
.sidebar__name {
  font-family: "Museo Sans Cyrl 300";
  font-size: 22px;
  letter-spacing: -0.04em;
  color: #f3c68e;
  text-shadow: 0px 0px 34.3091px rgba(255, 216, 132, 0.6);
  margin-bottom: 8px;
}
.sidebar__post {
  font-family: "Museo Sans Cyrl 300";
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.04em;
  color: #ffffff;
  opacity: 0.4;
  margin-bottom: 30px;
}
.sidebar__location {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Museo Sans Cyrl 300";
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.04em;
  color: #ffffff;

  svg {
    margin-bottom: 13px;
  }
}

.sidebar__worktime {
  font-family: "Museo Sans Cyrl 500";
  font-size: 14px;
  color: #ffffff;
  opacity: 0.4;
  display: none;
}

.body {
  background: #25253a;
  border-radius: 0px 10px 10px 0px;
  width: 100%;
}
.head {
  padding: 32px 0px 16px 19px;
  display: flex;
  align-items: center;
}
.head__img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #c4c4c4;
}
.head__info {
  margin-left: 17px;
}
.head__name {
  font-family: "Museo Sans Cyrl 300";
  font-size: 20px;
  letter-spacing: -0.04em;
  color: #f3c68e;
  text-shadow: 0px 0px 34.3091px rgba(255, 216, 132, 0.6);
  margin-bottom: 3px;
}
.head__worktime {
  font-family: "Museo Sans Cyrl 300";
  font-size: 14px;
  letter-spacing: -0.04em;
  color: #ffffff;
  opacity: 0.4;
}

.content {
  max-height: 370px;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  padding-left: 60px;
  padding-right: 25px;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    /* 1 - скроллбар */
    width: 5px;
    // height: 4px;
    background-color: #10102088;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #f3c68e;
    height: 68px;
  }
}
.message {
  max-width: 276px;
  font-family: "Museo Sans Cyrl 500";
  font-size: 14px;
  letter-spacing: 0.01em;
  color: #fefefe;
  width: max-content;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.message__text {
  padding: 12px 25px;
  background: linear-gradient(180deg, #8585ab 0%, #7676a3 100%);
  border-radius: 22px;
}

.message-right {
  align-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  color: #25253a;
  .message__text {
    background: linear-gradient(94.51deg, #ffffff 3.53%, #e1e1e1 104.7%);
  }
}

.message__date {
  font-family: "Museo Sans Cyrl 500";
  font-size: 11px;
  color: #fefefe;
  opacity: 0.5;
  margin-top: 14px;
}

.panel {
  background: #2a2a3f;
  border-radius: 0px 0px 10px 0px;
  padding-right: 28px;
  padding-left: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
}
.panel__input {
  background: #3a3a55;
  mix-blend-mode: normal;
  opacity: 1;
  border-radius: 25px;
  font-family: "Museo Sans Cyrl 500";
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-shadow: 0px 0px 27.4444px rgba(255, 216, 132, 0.6);
  max-width: 380px;
  width: 100%;
  position: relative;
  svg {
    cursor: pointer;
    top: 50%;
    position: absolute;
    transform: translate(0%, -50%);
    left: 21px;
  }
  input,
  textarea {
    padding: 14px 25px 14px 46px;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    color: #ffffff;
    opacity: 1;
    border: 1px solid #f3c68e00;
    opacity: 0.2s;
    &:focus {
      border: 1px solid #f3c68e;
    }
  }
}
.panel__button {
  cursor: pointer;
  margin-left: 14px;
  width: 48px;
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #32324c;
  mix-blend-mode: normal;
  border-radius: 50%;
  svg {
    position: relative;
    left: 2px;
  }
}

@media (max-width: 1024px) {
  .support__title {
    font-size: 36px;
  }

  .chat {
    flex-direction: column;
  }
  .sidebar {
    max-width: unset;
    display: grid;
    grid-template-areas:
      "img name ."
      "img post location"
      "img worktime worktime";
    // grid-template-columns: 90px 120px 120px;
    grid-template-columns: min-content;
    grid-auto-columns: max-content;
    grid-auto-rows: min-content;
    justify-items: start;
    justify-content: center;
    column-gap: 15px;
    padding: 20px 5px;
  }
  .sidebar__img {
    grid-area: img;
    margin-bottom: 0px;
    width: 60px;
    height: 60px;
  }

  .sidebar__name {
    font-size: 18px;
    grid-area: name;
    margin-bottom: 0px;
  }

  .sidebar__post {
    grid-area: post;
    margin-bottom: 0px;
  }
  .sidebar__location {
    grid-area: location;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    svg {
      margin-bottom: 0px;
      margin-right: 8px;
    }
  }

  .sidebar__worktime {
    grid-area: worktime;
    display: block;
  }
  .head {
    display: none;
  }

  .content {
    padding-right: 10px;
    padding-left: 10px;
  }

  .panel {
    padding-right: 16px;
    padding-left: 16px;
  }
}
</style>
