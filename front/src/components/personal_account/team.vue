<template>
  <div class="team">
    <div class="team__body">
      <div class="team__title">
        <h3>Моя команда</h3>
      </div>
      <div class="team__content">
        <div v-for="(item, i) in items" :key="i" class="team__item">
          <img
            :src="
              require('@/assets/img/personal_account/team/' +
                item.photoName +
                '.png' +
                '')
            "
            alt=""
          />
          <p>{{ item.name }} {{ item.surname }}</p>
          <p>{{ item.phone }}</p>
          <p>{{ item.email }}</p>
        </div>
      </div>
      <div class="team__title">
        <h3>Мой статус</h3>
      </div>
      <div class="status__content">
        <div
          v-for="(item, i) in status"
          :key="i"
          class="status__item"
          :class="{ 'status__item-active': item.active }"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="progressbar">
        <div class="progressbar__bar">
        <div class="progressbar__start">
          10 000
        </div>
        <div class="progressbar__filler">
        
        </div>
        <div class="progressbar__end">
          100 000
        </div>
      </div>
      </div>
      <div class="team__info">
        <p>Осталось до повышения статуса: <span>27 000</span></p>
      </div>
      <div class="team__referal">
        <p>Ваша реферальная ссылка: </p> 
        <p ref="text">{{reflink}}</p>
        <button @click="copyLink">{{buttonText}}</button>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "@/service/axios.js";


export default {
  components: {},
  name: "team",
  data: function () {
    return {
      buttonText: "Скопировать",
      selectText: '',
      authorization: null,
      reflink: null,
      status: [
        {
          active: true,
          name: "A",
        },
        {
          active: false,
          name: "B",
        },
        {
          active: false,
          name: "C",
        },
      ],
      items: [
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item1",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item2",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item3",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item4",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item5",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item6",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item7",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item8",
          email: "Email"
        },
        {
          name: "Имя",
          surname: "Фамилия",
          phone: "Телефон",
          photoName: "item9",
          email: "Email"
        },
      ],
    };
  },
  methods: {
    getAthorizationFromLocal() {
      if (localStorage.getItem("authorization") != "undefined"){
      this.authorization = JSON.parse(localStorage.getItem("authorization"))
      }
    },

    getRefLink () {
      let postQuery = "referal_link/";
      axios.post(postQuery, {
          authorization:`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTQsImV4cCI6MTYzMzgwODQwN30.MsolCCCtXXIUrs_I7gWdZq61PhOnxKciLWizS3-OS1Q`
        }).then((res) => {
          console.log(res);
          this.reflink = res.data.referal_link
        }).catch((err) => {
          console.log(err);
          
        });
    },
    copyLink () {
      const el = document.createElement('textarea');  
      el.value = this.reflink;                                 
      el.setAttribute('readonly', '');                
      el.style.position = 'absolute';                     
      el.style.left = '-9999px';                      
      document.body.appendChild(el);                  
      const selected =  document.getSelection().rangeCount > 0  ? document.getSelection().getRangeAt(0) : false;                                    
      el.select();                                    
      document.execCommand('copy');                   
      document.body.removeChild(el);                  
      if (selected) {                                 
        document.getSelection().removeAllRanges();    
        document.getSelection().addRange(selected);
          
      }
      this.buttonText = 'Скопировано' 
    }
  },
  mounted() {
    this.getAthorizationFromLocal()
    this.getRefLink()
  }
};
</script>

<style lang="scss" scoped>
.team {
  padding-bottom: 50px;
  p {
    margin-bottom: 0px;
  }
}
.team__body {
  max-width: 650px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.team__title {
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 76.69%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-bottom: 60px;
  
}

.team__content {
  display: grid;
  justify-content: center;
  justify-items: center;
  width: 100%;
  gap: 60px;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  margin-bottom: 50px;
}
.team__item {
  font-size: 15px;
  font-weight: 700;
  img {
    max-width: 100%;
    width: auto;
  }
  text-align: center;
}

.status__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-bottom: 50px;
}

.status__item {
  color: #000000;
  
  font-size: 22px;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #515151;
  border-radius: 50%;
 
}

.status__item-active {
  color: #ffffff;
  background: #eb1717;
  border-color: #eb1717;
  width: 60px;
  height: 60px;
}

.progressbar{
  padding: 0px 50px 50px 50px;
  width: 100%;
}

.progressbar__bar{
  width: 100%;
  height: 15px;
  background: rgb(132,27,173);
  background: linear-gradient(270deg, rgba(132,27,173,1) 0%, rgba(235,23,23,1) 100%);
  border-radius: 5px;
  padding: 1px;
  // padding-bottom: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  
}

.progressbar__filler{
  width: 30%;
  height: 100%;
  // margin: 2px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #ffffff;
}

.progressbar__start,
.progressbar__end{
  position: absolute;
  bottom: -150%;
  font-size: 16px;
  font-weight: bold;
}

.progressbar__start{
  left: 0px;
  transform: translate(-25%, 25%);
}

.progressbar__end{
  right: 0px;
  transform: translate(25%, 25%);
}

.team__info{
  width: 100%;
  text-align: left;
  font-size: 18px;
  margin-bottom: 8px;
  span {
    font-size: 20px;
  }
}

.team__referal{
  width: 100%;
  // display: flex;
  // justify-content: flex-start;
  // align-items: center;
  font-size: 18px;
  word-wrap: break-word;
  p{
    margin-bottom: 8px;
  }
  button{
    // margin-left: 10px;
    padding: 8px 12px;
    background: rgb(132,27,173);
    background: linear-gradient(270deg, rgba(132,27,173,1) 0%, rgba(235,23,23,1) 100%);
    border-radius: 5px;
    font-size: 14px;
    color: #ffffff;
    border: 2px solid #00000057
  }
}

@media (max-width: 600px) {
  .team__title {
    font-size: 24px;
  }
  .team__item {
    font-size: 12px;
    font-weight: 700;
    img {
      max-width: 70%;
    }
  }
  // .status__item {
  //   margin-right: 40px;
  // }
}
</style>
