<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/refund">Refund</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
}
body{
  background: black;
}
@media print
{
  #nav{
    display: none;
  }
}

</style>
