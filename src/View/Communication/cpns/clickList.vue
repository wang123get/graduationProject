<template>
  <div class='clickList'>
    <div class='clickLess'>
      <router-link to='/communication/推荐'>
        <li><span style='font-size: 15px'>推 荐</span></li>
      </router-link>
    </div>
    <div class='clickLess'>
      <router-link to='/communication/关注'>
        <li><span style='font-size: 15px'>关 注</span></li>
      </router-link>
    </div>
    <div
      style='width: 80px; margin: 0 auto; border-bottom: #dcdcdc 1px solid'
    ></div>
    <div class='clickLess'>
      <router-link to='/communication/管理话题'><li><span style='font-size: 15px'># 管理话题</span></li></router-link>
    </div>
    <div class='userLike'>
      <ul>
        <template v-for='tag in mockData'>
          <router-link :to='"/communication/"+tag'>
            <li>
              <span>{{ tag }}</span>
            </li>
          </router-link>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'clickList',
  components: {},
  setup() {
    let mockData = ['谈天说地', '天地同受', '七仙女', '霸王', '哦吼']
    return { mockData }
  }
})
</script>

<style scoped lang='less'>
.router-link-exact-active {
  li {
    background-color: #e5f2ff;
    border-radius: 4px;
    span {
      color: #0084ff;
    }
  }
}

.clickList {
  .clickLess {
    li {
      list-style: none;
      padding-left: 20px;
      cursor: pointer;
      width: 120px;
      height: 34px;
      margin: 2px auto;
      line-height: 34px;
    }

    li:hover {
      background-color: #e5f2ff;
      border-radius: 4px;
    }
  }


  .userLike {
    ul {
      li {
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        width: 120px;
        height: 34px;
        margin: 2px auto;
        line-height: 34px;
        color: #909090
      }

      li:hover {
        background-color: #e5f2ff;
        border-radius: 4px;
      }
    }
  }
}
</style>
