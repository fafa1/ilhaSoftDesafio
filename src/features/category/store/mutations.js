const SET_LIST = (state, obj) => {
  state.list = obj.listFilme
}

const SET_LIST_DETALHE = (state, obj) => {
  state.detalhe = obj.listFilmeDetalhe
}

const SET_MOVIE_AFTER = (state, obj) => {
  state.filmeDepois.push(obj)
  debugger
  // state.filmeDepois = state.filmeDepois.map(nome => nome.obj)
}

const REMOVE_MOVIE_LIST = (state, obj) => {
  if (obj) {
    const stateList = state.filmeDepois.map(item => item.obj)
    debugger
    const newMovieList = stateList.filter(item => item.imdbID !== obj.objID)
    // state.filmeDepois.push(newMovieList)
    state.filmeDepois = newMovieList
  }
}

export default {
  SET_LIST,
  SET_LIST_DETALHE,
  SET_MOVIE_AFTER,
  REMOVE_MOVIE_LIST
}