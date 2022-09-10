<template>
  <div class='publishedArticle'>
    <div class='header'>
      <my-black-header />
    </div>
    <div class='editor border shadow-sm rounded-md'>
      <div class='title'>
        <h2 class='text-base border-b px-5 py-5 text-gray-800'>发表文章</h2>
      </div>
      <div class='titleInput'>
        <ww-input class='myInput' placeholder='请输入文章标题' />
      </div>
      <editor v-model='data' height='600px' class='myEditor' />
      <div class='buttonBox'>
        <el-button type='success' class='button'>
          发表
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import Editor from '@/components/markDown/editor.vue'
import MyBlackHeader from '@/components/Header/myBlackHeader.vue'
import WwInput from '@/components/form/wwInput.vue'
import WwButton from '@/components/form/wwButton.vue'

export default defineComponent({
  name: 'publishedArticle',
  components: { WwButton, WwInput, MyBlackHeader, Editor },
  setup() {
    const data = ref()
    console.log(data.value)
    return { data }
  }
})
</script>

<style scoped lang='less'>
.publishedArticle {

  .buttonBox {
    text-align: right;
    .button {
      width: 80px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }

  .editor {
    width: 1200px;
    background-color: white;
    margin: 20px auto;

    .title {
      height: 65px;
    }

    .titleInput {
      text-align: center;

      .myInput {
        width: 1180px;
        margin-bottom: 10px;
        margin-top: 10px;
      }
    }

    .myEditor {
      width: 1180px;
      margin: 0 auto 10px;
    }

    //全屏控制
    :deep(.fullScreen) {
      position: fixed !important;
      z-index: 9999;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fff;
    }

    //隐藏底部编辑器模式切换
    :deep(.toastui-editor-mode-switch) {
      display: none !important;
    }
  }
}
</style>
