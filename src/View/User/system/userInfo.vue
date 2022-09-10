<template>
  <div class='userInfo'>
    <div class='header'>
      <my-black-header />
    </div>
    <div class='bigBox'>
      <div class='leftBox'>
        <div class='userAvatar'>
          <avatar-card />
        </div>
      </div>
      <div class='contentList'>
        <tree-show :options='options'/>
      </div>
      <div class='showList'>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import MyBlackHeader from '@/components/Header/myBlackHeader.vue'
import AvatarCard from '@/components/User/avatarCard.vue'
import TreeShow from '@/components/User/config/treeShow.vue'


export default defineComponent({
  name: 'userInfo',
  components: { TreeShow, AvatarCard, MyBlackHeader },
  setup() {
    const options = [
      'basicInformation',
      'password',
      'vip',
      'resources',
      'article'
    ]
    return { options }
  }
})
</script>

<style scoped lang='less'>
.userInfo {

  .bigBox {
    width: 1100px;
    margin: 20px auto;
    position: relative;
    .leftBox {
      .userAvatar {
        width: 600px;
      }
    }
    .contentList{
      margin-left: 100px;
    }
    .showList {
      width: 800px;
      height: 100px;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}



</style>
