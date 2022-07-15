<template>
  <view>
    <image src="../../static/login_1.png" mode="aspectFit" style="width: 100%;background-color: #3388ec;height: 150px;">
    <uni-card>
      订单详情
    </uni-card>
    <button type="primary" @click="contact" style="width: 300px;border-radius: 30px;">联系客户</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods:{
      contact() {
        uni.$showMsg('联系客户')
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
