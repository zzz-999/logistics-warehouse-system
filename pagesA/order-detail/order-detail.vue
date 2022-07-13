<template>
  <view>
    <image src="../../static/login_1.png" mode="aspectFit" style="width: 100%;background-color: #3388ec;height: 150px;">
      <uni-card v-if="tableStatus==1">
        {{id}}订单详情
      </uni-card>

      <uni-card v-if="tableStatus==2">
        物流信息
      </uni-card>

      <view style="margin-top: 20px;margin-left: 20px;">

        <uni-row>
          <uni-col span="6"><button size="mini" style="font-size: 10px;background-color: #de868f;"
              @click="editOrder">修改订单</button></uni-col>
          <uni-col span="6"><button size="mini" style="font-size: 10px;background-color: #a2ef4d;"
              @click="refund">申请退款</button></uni-col>
          <uni-col span="6"><button size="mini" style="font-size: 10px;background-color: #b4fdff;"
              @click="gotoLogistics">{{infoName}}</button></uni-col>
          <uni-col span="6"><button size="mini" style="font-size: 10px;background-color: #4095e5;"
              @click="deleteOrder">取消订单</button></uni-col>
        </uni-row>
      </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        id: 0,
        tableStatus: 1,
        table: {},
        infoName: '物流信息'
      }
    },
    onLoad(options) {
      this.id = options.id
    },
    methods: {
      editOrder() {
        uni.$showMsg('编辑订单')

      },
      refund() { uni.$showMsg('申请退款') },
      gotoLogistics() {
        uni.$showMsg('查看物流')
        if (this.tableStatus === 1) {
          this.tableStatus = 2,
            this.infoName = '订单信息'
        } else {
          this.tableStatus = 1,
            this.infoName = '物流信息'
        }
      },
      deleteOrder() { uni.$showMsg('取消订单') }
    }
  }
</script>

<style lang="scss">

</style>
