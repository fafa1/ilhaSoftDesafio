import axios from 'axios'

const url_Base = 'http://www.omdbapi.com/'
const search = 'batman'

const setList = async ({ commit }, obj) => {
  const resultLista = await axios.get(`${url_Base}?s=${search}&apikey=c7c5d2ed`)

  commit('SET_LIST', { listFilme: resultLista.data.Search })
}

const setListDetail = async ({ commit }, obj) => {
  if (obj) {
    debugger
    const res = await axios.get(`${url_Base}?i=${obj}&apikey=c7c5d2ed`)
    commit('SET_LIST_DETALHE', { listFilmeDetalhe: res.data })
  }
}

export default {
  setList,
  setListDetail
}
