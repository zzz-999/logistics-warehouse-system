<template>
  <view>
    <uni-card>
      <uni-row>
        <uni-col span="12">
          <view
            style="background-color: #4167f6;border-radius: 3px;height: 40px;margin:10px 30px 10px -10px;color: black;justify-content: center;align-items: center;display: flex;font-size: 20px;height: 70px;"
            @click="getPackage">取包裹</view>
        </uni-col>
        <uni-col span="12">

          <uni-row>
            <view
              style="height: 30px;background-color: #8659ca;display: flex;align-items: center;justify-content: center;color: black;border-radius: 3px;margin: 10px 10px 10px -5px;"
              @click="sendPackage">寄包裹</view>
          </uni-row>
          <uni-row>
            <view
              style="height: 30px;background-color: #a3c86d;display: flex;align-items: center;justify-content: center;color: black;border-radius: 3px;margin: 0px 10px 10px -5px;"
              @click="getPersonalCode">身份码</view>
          </uni-row>
        </uni-col>
      </uni-row>
    </uni-card>
  </view>
</template>

<script>
  export default {
    name: 'admin',
    data() {
      return {}
    },
    methods: {
      getPackage() {
        uni.$showMsg('取包裹')
      },
      sendPackage() {
        uni.$showMsg('发包裹')
        uni.navigateTo({ url:'/pagesA/send-package/send-package' })
      },
      getPersonalCode() {
        uni.$showMsg('获取身份码')
      }
    }
  }
</script>

<style lang="scss">

</style>
