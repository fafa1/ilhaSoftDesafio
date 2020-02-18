<template>
  <div class="background-page">
    <div class="imagem-detalhe">
      <img :src="detalhe.Poster" :alt="detalhe.Title">
    </div>
    <div class="filme-detalhe">
      <p>
        {{detalhe.Plot}}
      </p>

      <div class="informacao-detalhe">
        <div>
          <img class="imagem-detalhe-cell" :src="detalhe.Poster" width="150" height="250" :alt="detalhe.Title">
        </div>

        <detalhe-tabela :detalhe='detalhe'></detalhe-tabela>
      </div>

      <div class="button-playlist">
        <button class="button-detalhe" @click="assistirDepois">Assistir Depois</button>
        <button class="button-detalhe" id="button-background" @click="playList">Lista de Filmes</button>
      </div>
    </div>
  </div>
</template>

<script>
import detalheTabela from './detalheTable'
import { mapState, mapActions } from "vuex"

export default {
  name: "detalheFilme",

  components: {
    detalheTabela
  },

  data() {
    return {
    }
  },

  mounted() {
    this.setListDetail(this.$route.params.id);
  },

  methods: {
    ...mapActions("Category", ["setListDetail","setMovieAfter"]),

    assistirDepois () {
      alert('Adcionado a Playlist')
      this.setMovieAfter(this.detalhe)
    },

    playList () {
      this.$router.push({ name:'Playlist' })
    }
  },

  computed: {
    ...mapState("Category", ["detalhe"]),

    // flag() {
    //   d
    //   if (!this.detalhe) return true
    // }
  }
};
</script>

<style>
  .background-page {
    background: #141415;
  }

  .imagem-detalhe img{
    display: block;
    margin: 0 auto;
    margin-top: 70px;
    padding: 20px 0;
  }

  .filme-detalhe {
    margin-top: 20px;
    margin-left: 30px;
    padding-bottom: 20px;
    color: #fff;
  }

  .filme-detalhe > p {
    max-width: 700px;
    margin-left: 30px;
    font-size: 1.2em
  }

  .informacao-detalhe {
    display: flex;
  }

  .button-detalhe {
    margin-bottom: 40px;
    display: block;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    display: block;
    background-color: #6dc459;
    border: none;
  }

  #button-background {
    background-color: #6e7a86;
  }

  .button-playlist {
    margin: 15px auto;
    display: flex;
    justify-content:center;
  }

  .button-playlist  button {
    margin-right: 60px;
  }

  @media only screen and (max-width: 787px) {
    .imagem-detalhe-cell {
      display: none;
    }
    .filme-detalhe {
      font-size: 0.9em;
    }

  }
</style>
