<template>
  <div id="app">
<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
       return {
        activeIndex: '1'
      };
  },
  methods:{
     handleSelect:function(){
         console.log("handleSelect");
     },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
