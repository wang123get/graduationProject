<template>
  <div>
    <ul>
      <template v-for="myRoute in options">
        <li class="demo" id="tree">
          <router-link :to="'/' + myRoute">
            <span>{{ data[myRoute] }}</span>
          </router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'treeShow',
  components: {},
  props: {
    options: {
      required: true
    }
  },
  setup() {
    const data = {
      basicInformation: '基本信息',
      password: '修改密码',
      vip: '会员周期',
      resources: '已购资源',
      article: '文章管理'
    }
    return { data }
  }
})
</script>

<style scoped lang="less">
.demo {
  span {
    display: inline-block;
    line-height: 40px;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    border-right: 2px solid #e4e7ed;
    font-size: 14px;
    font-weight: 500;
    color: #716c6c;
    cursor: pointer;
  }

  span:hover {
    color: var(--el-color-primary);
  }

  .router-link-exact-active {
    span {
      color: var(--el-color-primary);
      border-right: 2px solid var(--el-color-primary);
    }
  }
}
</style>
