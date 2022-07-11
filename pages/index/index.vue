<template>
  <view class="container">

    <view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
    <text class="intro">详见：</text>
    <uni-link :href="href" :text="href"></uni-link>
    <uni-card @click="todohandler()">
      历史记录
    </uni-card>
    <navigator url="/pagesA/history/history">

      <uni-card>
        待处理业务
      </uni-card>
    </navigator>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        href: 'https://uniapp.dcloud.io/component/README?id=uniui'
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
