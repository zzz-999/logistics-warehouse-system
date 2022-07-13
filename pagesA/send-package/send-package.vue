<template>
  <view>
    <image src="../../static/login_1.png" mode="aspectFit" style="width: 100%;background-color: #3388ec;height: 150px;">
    <uni-card title="寄件人">
      <uni-forms ref="fromForm" :rules="rules">
        <uni-forms-item label="名称" name="name">
          <uni-easyinput v-model="fromForm.name" placeholder="输入寄件人名称"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item label="电话" name="tel">
          <uni-easyinput v-model="fromForm.name" placeholder="输入寄件人电话"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item label="地址" name="address">
          <uni-easyinput v-model="fromForm.address" type="textarea" placeholder="输入寄件人地址"></uni-easyinput>
        </uni-forms-item>
      </uni-forms>
    </uni-card>
    <uni-card title="收件人">
      <uni-forms ref="toForm" :rules="rules">
        <uni-forms-item label="名称" name="name">
          <uni-easyinput v-model="toForm.name" placeholder="输入收件人名称"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item label="电话" name="tel">
          <uni-easyinput v-model="toForm.name" placeholder="输入收件人电话"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item label="地址" name="address">
          <uni-easyinput v-model="toForm.address" type="textarea" placeholder="输入收件人地址"></uni-easyinput>
        </uni-forms-item>
      </uni-forms>
    </uni-card>
    <uni-row>
      <uni-col span="12"><button type="primary" size="mini" style="margin: 10px 10px 10px 100px;" @click="save">保存</button></uni-col>
      <uni-col span="12"><button type="primary" size="mini" style="margin: 10px;" @click="deal">立即下单</button></uni-col>
    </uni-row>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        fromForm:{},
        toFrom:{}
      }
    },
    methods: {
      save(){
        uni.$showMsg('保存处理')
      },
      deal(){
        uni.$showMsg('下订单')
      }
    }
  }
</script>

<style lang="scss">

</style>
