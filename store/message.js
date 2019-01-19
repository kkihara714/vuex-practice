export const state = () => ({
    message: []
})

export const mutations = {
    setMessageInfo(state, model) {
        state.message = model
    }
}

export const actions = {
    async setMessage({commit}){
        let obj = [
            {messageId: '1', message: 'メッセージ１'},
            {messageId: '2', message: 'メッセージ２'}
        ]
        commit('setMessageInfo', obj)

        //他のモジュールのmutationを呼び出す
        let otherObj = {userId: 'user_other_mutaion', userName: 'name_other_mutaion'}
        commit('user/setUserInfo', otherObj, { root: true })
    }
}

export const getters = {
    getMessage (state, index) {
      return state.message[index].message
    }
}