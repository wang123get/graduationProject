<template>
  <el-row>
    <el-col
      :span='8'
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          src='https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
          class='image'
        />
        <div style='padding: 14px'>
          <span>coderWW</span>
          <div class='bottom'>
            <time class='time'>{{ currentDate }}</time>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'avatarCard',
  components: {},
  setup() {
    const currentDate = ref(new Date())
    return { currentDate }
  }
})
</script>

<style scoped lang='less'>

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

</style>
