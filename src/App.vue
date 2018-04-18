<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  background: #2BC0E4; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #26EDFF ,#C1FAFF); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #26EDFF , #C1FAFF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100vh;
}
</style>
