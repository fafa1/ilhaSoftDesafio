import axios from 'axios'

const url_Base = 'http://www.omdbapi.com/'
const search = 'superman'

// Flag s para pesquisar o nome do filme
const setList = async ({ commit }, obj) => {
  const resultLista = await axios.get(`${url_Base}?s=${search}&apikey=c7c5d2ed`)

  commit('SET_LIST', { listFilme: resultLista.data.Search })
}

// Flag i para pesquisar o ID do filme
const setListDetail = async ({ commit }, obj) => {
  if (obj) {
    const res = await axios.get(`${url_Base}?i=${obj}&apikey=c7c5d2ed`)
    commit('SET_LIST_DETALHE', { listFilmeDetalhe: res.data })
  }
}

const setMovieAfter = ({ commit }, obj) => {
  if (obj) {
    debugger
    commit('SET_MOVIE_AFTER', { obj })
  }
}

const removieMovieList = ({ commit }, objID) => {
  if (objID) {
    debugger
    commit('REMOVE_MOVIE_LIST', { objID })
  }
}

export default {
  setList,
  setListDetail,
  setMovieAfter,
  removieMovieList
}
