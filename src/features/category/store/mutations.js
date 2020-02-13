const SET_LIST = (state, obj) => {
  state.list = obj.listFilme
}

const SET_LIST_DETALHE = (state, obj) => {
  debugger
  state.detalhe = obj.listFilmeDetalhe
}

export default {
  SET_LIST,
  SET_LIST_DETALHE
}