<template>
  <view>
    <uni-row>
      <uni-col span="8">
        <view class="my-center" @click="getPackage">取件</view>
      </uni-col>
      <uni-col span="8">
        <view class="my-center" @click="sendPackage">寄件</view>
      </uni-col>
      <uni-col span="8">
        <view @click="myScan()">
          <image src="../../static/antOutline-scan.svg" style="width: 20px;height: 20px;margin-left: 50px;"></image>
        </view>
      </uni-col>
    </uni-row>
    <view v-if="ordertables.length===0">
      <my-empty></my-empty>
    </view>
    <view v-else>
      <uni-card v-for="item in ordertables" @click="gotoOrderInfo(item.id)">
          {{item.id}}
      </uni-card>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'order-manage',
    data() {
      return { ordertables: [{ id: 1 }, { id: 2 }], }
    },
    methods: {
      getPackage() {
        uni.$showMsg('查看数据')
        console.log(this.ordertables.length)
      },
      sendPackage() {
        uni.$showMsg('发起计件')
      },
      myScan() {
        this._getDataByScan()
      },
      async _getDataByScan() {
        const res = await uni.scanCode()
        if (res.length === 1) {
          uni.$showMsg('扫码失败，请重新尝试')
        }
        console.log(res)
      },
      gotoOrderInfo(id) {
        uni.navigateTo({ url:`/pagesA/order-detail/order-detail?id=${id}` })
        console.log(id)
      }
    }
  }
</script>

<style lang="scss">
  .my-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
