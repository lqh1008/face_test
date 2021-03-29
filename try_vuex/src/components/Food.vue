<template>
  <div id='fruit' @click='add()'>
    {{food}}
  </div>
</template>

<script>
  export default {
    name:'Fruit',
    data() {
      return {
        food:'fruit'
      }
    },

    methods: {
        add(){
          console.log(this);
        }
      
    },
  }
</script>

<style>

</style>