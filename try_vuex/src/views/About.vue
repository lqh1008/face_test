<template>
  <div class="about">
    about
    <Food></Food>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Food from '../components/Food'
  export default {
    name: 'About',
    components: { Food }
  }
</script>
