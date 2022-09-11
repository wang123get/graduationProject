<template>
  <div class='basicUserInfo'>
    <div class='from'>
      <el-form
        :ref='formRef'
        id='myForm'
        label-position='right'
        label-width='100px'
        :model='formLabelAlign'
        style='max-width: 700px'
      >
        <el-form-item label='昵称'>
          <ww-input-blue v-model='formLabelAlign.name' />
        </el-form-item>
        <el-form-item label='邮箱'>
          <ww-input-blue v-model='formLabelAlign.email' />
        </el-form-item>
        <el-form-item label='微信号'>
          <ww-input-blue v-model='formLabelAlign.wechat' />
        </el-form-item>
        <el-form-item label='微博'>
          <ww-input-blue v-model='formLabelAlign.weibo' />
        </el-form-item>
        <el-form-item label='GitHub'>
          <ww-input-blue v-model='formLabelAlign.GitHub' />
        </el-form-item>
        <el-form-item label='QQ'>
          <ww-input-blue v-model='formLabelAlign.QQ' />
        </el-form-item>
        <el-form-item>

          <el-button @click='resetForm("myForm")'>清空表单</el-button>
          <el-button type='primary' @click='submitForm(formRef)'
          >保存提交
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import WwInputBlue from '@/components/form/wwInputBlue.vue'
import type { FormInstance } from 'element-plus'

export default defineComponent({
  name: 'basicUserInfo',
  components: { WwInputBlue },
  setup() {
    const formLabelAlign = reactive({
      name: '',
      email: '',
      wechat: '',
      weibo: '',
      GitHub: '',
      QQ: ''
    })

    const formRef = ref<FormInstance>()

    const submitForm = async (formEl: FormInstance | undefined) => {
      // if (!formEl) return
      console.log(formLabelAlign)
      // await formEl?.validate((valid, fields) => {
      //   if (!valid) {
      //     console.log(formLabelAlign)
      //   } else {
      //     console.log('error submit!', fields)
      //   }
      // })
    }

    const resetForm = (formEl: string | undefined) => {
      //@ts-ignore
      document.getElementById(formEl).reset()
    }

    return { formLabelAlign, submitForm, resetForm, formRef }
  }
})
</script>

<style scoped lang='less'>
.basicUserInfo {
  .from {
    margin-top: 20px;
  }
}

</style>
