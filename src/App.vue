<template>
  <div>
    <div class="menu">
      <ul class="menu-list">
        <li><router-link :to="{name: 'Category'}">Início</router-link></li>
        <li><router-link :to="{name: 'Detalhe'}">Detalhe</router-link></li>
        <li><router-link :to="{name: 'Playlist'}">Lista de Filme</router-link></li>
      </ul>
    </div>
  <div class="global">
    <router-view/>
  </div>
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
  .menu {
    padding: 10px;
    background-color: #363a35;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
  }
  .menu-list {
    display: flex;
    text-align: center;
    justify-content: center
  }
  .menu-list li {
    list-style: none;
    padding-left: 20px;
  }

  .menu-list li a {
    color: #fff;
    font-size: 1.2em;
    text-decoration: none;

  }
</style>
