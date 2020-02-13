import axios from 'axios'

const setList = async ({ commit }, obj) => {
  const resultLista = await axios.get('http://www.omdbapi.com/?s=batman&apikey=c7c5d2ed')

  commit('SET_LIST', { listFilme: resultLista.data.Search })
}

export default {
  setList
}
