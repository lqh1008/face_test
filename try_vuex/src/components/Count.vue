<template>
  <div id='count' @click='reduce()'>
    {{count}}
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name:'Count',
    data() {
      return {
        
      }
    },

    computed:{
      // count(){
      //   return this.$store.state.count
      //   // return 3333
      // }
      
     ...mapState([count,food])
    },
    methods: {
        reduce(){
          console.log(this);
        }
      
    },
  }
</script>

<style>

</style>