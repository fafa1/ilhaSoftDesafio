<template>
  <div>
    <h3>Filmes TOP!</h3>
    <ul class="flex-box">
      <li v-for="item in withPhoto" :key="item.id">
        <a class="pointer" @click="alertar(item.imdbID)">
          <img :src="item.Poster" :alt="item.Title">
        </a>
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

    alertar(id) {
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
