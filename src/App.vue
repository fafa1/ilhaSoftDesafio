<template>
  <div class="global">
    <router-view/>
  </div>
</template>

<script>
import Category from '@/components/category'

export default {
  name: 'App',

  components: {
    Category
  }
}
</script>

<style>
  .global {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
