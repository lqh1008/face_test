<template>
  <div class="home">
    home
    <Count></Count>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Count from '../components/Count'
  export default {
    name: 'Home',
    components: { Count }
  }
</script>