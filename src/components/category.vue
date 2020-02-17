<template>
 <!-- Componentizar -->
  <div class="size-page">
    <h3>Filmes TOP!</h3>
    <ul class="flex-box">
      <li v-for="item in withPhoto" :key="item.id">
        <router-link :to="{ name: 'Detalhe', params: { id: item.imdbID } }">
        <!-- <a class="pointer" @click="movieDetail(item.imdbID)"> -->
          <img :src="item.Poster" :alt="item.Title">
        </router-link>
        <!-- </a> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'category',

  data() {
    return {
    }
  },

  mounted () {
    this.setList()
  },

  methods: {
    ...mapActions('Category', ['setList', 'setListDetail']),

    movieDetail(id) {
      this.setListDetail(id)
    }
  },

  computed: {
    ...mapState('Category', ['list']),

    withPhoto() {
      return this.list.filter(item => item.Poster !== 'N/A')
    }
  }

}
</script>

<style>
  .size-page {
    max-width: 1200px;
    margin: 0 auto;
  }

  .flex-box {
    display: flex;
    flex-wrap: wrap;
    justify-content:center
  }
  .flex-box > li{
    margin: 20px 20px 0 0;
    list-style: none;
  }
  h3 {
    text-align: center;
  }
  .pointer {
    cursor: pointer;
  }
</style>
