<template>
  <section class="container">
    <div class="image01">
      <button @click="execClickAns('.unko')">
        <div id="background" v-bind:style="image"></div>
      </button>
    </div>
    <div class="text01">
      <div id="answer" class="animated zoomInUp infinite unko">{{answer}}</div>
    </div>
    <footer id="footer">
      <ul class="meta">
        <li><span class="madeby" @click="onClickReload()">もう一回</span></li>
      </ul>
    </footer>
  </section>
</template>

<script>
import axiosbase from 'axios'

const axios = axiosbase.create({
  baseURL: 'https://yesno.wtf',
headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
},
  responseType: 'json',
})

export default {
  computed: {
    image() { return this.$store.state.image },
    answer() { return this.$store.state.answer }
  },
  /*
  data() {
    return {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charaset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
  },
  async asyncData({app}) {
    // const baseUrl = 'https://yesno.wtf/api';
    // const getUrl = encodeURI(baseUrl);
    const response = await app.$axios.$get(getUrl);

    if (response.answer === 'yes') {
      response.answer = 'よかばい';
    } else {
      response.answer = 'イヤもん';
    }

    return {
      ans : response.answer,
      frc : response.forced,
      img : "opacity: 1; background-image: url('" + response.image + "');",
    };
    
  },
  */
  async fetch ({ app, store }) {
    const baseUrl = 'https://yesno.wtf/api';
    const getUrl = encodeURI(baseUrl);
    /*
    const headers = {
        'Content-Type': 'application/json;charaset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    };
    */
    const response = await axios.get(getUrl);
    // console.log('data0: ' + response.data.answer);
    // console.log('data0: ' + response.data.image);
    store.dispatch('getData', response.data);  
  },
  methods: {
    execHideElement(selector) {
      // jQuery はDOM操作のライブラリのため browser のみで動作させる
      if (process.browser) {
        // main.js を読み込む
        const main = require('~/assets/js/main');
        // main.js の hideElement(selector) を発火する
        main.hideElement(selector);
      }
    },
    execClickAns(selector){
      if (process.browser) {
        const main = require('~/assets/js/main')
        main.clickAns(selector);
      }
    },
    reload() {
      window.location.reload();
    },
    async onClickReload() {
      const baseUrl = 'https://yesno.wtf/api';
      const getUrl = encodeURI(baseUrl);
      const response = await axios.get(getUrl);
      console.log('data0: ' + response.data.answer);
      console.log('data0: ' + response.data.image);
      this.$store.dispatch('getData', response.data); 
    }
  }
}
</script>

<style>
.container {
  min-height: calc(100vh - 38px);
  align-items: center;
  border: 0px;
}

.text01 .unko {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  position: absolute;
  top: calc(100vh/3);
  right: 20%;
  align-content: center;
  font-weight: 600;
  font-size: 600%;
  color: red;
  letter-spacing: 18px;

}

button {
    padding: 0px;
    border: 0px inset #0000;
}

#background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
}
*, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
}
@media (max-width: 600px) {
  .text01 .unko {
    font-size: 300%;
    color: red;
    letter-spacing: 12px;
  }
}

@media screen and (max-width: 480px) {
  #footer {
    text-align: center;
    padding: 8px 10px 14px;
  }
}
#footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 24px;
    padding: 14px 20px;
    background-color: #0c0c0c;
    background-color: rgba(12,12,12,0.6);
}

#footer .meta {
    float: left;
    color: white;
    text-transform: uppercase;
    font-family: "Avenir LT W01_95 Black1475556";
    font-size: 16px;
    letter-spacing: 0.16em;
    line-height: 1;
    padding: 7px 6px;
    margin: 0 6px 0;
    list-style: none;
}
*, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
}
@media screen and (max-width: 480px){
  #footer .meta {
    float: none;
    margin-bottom: 10px;
  }
}
#footer .meta li {
    display: inline-block;
    margin: 0;
    padding: 0;
}
*, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
}
#footer a {
    display: inline-block;
    color: white;
}
a {
    text-decoration: none;
}
a {
    background: transparent;
}
*, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
}

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
</style>