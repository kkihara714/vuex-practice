export const state = () => ({
    userId: '',
    userName: ''
})

export const mutations = {
    setUserInfo(state, model) {
        state.userId = model.userId
        state.userName = model.userName
    }
}

export const actions = {
    async login({commit}, name){
        let obj = {userId: 'user1', userName: name}
        commit('setUserInfo', obj)
    }
}

export const getters = {
    getUserId (state) {
      return state.userId
    }
}