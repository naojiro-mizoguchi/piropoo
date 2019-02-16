export const state = () => ({
  answer: "",
  forced: false,
  image : ""
})

export const mutations = {
  setItems(state, data){
    if (data.answer === 'yes') {
      data.answer = 'よかばい';
    } else {
      data.answer = 'イヤもん';
    }
    state.answer = data.answer
    state.forced = data.forced
    state.image =  "opacity: 1; background-image: url('" + data.image + "');"
  }
}

export const actions = {
  getData({ commit }, response){
    // console.log('data1: ' + response.answer)
    // console.log('data1: ' + response)
    commit('setItems', response)
  }

}