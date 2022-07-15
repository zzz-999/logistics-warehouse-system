export default {
  namespaced: true,
  
  state: () => {
    return { 
      myStatus: uni.getStorageSync('myStatus') || 1,
      userinfo: uni.getStorageSync('userinfo') || {}
     }
  },
  
  mutations:{
    updateMyStatus(state,myStatus) {
      state.myStatus = myStatus
      uni.setStorageSync('myStatus',myStatus)
    },
    updateUserInfo(state,userinfo) {
      state.userinfo = userinfo
      uni.setStorageSync('userinfo',userinfo)
    }
  },
  
  getters: {}
}