<template>
  <div class="cusFooter">
      <div class="cusFooter__title">
          <h3>INVEST BAZA</h3>
      </div>
        <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.1947 0.359375H13.8052C6.19289 0.359375 0 6.55227 0 14.1646V37.5545C0 45.1664 6.19289 51.3593 13.8052 51.3593H37.1951C44.807 51.3593 50.9999 45.1664 50.9999 37.5545V14.1646C50.9999 6.55227 44.807 0.359375 37.1947 0.359375V0.359375ZM48.0101 37.5545C48.0101 43.5178 43.1584 48.3694 37.1947 48.3694H13.8052C7.8415 48.3694 2.98983 43.5178 2.98983 37.5545V14.1646C2.98983 8.20087 7.8415 3.34921 13.8052 3.34921H37.1951C43.1584 3.34921 48.0101 8.20087 48.0101 14.1646V37.5545Z" fill="black"/>
        <path d="M25.4996 11.9141C17.8102 11.9141 11.5547 18.1696 11.5547 25.859C11.5547 33.5483 17.8102 39.8039 25.4996 39.8039C33.1889 39.8039 39.4445 33.5483 39.4445 25.859C39.4445 18.1696 33.1889 11.9141 25.4996 11.9141ZM25.4996 36.814C19.4592 36.814 14.5445 31.8997 14.5445 25.859C14.5445 19.8186 19.4592 14.9039 25.4996 14.9039C31.5403 14.9039 36.4546 19.8186 36.4546 25.859C36.4546 31.8997 31.5403 36.814 25.4996 36.814Z" fill="black"/>
        <path d="M39.7788 6.96094C37.5064 6.96094 35.6582 8.80954 35.6582 11.0815C35.6582 13.3538 37.5064 15.2024 39.7788 15.2024C42.0511 15.2024 43.8997 13.3538 43.8997 11.0815C43.8997 8.80915 42.0511 6.96094 39.7788 6.96094ZM39.7788 12.2122C39.1554 12.2122 38.648 11.7048 38.648 11.0815C38.648 10.4578 39.1554 9.95077 39.7788 9.95077C40.4025 9.95077 40.9099 10.4578 40.9099 11.0815C40.9099 11.7048 40.4025 12.2122 39.7788 12.2122Z" fill="black"/>
        </svg>

      <div class="cusFooter__links">
          <a href="#">Политика конфеденциальности</a>
          <a href="#">Договор оферты</a>
      </div>
      <div class="cusFooter__adress">
          <p>Адрес: Республика Крым, <br> Севастополь, ул. Маяковского, д. 8, <br> оф. 308 299011 </p>
      </div>
  </div>
</template>

<script>
export default {
  name: "cusFooter",
  data: function () {
    return {};
  },
}
</script>

<style lang="scss" scoped>
.cusFooter{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0px;
}

.cusFooter__title{
    font-style: normal;
    font-weight: normal;
    font-size: 120px;
    line-height: 87.19%;
    letter-spacing: -0.04em;
    color: #000000;
    margin-bottom: 50px;
}

.cusFooter__links{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 79.19%;
    margin-bottom: 50px;
    letter-spacing: -0.025em;

    color: #000000;
    a{
        color: #000000;
        margin-top: 20px;
    }

}

.cusFooter__adress{
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 95%;
    text-align: center;
    letter-spacing: -0.025em;
    color: #000000;
}

</style>