<template>
  <view style="background-color: white;height: 100%;">
    <image src="../../static/login_1.png" mode="aspectFit" style="width: 100%;background-color: #3388ec;height: 150px;">

      <uni-row class="demo-uni-row">
        <uni-col :span="6">
          <image src="../../static/login_2.png" style="width: 50px;height: 50px;padding-left: 10px;padding-top: 10px;">
          </image>
          <view classd="demo-uni-col dark"></view>
        </uni-col>
        <uni-col :span="6">
          <view style="text-align: center;margin-top:20px ;" @click="methodChangeHandle(1)">账号登录</view>
        </uni-col>
        <uni-col :span="8">
          <view style="text-align: end;margin-top:20px;" @click="methodChangeHandle(2)">短信登录</view>
        </uni-col>
      </uni-row>

      <view class="example">
        <!-- 基础用法， -->
        <uni-forms ref="loginForm" :modelValue="loginForm" :rules="loginRules">

          <uni-forms-item label="账号" v-if="loginMethod==1" name="nickName">
            <uni-easyinput v-model="loginForm.nickName" placeholder="请输入账号" />
          </uni-forms-item>

          <uni-forms-item label="密码" v-if="loginMethod==1" name="password">
            <uni-easyinput v-model="loginForm.password" placeholder="请输入密码" type="password" />
          </uni-forms-item>

          <uni-forms-item label="电话号码" v-if="loginMethod==2" name="tel">
            <uni-easyinput v-model="loginForm.tel" placeholder="请输入电话号码" type="number" />
          </uni-forms-item>

          <uni-forms-item label="验证码" v-if="loginMethod==2" name="note">
            <uni-row class="demo-uni-row">
              <uni-col :span="12">
                <uni-easyinput v-model="loginForm.note" placeholder="请输入验证码" />
              </uni-col>
              <uni-col :span="12">
                <button @click="sendNote()" type="primary" size="mini" style="margin: 3px 10px;">发送验证码</button>
              </uni-col>
            </uni-row>
          </uni-forms-item>

          <button @click="loginHandle" type="primary">登录</button>
        </uni-forms>
      </view>

      <view style="margin: 20px 20px 20px 30px;">
        <uni-row>
          <uni-col :span="8">
            <view class="divider"></view>
          </uni-col>
          <uni-col :span="8">
            <view style="margin-left: 13px;font-size: 12px;padding-bottom: 40px;">其他方式登录</view>
          </uni-col>
          <uni-col :span="8">
            <view class="divider"></view>
          </uni-col>
        </uni-row>
        <view @click="loginByWX">
          
        <image src="../../static/login_3.png" mode="aspectFit" style="width: 320px;height: 20px;"></image>
        </view>
      </view>

  </view>
</template>

<script>
  export default {
    name: 'my-login',
    data() {
      return {
        loginForm: {},
        loginMethod: 1,
        loginRules: {
          nickName: {
            rules: [{
              required: true,
              errorMessage: '请输入账号'
            }],
          },
          password: {
            rules: [{
              required: true,
              errorMessage: '请输入密码'
            }]
          },
          tel: {
            rules: [{
              required: true,
              errorMessage: '请输入手机号'
            }]
          },
          note: {
            rules: [{
              required: true,
              errorMessage: '请输入验证码'
            }]
          }
        }
      }
    },
    methods: {
      methodChangeHandle(data) {
        this.loginMethod = data
      },
      loginHandle() {
        uni.showLoading()
        this.$refs.loginForm.validate().then(res => {
          uni.hideLoading()
          uni.$showMsg('登录')
        }).catch(err => {
          uni.hideLoading()
          uni.$showMsg('请输入正确的信息')
        })
        //todo
      },
      sendNote() {
        uni.$showMsg('发送验证码')
      },
      loginByWX(){
        uni.$showMsg('发起微信登录')
      }
    }
  }
</script>

<style lang="scss">
  .example {
    padding: 15px;
    background-color: #fff;
  }

  .divider {
    content: "";
    width: 100px;
    height: 1px;
    background: #e9edf2;
    // position: absolute;
  }
</style>
