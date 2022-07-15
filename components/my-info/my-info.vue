<template>
  <view class="my-userinfo-container">
    <!-- 头像昵称区域 -->
    <view class="top-box">
      <image :src="userinfo.avatarUrl" class="avatar"></image>
      <view class="nickname">{{userinfo.nickName}}</view>
    </view>
    <view class="panel-list">
      <!-- 退出登录 -->
      <view class="panel">
        <view class="panel-list-item" @click="logout">
          <text>退出登录</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import { mapMutations,mapState } from 'vuex'
  export default {
    computed: { ...mapState('my',['userinfo']) },
    name:'my-info',
    data() {
      return {}
    },
    methods: { 
      ...mapMutations('my',['updateMyStatus','updateUserInfo']),
      logout(){
        this.updateMyStatus(1)
        this.updateUserInfo(null)
     } 
    }
  }
</script>

<style lang="scss">
.my-userinfo-container {
    height:100%;
    // 为整个组件的结构添加浅灰色的背景
    background-color: #f4f4f4;

    .top-box {
      height: 400rpx;
      background-color: #3388ec;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .avatar {
        display: block;
        width: 90px;
        height: 90px;
        border-radius: 45px;
        border: 2px solid white;
        box-shadow: 0 1px 5px black;
      }

      .nickname {
        color: white;
        font-weight: bold;
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }

  .panel-list {
    padding: 0 10px;
    position: relative;
    top: -10px;

    .panel {
      background-color: white;
      border-radius: 3px;
      margin-bottom: 8px;

    }
  }

  .panel-list-item {
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    padding: 0 10px;
  }
</style>