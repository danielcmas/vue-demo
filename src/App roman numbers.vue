<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <RomanNumbers>
      <template v-slot:counterTitle>
        <h1>Contador de patatas</h1>
      </template>
    </RomanNumbers>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import Kata1 from './components/Kata1.vue'
import RomanNumbers from './components/RomanNumbers.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    //Kata1
    RomanNumbers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
