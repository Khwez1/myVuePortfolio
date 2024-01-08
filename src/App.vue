<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Cursor/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Cursor from './components/Cursor.vue'
export default{
  components: {
    Cursor,
    Footer,
    Navbar
  }  
}
</script>

<style>
#app {
  color: white;
  font-family: 'Press Start 2P';
}

*{
  background-color: black;
  cursor: none;
}

</style>
