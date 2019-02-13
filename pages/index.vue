<template>
  <section class="container">
    <div class="image01">
      <button @click="execClickAns('.unko')">
        <img :src="img" class="imgStyle">
      </button>
    </div>
    <div class="text01">
      <div id="answer" class="animated zoomInUp infinite unko">{{ ans }}</div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ans: "",
      frc: "",
      img: "",
    }
  },
  async asyncData({ app }) {
    const baseUrl = 'https://yesno.wtf/api'
    const getUrl = encodeURI(baseUrl)
    const response = await app.$axios.$get(getUrl)
    if (response.answer === 'yes') {
      response.answer = 'よかばい'
    } else {
      response.answer = 'イヤもん'
    }

    return {
      ans : response.answer,
      frc : response.forced,
      img : response.image,
    }
  },
  methods: {
    execHideElement(selector) {
      // jQuery はDOM操作のライブラリのため browser のみで動作させる
      if (process.browser) {
        // main.js を読み込む
        const main = require('~/assets/js/main')
        // main.js の hideElement(selector) を発火する
        main.hideElement(selector)
      }
    },
    execClickAns(selector){
      if (process.browser) {
        const main = require('~/assets/js/main')
        main.clickAns(selector)
      }
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
  font-weight: 500;
  font-size: 600%;
  color: red;
  letter-spacing: 18px;

}

button {
    padding: 0px;
    border: 0px inset #0000;
}

.image01 .imgStyle {
  width: 100vw;
  height: 640px;
  margin-top: 36px;
  align-content: center;
  object-fit: cover;
}

@media all and (max-width: 600px) {
  .text01 .unko {
    right: 20%;
    font-size: 300%;
  }
}
</style>