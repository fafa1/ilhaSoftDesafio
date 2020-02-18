<template>
  <div class="tabela-detalhe">
    <table>
      <tbody class="body-detalhe">
        <tr>
          <th>Título Original:</th>
          <td>{{detalhe.Title}}</td>
        </tr>
        <tr>
          <th>Gênero:</th>
          <td>{{detalhe.Genre}}</td>
        </tr>
        <tr>
          <th>Duração:</th>
          <td>{{detalhe.Runtime}}</td>
        </tr>
        <tr>
          <th>Direção:</th>
          <td>{{detalhe.Director}}</td>
        </tr>
      </tbody>
    </table>

    <table>
      <tbody class="body-detalhe">
        <tr>
          <th>Elenco:</th>
          <td>{{detalhe.Actors}}</td>
        </tr>
        <tr>
          <th>Ano de Produção:</th>
          <td>{{detalhe.Year}}</td>
        </tr>
        <tr>
          <th>País:</th>
          <td>{{detalhe.Country}}</td>
        </tr>
        <tr>
          <th>Produção:</th>
          <td>{{detalhe.Production}}</td>
        </tr>
      </tbody>
    </table>

    <table>
      <tbody class="body-detalhe">
        <tr>
          <th>Avaliação IMDB:</th>
          <td>{{detalhe.imdbRating}}</td>
        </tr>
        <tr>
          <th>Lingua Original:</th>
          <td>{{detalhe.Language}}</td>
        </tr>
        <tr>
          <th>Premios:</th>
          <td>{{detalhe.Awards}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'detalheTable',

  props: {
    detalhe: {
      type: [Array, Object],
      default: ''
    }
  },

  mounted() {
    this.detalhe
  }
  
}
</script>

<style>
  .tabela-detalhe {
    display: flex;
    align-items: flex-start;
    max-width: 950px
  }

  .tabela-detalhe > table {
    flex: 1;
  }

  .body-detalhe > tr {
    padding: 15px;
    display: inline-block;
  }

  .body-detalhe tr th {
    color: #00ffff;
    padding-right: 10px
  }

</style>