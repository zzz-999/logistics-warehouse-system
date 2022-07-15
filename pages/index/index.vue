<template>
  <view>
    <image src="../../static/login_1.png" mode="aspectFit" style="width: 100%;background-color: #3388ec;height: 150px;">
      <button @click="todo"></button>
      <view v-if="userinfo.roleId === 1">
        <admin></admin>
        <order-manage></order-manage>
      </view>
      <view v-else-if="userinfo.roleId === 2">
        <courier-home></courier-home>
      </view>
      <view v-else>
        <navigator open-type="switchTab" url="/pages/my/my">
          
        <uni-card>
          <view style="height: 200px;display: flex;align-items: center;justify-content: center;font-size: 24px;">
            请先登录
          </view>
        </uni-card>
        </navigator>
      </view>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: { ...mapState('my',['userinfo']) },
    data() {
      return {
        href: 'https://uniapp.dcloud.io/component/README?id=uniui',
        scanData: ''
      }
    },
    methods: {
      todohandler() {
        uni.$showMsg('点击成功')
        let url = '/pagesA/todo/todo'
        uni.navigateTo({
          url,
          fail(error) {
            console.log(error)
          }
        })
      },
      // 入库
      inbound() {
        this._getDataByScan()
      },
      // 出库
      outbound() {
        // todo
      },
      async _getDataByScan() {
        const res = await uni.scanCode()
        if (res.length === 1) {
          uni.$showMsg('扫码失败，请重新尝试')
        }
        console.log(res)
      }
    }
  }
</script>

<style>
</style>
