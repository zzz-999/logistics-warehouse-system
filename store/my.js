export default {
  namespaced: true,
  
  state: () => {
    return { myStatus: uni.getStorageSync('myStatus') || 1 }
  },
  
  mutations:{
    updateMyStatus(state,myStatus) {
      state.myStatus = myStatus
      uni.setStorageSync('myStatus',myStatus)
    }
  },
  
  getters: {}
}