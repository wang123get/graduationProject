<template>
  <div class='login'>
    <div class='box'>
      <div class='p-6'>
        <h2 class='text-center text-gray-700 text-lg mt-1'>用户登录</h2>
        <form @submit='userLogin'>
          <div class='mt-6'>
            <ww-input
              type='text'
              placeholder='请输入邮箱或手机号'
              v-model='usernameValue'
            />
            <p class='inputErrorStyle' v-if='errors.username'>
              {{ errors.username }}
            </p>
            <ww-input
              type='password'
              placeholder='请输入密码'
              class='mt-6'
              v-model='passwordValue'
            />
            <p class='inputErrorStyle' v-if='errors.password'>
              {{ errors.password }}
            </p>
          </div>
          <div style='float: right' class='mt-1'>
            <el-checkbox label='记住密码' />
          </div>
          <ww-button class='mt-1'>登录</ww-button>
        </form>
        <div class='flex gap-2 justify-center mt-5'>
          <router-link to='/home' class='text-sm text-gray-700'
          >网站首页
          </router-link>
          <router-link to='/home/register' class='text-sm text-gray-700'
          >用户注册
          </router-link>
          <router-link to='/home/register' class='text-sm text-gray-700'
          >找回密码
          </router-link>
        </div>
      </div>
      <div class='hidden md:block'>
        <img
          src='@/assets/image/login.jpg'
          class='h-80 w-full object-cover'
        />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import v from '@/plugins/validate'
import wwInput from '@/components/form/wwInput.vue'
import wwButton from '@/components/form/wwButton.vue'

export default defineComponent({
  name: 'login',
  components: { wwInput, wwButton },
  setup() {
    const { handleSubmit, errors } = v.useForm({
      initialValues: {
        username: '',
        password: ''
      },
      validationSchema: {
        username: v.yup
          .string()
          .required('账号不能为空')
          .matches(v.regexCode.emailOrPhone, '账号错误'),
        password: v.yup.string().required('密码不能为空')
      }
    })

    const { value: usernameValue } = v.useField(
      'username',
      {},
      { label: '用户名' }
    )

    const { value: passwordValue } = v.useField(
      'password',
      {},
      { label: '密码' }
    )

    const userLogin = handleSubmit((value: any) => {
      const userInfo = user.login(value.username, value.password)
      userInfo.then((e) => {
        console.log(e)
      })
    })

    return { userLogin, usernameValue, passwordValue, errors }
  }
})
</script>

<style scoped lang='scss'>
.login {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5;
}

.box {
  @apply w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden translate-y-32 md:-translate-y-16;
}

.inputErrorStyle {
  font-size: 13px;
  color: red;
  position: absolute;
  margin-top: 2px;
}
</style>
