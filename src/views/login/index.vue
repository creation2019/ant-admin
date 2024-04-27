<script setup lang="ts">
import { $getCodeImg, $getTenantList } from 'API/login'
import { LoginData, TenantVO } from 'API/types'
import { useUserStore } from 'Store/modules/user'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()
const loading = ref(false)
// 租户列表
const tenantList = ref<TenantVO[]>([])
// 租户开关
const tenantEnabled = ref(true)
const redirect = ref(undefined)
const formState = ref<LoginData>({
  tenantId: '',
  username: '',
  password: '',
  rememberMe: false,
  code: '',
  uuid: '',
})
// 验证码开关
const captchaEnabled = ref(true)
const onFinish = async (values: any) => {
  try {
    loading.value = true
    await userStore.login(values)
    await router.push({ path: redirect.value || '/' })
  } catch (error) {
    loading.value = false
    // 重新获取验证码
    if (captchaEnabled.value) {
      await getCode()
    }
    console.log(' ', error)
  }

  // router.push('/')
}
const codeUrl = ref('')
/**
 * 获取租户列表
 */
const initTenantList = async () => {
  try {
    const { data } = await $getTenantList()
    tenantEnabled.value = data?.tenantEnabled === undefined ? true : data?.tenantEnabled
    if (tenantEnabled.value) {
      tenantList.value = data?.voList
      if (tenantList.value && tenantList.value.length !== 0) {
        formState.value.tenantId = tenantList.value[0].tenantId
      }
    }
  } catch (error) {
    console.log(error)
  }
}
/**
 * 获取验证码
 */
const getCode = async () => {
  try {
    const { data } = await $getCodeImg()
    captchaEnabled.value = data.captchaEnabled === undefined ? true : data.captchaEnabled
    if (captchaEnabled.value) {
      codeUrl.value = 'data:image/gif;base64,' + data.img
      formState.value.uuid = data.uuid as string
    }
  } catch (error) {
    console.log('error:', error)
  }
}

onMounted(() => {
  initTenantList()
  getCode()
})
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
            <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish" size="large">
              <a-form-item label="" name="tenantId" :rules="[{ required: true, message: '请选择/输入公司名称' }]">
                <a-select v-model:value="formState.tenantId" placeholder="请选择/输入公司名称">
                  <a-select-option v-for="item in tenantList" :key="item.tenantId" :value="item.tenantId">
                    {{ item.companyName }}
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="" name="username" :rules="[{ required: true, message: '登录账号不能为空' }]">
                <a-input v-model:value="formState.username" placeholder="请输入登录账号" />
              </a-form-item>
              <a-form-item label="" name="password" :rules="[{ required: true, message: '登录密码不能为空' }]">
                <a-input-password v-model:value="formState.password" autocomplete="off" placeholder="请输入登录密码" />
              </a-form-item>
              <a-form-item label="" name="code" :rules="[{ required: true, message: '请输入验证码' }]">
                <div class="flex">
                  <a-input v-model:value="formState.code" style="width: calc(100% - 200px)" placeholder="请输入验证码" />
                  <div style="width: 200px" class="pl-4 login-code-img">
                    <img :src="codeUrl" @click="getCode" alt="校验码" />
                  </div>
                </div>
              </a-form-item>
              <a-form-item name="rememberMe">
                <a-checkbox v-model:checked="formState.rememberMe">记住密码</a-checkbox>
              </a-form-item>
              <a-form-item name="uuid" style="height: 0">
                <a-input v-model:value="formState.uuid" type="hidden" />
              </a-form-item>
              <a-form-item>
                <a-button type="primary" html-type="submit" block :loading="loading">登录</a-button>
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

    .login-code-img {
      height: 40px;

      img {
        width: 100%;
        height: 38px;
        cursor: pointer;
        vertical-align: middle;
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
