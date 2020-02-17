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
  body, div {
    margin: 0;
    padding: 0;
  }
</style>
