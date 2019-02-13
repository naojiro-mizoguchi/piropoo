<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="playagain" @click="reload()">もう一回</div>
      </div>
    </nav>
</template>

<script>
export default {
  methods: {
    reload() {
      window.location.reload()
    }
  }
}

</script>

<style>
.navbar {
  width: 100vw;
  height: 36px;
  margin: 0;
  padding: 10px 0 0 10px;
  background-color: rgb(65, 114, 219);
  position: fixed;
}
</style>
