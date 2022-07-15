<template>
  <view>
    <image src="../../static/login_1.png" mode="aspectFit" style="width: 100%;background-color: #3388ec;height: 150px;">
    <uni-row>
      <uni-col span="12"><view class="my-center" @click="todo">未取件</view></uni-col>
      <uni-col span="12"><view class="my-center" @click="done">已取件</view></uni-col>
    </uni-row>
    <uni-card v-for="item in orderlist" @click="gotoInfo">
      {{item.id}}信息
    </uni-card>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        orderlist: [
          { id:1 },
          { id:2 }
        ]
      }
    },
    methods: {
      todo() {
        uni.$showMsg('未区间')
      },
      done() {
        uni.$showMsg('已取件')
      },
      gotoInfo() {
        uni.navigateTo({ url:'/pagesA/courier-info/courier-info' })
      }
    }
  }
</script>

<style lang="scss">
.my-center{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>