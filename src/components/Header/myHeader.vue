<template>
  <div class="myHeader">
    <img
      src="~@/assets/coffee.svg"
      width="40"
      style="float: left; margin-top: 8px; margin-left: 60px"
      alt=""
    />
    <span class="blogFont">休闲客栈</span>
    <div class="searchFont">
      <ul>
        <li>
          <img src="~@/assets/image/home.png" width="18" /><a
          @click="chickRouterM()"
        >首页</a
        >
        </li>
        <li>
          <img src="~@/assets/image/luntan.png" width="18" /><a
          @click="chickRouterM()"
        >交流论坛</a
        >
        </li>
        <li>
          <el-dropdown style="margin-top: 3px" @command="handleCooand">
            <span>
              <img src="~@/assets/image/classify.png" width="18" /><a>分类</a>
              <el-icon class="el-icon--right" style="color: white">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="/mall">商城</el-dropdown-item>
                <el-dropdown-item>项目</el-dropdown-item>
                <el-dropdown-item>学习资料</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
        <li>
          <img src="~@/assets/image/time.png" width="20" /><a
          @click="chickRouterT()"
        >时间轴</a
        >
        </li>
        <li>
          <img src="~@/assets/image/book.png" width="18" /><a
          @click="chickRouterP()"
        >标签</a
        >
        </li>
      </ul>
    </div>
    <div class="search">
      <input placeholder="搜索" />
      <img
        style="cursor: pointer"
        src="~@/assets/image/search.png"
        width="20"
        class="myImg"
      />
    </div>
  </div>
  <div>
    <div class="myAvatar">
      <el-dropdown @command="handleCooand">
        <span>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span
            style="
              right: 10px;
              font-size: 16px;
              color: white;
              position: relative;
              left: 10px;
              top: -13px;
            "
          >awddawsdwad
            <el-icon class="el-icon--right" style="color: white">
              <arrow-down />
            </el-icon>
          </span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="User/info">个人信息</el-dropdown-item>
            <el-dropdown-item command="User/publishedArticle"
            >发表文章
            </el-dropdown-item>
            <el-dropdown-item divided command="User/changePassword"
            >修改密码
            </el-dropdown-item>
            <el-dropdown-item command="User/outLogin"
            >退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const handleCooand = (command: string) => {
      console.log(command)
      if (command === '/mall') {
        const routeUrl = router.resolve({
          path: command
        })
        window.open(routeUrl.href, '_blank')
      } else {
        router.push({
          path: command
        })
      }
    }

    const chickRouterM = () => {
      router.push('/home')
    }

    const chickRouterP = () => {}

    const chickRouterT = () => {
      router.push({
        path: 'home/login'
      })
    }
    return {
      chickRouterM,
      chickRouterT,
      chickRouterP,
      handleCooand
    }
  }
})
</script>

<style scoped lang="less">
.myHeader {
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 5px 6px -5px rgba(133, 133, 133, 0.6);

  .blogFont {
    font-size: 1.3em;
    color: #ffffff;
    font-weight: bold;
    line-height: 60px;
  }

  .searchFont {
    float: right;
    height: 60px;
    width: 520px;
    margin-right: 80px;

    ul {
      margin-left: 20px;
      margin-top: 23px;
      transform: translate(-50%, -50%);

      img {
        margin-bottom: 5px;
        margin-right: 5px;
        display: inline;
      }

      li {
        a {
          text-decoration: none;
          font-weight: 550;
          font-size: 14px;
          color: white;
        }

        cursor: pointer;
        float: left;
        margin-left: 35px;
        transition: 0.2s all linear;
        position: relative;
        list-style: none;
      }

      li::before {
        content: '';
        position: absolute;
        top: 0;
        right: 100%;
        width: 0;
        height: 100%;
        border-bottom: 2px solid #80c8f8;
        transition: 0.2s all linear;
      }

      li:hover::before {
        width: 100%;
        top: 0;
        right: 0;
        transition-delay: 0.1s;
        border-bottom-color: #80c8f8;
        z-index: -1;
      }

      li:hover ~ li::before {
        left: 0;
      }
    }
  }

  .search {
    left: 44%;
    position: absolute;
    top: 0;

    input {
      background: rgba(255, 255, 255, 0.1);
      color: darkgray;
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      border-radius: 15px;
      box-sizing: border-box;
      width: 200px;
      padding-left: 8px;
      margin-top: 19px;
      margin-right: -30px;
    }
  }

  .myImg {
    position: relative;
    left: 170px;
    top: -25px;
  }
}

.search {
  input:focus {
    text-decoration: underline;
    outline: 1px solid #656161;
  }
}

.Box {
  width: 100%;
  height: 100%;
  background-color: #716c6c;
}

.myAvatar {
  position: absolute;
  top: 10px;
  right: 30px;
}
</style>
