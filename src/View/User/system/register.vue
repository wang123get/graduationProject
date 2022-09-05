<template>
  <div class='login'>
    <div class='box'>
      <div class='hidden md:block'>
        <img
          src='@/assets/image/register.jpg'
          class='h-80 w-full object-cover'
        />
      </div>
      <div class='p-6'>
        <h2 class='text-center text-gray-700 text-lg'>用户注册</h2>
        <form @submit='userRegister'>
          <div class='mt-3'>
            <el-tooltip
              class='box-item'
              :effect="errors.username ? 'dark' : 'light'"
              trigger='hover'
              :content='errors.username ? errors.username : welcomeTextFerch()'
              placement='right-start'
            >
              <ww-input
                type='text'
                placeholder='请输入昵称'
                v-model='usernameValue'
              />
            </el-tooltip>
            <el-tooltip
              class='box-item'
              :effect="errors.account ? 'dark' : 'light'"
              trigger='hover'
              :content='errors.account ? errors.account : welcomeTextFerch()'
              placement='right-start'
            >
              <ww-input
                type='text'
                placeholder='请输入邮箱或账号'
                class='mt-3'
                v-model='accountValue'
              />
            </el-tooltip>
            <el-tooltip
              class='box-item'
              :effect="errors.password ? 'dark' : 'light'"
              trigger='hover'
              :content='errors.password ? errors.password : welcomeTextFerch()'
              placement='right-start'
            >
              <ww-input
                type='password'
                placeholder='请输入密码'
                class='mt-3'
                v-model='passwordValue'
              />
            </el-tooltip>
            <el-tooltip
              class='box-item'
              :effect="errors.password_confirmation ? 'dark' : 'light'"
              trigger='hover'
              :content='
                errors.password_confirmation
                  ? errors.password_confirmation
                  : welcomeTextFerch()
              '
              placement='right-start'
            >
              <ww-input
                type='password'
                placeholder='请再次确认密码'
                class='mt-3'
                v-model='password_confirmationValue'
              />
            </el-tooltip>
          </div>
          <el-popover
            ref='popover'
            placement='right'
            :title="errorText() ? '提示' : '祝您'"
            :width='200'
            trigger='focus'
            :content='errorText() ? errorText() : welcomeTextFerch()'
          >
            <template #reference>
              <ww-button class='mt-5'>立即注册</ww-button>
            </template>
          </el-popover>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import v from '@/Main/plugins/validate'
import yup from '@/Main/plugins/validate/yup'
import { registerType } from './config'
import user from '@/api/User/user'
import { MessageSuccess, MessageWaring } from '@/components/utils'
import wwInput from '@/components/form/wwInput.vue'
import wwButton from '@/components/form/wwButton.vue'

export default defineComponent({
  name: 'register',
  components: { wwInput, wwButton },
  setup() {
    const sechema = v.yup.object({
      username: v.yup
        .string()
        .required('昵称不能为空！')
        .max(10, '昵称不能超过10位数!'),
      account: v.yup
        .string()
        .required('账号不能为空！')
        .matches(v.regexCode.emailOrPhone, '账号非正确手机号或邮箱!'),
      password: v.yup
        .string()
        .required('密码不能为空！')
        .min(3, '密码不能低于3位数！')
        .max(16, '密码不能高于16位数字!'),
      password_confirmation: v.yup
        .string()
        .required('请再次填写密码！')
        .oneOf([yup.ref('password'), null], '两次密码不一致！')
    })
    const { handleSubmit, errors } = v.useForm({
      validationSchema: sechema
    })

    const { value: usernameValue } = v.useField(
      'username',
      {},
      { label: '昵称' }
    )
    const { value: accountValue } = v.useField('account', {}, { label: '账号' })
    const { value: passwordValue } = v.useField(
      'password',
      {},
      { label: '密码' }
    )
    const { value: password_confirmationValue } = v.useField(
      'password_confirmation',
      'confirmed:password',
      { label: '二次密码' }
    )

    const userRegister = handleSubmit((value: registerType | any) => {
      user
        .register(
          value.username,
          value.account,
          value.password,
          value.password_confirmation
        )
        .then((key) => {
          if (key.status === true) {
            MessageSuccess('欢迎', key.message)
          } else {
            MessageWaring('', key.message)
          }
        })
    })
    const welcomeText = [
      '步步高升',
      '余钱多多',
      '年年有鱼',
      '生意兴隆',
      '心想事成',
      '万事如意',
      '寿与天齐',
      '蒸蒸日上'
    ]
    const welcomeTextFerch = () => {
      return welcomeText[Math.floor(Math.random() * welcomeText.length)]
    }

    const errorText = () => {
      let text = ''
      Object.keys(errors.value).forEach((key) => {
        text = text + errors.value[key] + '\n'
      })
      return text
    }

    return {
      userRegister,
      usernameValue,
      accountValue,
      passwordValue,
      password_confirmationValue,
      errors,
      welcomeTextFerch,
      errorText
    }
  }
})
</script>

<style scoped>
.login {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5;
}

.box {
  @apply w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden translate-y-32 md:-translate-y-16;
}
</style>
