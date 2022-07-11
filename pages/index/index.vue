<template>
  <view class="container">

    <!--    <view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
    <text class="intro">详见：</text>
    <uni-link :href="href" :text="href"></uni-link> -->
    <uni-card @click="inbound()">
      <uni-row class="demo-uni-row">
      	<uni-col :span="12">
      		<view class="demo-uni-col dark">我是你爹</view>
      	</uni-col>
      	<uni-col :span="12">
      		<view class="demo-uni-col light">我是你大爷</view>
      	</uni-col>
      </uni-row>
    </uni-card>
    <navigator url="/pagesA/history/history">
      <uni-card>
        待处理业务
      </uni-card>
    </navigator>
    <!-- <button @click="inbound">扫描</button> -->

  </view>
</template>

<script>
  export default {
    
    data() {
      return {
        href: 'https://uniapp.dcloud.io/component/README?id=uniui',
        scanData: ""
      }
    },
    methods: {
      todohandler() {
        uni.$showMsg("点击成功")
        let url = "/pagesA/todo/todo"
        uni.navigateTo({
          url,
          fail(error) {
            console.log(error)
          }
        })
      },
      // 入库
      inbound() {
        this._getDataByScan();
      },
      // 出库
      outbound() {
        // todo
      },
      async _getDataByScan() {
        const res = await uni.scanCode()
        if (res.length === 1) {
          uni.$showMsg("扫码失败，请重新尝试")
        }
        console.log(res.length)
      }
    }
  }
</script>

<style>
  .container {
    padding: 20px;
    font-size: 14px;
    line-height: 24px;
  }
</style>
