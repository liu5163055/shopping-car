<template>
  <div id="app">
    <my-nav></my-nav>
    <router-view/>
  </div>
</template>

<script>
  import myNav from '@/components/nav.vue'
export default {
  name: 'app',
  components:{myNav}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin: auto;*/
  /*margin-top: 60px;*/
}
</style>
