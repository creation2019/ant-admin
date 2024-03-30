<script setup lang="ts">
import { useRouter } from 'vue-router'
interface FormState {
  username: string
  password: string
  remember: boolean
  select: string
  code: string
}
const router = useRouter()
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
  select: '',
  code: '',
})
const onFinish = (values: any) => {
  console.log('Success:', values)
  router.push('/')
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
defineOptions({
  name: 'Login',
})
</script>

<template>
  <div class="select-none">
    <div class="login-container">
      <div class="login-box">
        <div class="flex-1 flex flex-col px-12">
          <div class="info-logo flex items-center">
            <img src="../../assets/images/logo.svg" alt="logo" />
          </div>
          <div class="info-img">
            <img src="../../assets/images/chatu.svg" alt="" />
          </div>
        </div>
        <a-divider type="vertical" class="h-full" />
        <div class="flex-1 flex flex-col login-box-content">
          <div class="login-title">
            欢迎使用
            <div class="title">测试系统</div>
          </div>
          <div class="mt-10">
            <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed" size="large">
              <a-form-item label="" name="select" :rules="[{ required: true, message: 'Please input your username!' }]">
                <a-select v-model:value="formState.select" placeholder="Please select a country">
                  <a-select-option value="china">China</a-select-option>
                  <a-select-option value="usa">U.S.A</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="" :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input v-model:value="formState.username" />
              </a-form-item>
              <a-form-item label="" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input-password v-model:value="formState.password" autocomplete="off" />
              </a-form-item>
              <a-form-item label="" name="code" :rules="[{ required: true, message: 'Please input your password!' }]">
                <div class="flex">
                  <a-input v-model:value="formState.code" style="width: calc(100% - 200px)" />
                  <div style="width: 200px" class="px-4"></div>
                </div>
              </a-form-item>
              <a-form-item name="remember">
                <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
              </a-form-item>

              <a-form-item>
                <a-button type="primary" html-type="submit" block>登录</a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
      <div class="login-box-footer">技术支持：宁波文钥科技有限公司</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  padding: 40px 0;
  height: 100vh;
  min-height: 100vh;
  background-color: #fafafa;
  flex-direction: column;
}

.login-box {
  display: flex;
  padding: 40px 0;
  margin: 0 auto;
  width: 1200px;
  min-height: 680px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 30px #5f6f7c17;

  .info-logo {
    height: 40px;
    font-size: 28px;

    img {
      width: 60px;
    }
  }

  .info-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;

    img {
      width: 450px;
      max-height: 350px;
      object-fit: contain;
    }
  }

  .login-box-content {
    padding: 0 40px;

    .login-title {
      .title {
        font-size: 28px;
      }
    }
  }
}

.login-box-footer {
  padding: 0 40px;
  margin-top: 16px;
  width: 1000px;
  font-size: 14px;
  text-align: center;
  color: #aaa;
  line-height: 25px;
}
</style>
