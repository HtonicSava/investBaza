<template>
  <div>
    <div class="main">
      <v-navigation-drawer
        class="main__mobsidebar"
        v-model="drawer"
        absolute
        width="320"
        temporary
        fixed
        height="100%"
      >
      <div v-bind:style="{ top: scrollValue + 'px' }" class="main__mobsidebarContent">
        <div @click="toggleSideMenu" class="mobsidebar__item">
          <a href="#main_detailed"><p>Подробнее</p></a>
        </div>
        <div @click="toggleSideMenu" class="mobsidebar__item">
          <a href="#main_documents"><p>Документы</p></a>

        </div>
        <div @click="toggleSideMenu" class="mobsidebar__item">
          <a href="#main_reviews"><p>Отзывы</p></a>

        </div>
      </div>
        
      </v-navigation-drawer>
      <topblock :authorization="authorization" @exit="exit" @toggleSideMenu="toggleSideMenu"/>
      <whereInvestment />
      <expressionsInvestment />
      <creator />
      <diagram id="main_detailed" />
      <calculator />
      <targets />
      <documents id="main_documents" />
      <marketing />
      <evolving />
      <instagram />
      <reviews id="main_reviews" />
      <questions />
    </div>
    <ibfooter></ibfooter>
  </div>
</template>

<script>
import topblock from '../components/landing/topblock.vue';
import whereInvestment from '../components/landing/whereInvestment.vue';
import expressionsInvestment from '../components/landing/expressionsInvestment.vue';
import creator from '../components/landing/creator.vue';
import diagram from '../components/landing/diagram.vue';
import calculator from '../components/landing/calculator.vue';
import targets from '../components/landing/targets.vue';
import documents from '../components/landing/documents.vue';
import marketing from '../components/landing/marketing.vue';
import evolving from '../components/landing/evolving.vue';
import instagram from '../components/landing/instagram.vue';
import reviews from '../components/landing/reviews.vue';
import questions from '../components/landing/questions.vue';
import ibfooter from '../components/landing/ibfooter.vue';



// import ibmenu from '../components/landing/ibmenu.vue';



export default {
  components: {
    // ibmenu
    topblock,
    whereInvestment,
    expressionsInvestment,
    creator,
    diagram,
    calculator,
    targets,
    documents,
    marketing,
    evolving,
    instagram,
    reviews,
    questions,
    ibfooter,
  },
  data: () => {
    return{
      drawer: false,
      scrollValue: 0,
      authorization: "",
    }
  },
  methods: {
    toggleSideMenu(){
      this.drawer = !this.drawer
    },
    handleScroll(){
          this.scrollValue = window.scrollY
    },
    getAthorizationFromLocal() {
      if (localStorage.getItem("authorization") != "undefined") {
        this.authorization = JSON.parse(localStorage.getItem("authorization"));
        console.log(localStorage.getItem("authorization"))
      }
    },
    exit() {
      localStorage.removeItem("authorization");
      this.authorization = ""
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted(){
    this.getAthorizationFromLocal()
  }
};
</script>

<style lang="scss" scoped>
// font-family: "Century Gothic";
// font-family: "Padauk";
.main {
//   background: linear-gradient(#ffffff, #d8d8d8);
    background: #101020;
    overflow: hidden;
}

.main__mobsidebar{
  z-index: 101;
  background: #20203f;
}

.main__mobsidebarContent{
  background: #20203f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  position: relative;
  // top: 100px;
  font-family: "Museo Sans Cyrl 500";
  font-size: 23.6679px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  a{
    color: inherit;
    &:visited{
      color: inherit;
    }
  }
}

.container {
  max-width: 1220px;
  padding: 0px 10px;
  width: 100%;
  margin: auto;
}

@media (max-width: 1120px) {
  .container {
    padding: 0px 25px;
  }
}
</style>
