<template>
  <div class="size-page">
    <h2 class="playlist-text">Lista de Filmes marcadas para assistir depois</h2>
    <ul class="flex-box">
      <li v-for="item in playList" :key="item.id">
        <img :src="item.Poster" :alt="item.Title">
        <br>
        <!-- <button @click="removerLista(item.imdbID)">Remover</button> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'playList',
  data() {
    return {
    }
  },

  methods: {
    ...mapActions("Category", ['removieMovieList']),

    removerLista (id) {
      debugger
      this.removieMovieList(id)
    }
  },

  computed: {
    ...mapState("Category", ['filmeDepois']),
    ...mapGetters("Category", ['leanMovieList', 'leanMovieListItera']),

    playList() {
      debugger
      return this.leanMovieList 
    }
  }
}
</script>

<style>

.playlist-text {
  text-align: center;
}

</style>