<template>
  <div class='Box'>
    <div class='input'>
      <span style='color: #716c6c;font-size: 18px'>{{ data[time] }}:
      </span>
      <ww-input-blue type='password' style='margin-top: 10px'/>
    </div>
    <div class='showTime'>
      <div class='card' v-if='time ==="inputPassword"'>
        <el-progress type='circle' :percentage='0' />
        <span>填写现有密码</span>
      </div>
      <div class='card' v-if='time ==="changePassword"'>
        <el-progress type='circle' :percentage='50' />
        <span>修改密码</span>
      </div>
      <div class='card' v-if='time ==="success"'>
        <el-progress type='circle' :percentage='100' status='success'>
          <el-button type='success' :icon='Check' circle />
        </el-progress>
        <span>修改成功</span>
      </div>
    </div>
    <div>
      <ww-button class='wwButton'>下一步</ww-button>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { Check } from '@element-plus/icons-vue'
import WwButton from '@/components/form/wwButton.vue'
import WwInputBlue from '@/components/form/wwInputBlue.vue'

export default defineComponent({
  name: 'changePassword',
  components: { WwButton,  WwInputBlue },
  setup() {
    const time = ref('inputPassword')
    const data = {
      inputPassword: '请输入现有密码',
      changePassword: '修改密码'
    }
    return { Check, time, data }
  }
})
</script>

<style scoped lang='less'>
.Box {
  width: 700px;
  height: 180px;
  background-color: white;
  border: 1px solid #e4e7ed;
  border-radius: 10px;

  .wwButton {
    width: 80px;
    margin-left: 30px;
    margin-top: 110px;
  }

  .input {
    width: 200px;
    margin-top: 80px;
    float: left;
    margin-left: 20px;
  }

  .showTime {
    float: right;
    margin: 10px 40px;
    width: 126px;
    height: 126px;

    .card {
      span {
        text-align: center;
        display: block;
        color: #716c6c;
      }
    }
  }
}
</style>
