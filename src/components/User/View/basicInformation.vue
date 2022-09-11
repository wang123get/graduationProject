<template>
  <div class='basicInformation'>
    <div>
      <ul id='userInfo'>
        <li style='margin:0 3px; border-right: 1px solid #e4e7ed' @click='clickA("info")'><a id='info'>基本信息</a></li>
        <li @click='clickA("avatar")'><a id='avatar'>修改头像</a></li>
      </ul>
    </div>
    <div class='showContent'>
      <basic-user-info v-if='temp === "info"' />
      <change-avatar v-if='temp === "avatar"' />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import BasicUserInfo from '@/components/User/View/cpns/basicUserInfo.vue'
import ChangeAvatar from '@/components/User/View/cpns/changeAvatar.vue'

export default defineComponent({
  name: 'basicInformation',
  components: { ChangeAvatar, BasicUserInfo },
  setup() {

    onMounted(() => {
      clickA('info')
    })
    const temp = ref('info')
    const clickA = (id: string) => {
      temp.value = id
      let data = document.getElementById('userInfo')?.getElementsByTagName('a')
      for (let i = 0; i < 2; i++) {
        //@ts-ignore
        if (data[i].id === id) {
          //@ts-ignore
          data[i].style.color = '#80c8f8'
        } else {
          //@ts-ignore
          data[i].style.color = '#000000'
          console.log('启动')
        }
      }
    }
    return { clickA, temp }
  }
})
</script>

<style scoped lang='less'>
ul {
  width: 172px;
  height: 44px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top: 1px solid #e4e7ed;
  border-left: 1px solid #e4e7ed;
  border-right: 1px solid #e4e7ed;
  background-color: white;
  text-align: center;

  li {
    width: 81px;
    padding: 10px;
    float: left;
    cursor: pointer;
    font-weight: 500;
    font-size: 15px;

    a {
      color: black;
    }

    a:hover {
      color: #80c8f8;
    }
  }
}


.showContent {
  background-color: white;
  width: 100%;
  border: 1px solid #e4e7ed;

}
</style>
