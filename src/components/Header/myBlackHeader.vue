<template>
  <div class='myHeader'>
    <div class='title'>
      <div class='titleImg'>
        <img
          src='~@/assets/coffee.svg'
        />
      </div>
      <span class='titileName'>休闲客栈</span>
    </div>
    <div class='pageList'>
      <ul>
        <li>
          <img src='~@/assets/image/darkHome.png' width='18' /><a
          @click='chickRouterM()'
        >首页</a
        >
        </li>
        <li>
          <img src='~@/assets/image/luntan-purple.png' width='18' /><a
          @click='chickRouterM()'
        >交流论坛</a
        >
        </li>
        <li>
          <el-dropdown style='margin-top: 3px' @command='handleCooand'>
                  <span>
                    <img src='~@/assets/image/darkFei.png' width='18' /><a>分类</a>
                    <el-icon class='el-icon--right' style='color: purple'>
                      <arrow-down />
                    </el-icon>
                  </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command='/mall'>商城</el-dropdown-item>
                <el-dropdown-item>项目</el-dropdown-item>
                <el-dropdown-item>学习资料</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
        <li>
          <img src='~@/assets/image/darkTime.png' width='20' /><a
          @click='chickRouterT()'
        >时间轴</a
        >
        </li>
        <li>
          <img src='~@/assets/image/darkBook.png' width='18' /><a
          @click='chickRouterP()'
        >标签</a
        >
        </li>
      </ul>
    </div>
    <div class='UserInfo'>
      <el-dropdown @command='handleCooand'>
                  <span>
                    <el-avatar
                      src='https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2634/avatar.jpg'
                    />
                    <span class='userName'>awddawsdwad
                      <el-icon class='el-icon--right' style='color: rgb(110, 11, 241)'>
                        <arrow-down />
                      </el-icon>
                    </span>
                  </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command='/User/info'>个人信息</el-dropdown-item>
            <el-dropdown-item command='/User/publishedArticle'
            >发表文章
            </el-dropdown-item>
            <el-dropdown-item divided command='User/changePassword'
            >修改密码
            </el-dropdown-item>
            <el-dropdown-item command='User/outLogin'
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
      router.push({
        path: command
      })
    }

    const chickRouterM = () => {
      router.push({
        path: '/home'
      })
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
  position: relative;
  display: flex;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 5px 6px -5px rgba(133, 133, 133, 0.6);
  .title {
    width: 124px;
    margin-left: 100px;
    flex-shrink: 0;
    float: left;

    .titleImg {
      width: 40px;
      float: left;
      margin-top: 10px;
    }

    .titileName {
      font-size: 1.3em;
      line-height: 60px;
      color: rgb(110, 11, 241);
      font-weight: bold;
    }
  }

  .pageList {
    height: 100%;
    width: 1300px;
    flex-shrink: 0;
    margin: 0 auto;

    ul {
      display: flex;
      justify-content: flex-end;

      li {
        float: left;
        cursor: pointer;
        margin-left: 35px;
        margin-top: 36px;
        transition: 0.2s all linear;
        transform: translate(-50%, -50%);

        img {
          margin-bottom: 5px;
          margin-right: 5px;
          display: inline;
        }

        a {
          text-decoration: none;
          font-weight: 550;
          font-size: 14px;
          color: rgb(110, 11, 241);
        }
      }

      li::before {
        content: '';
        position: absolute;
        top: 0;
        right: 100%;
        width: 0;
        height: 100%;
        border-bottom: 2px solid rgb(110, 11, 241);
        transition: 0.2s all linear;
      }

      li:hover::before {
        width: 100%;
        top: 0;
        right: 0;
        transition-delay: 0.1s;
        border-bottom-color: rgb(110, 11, 241);
        z-index: -1;
      }

      li:hover ~ li::before {
        left: 0;
      }
    }
  }

  .UserInfo {
    width: 200px;
    min-width: 10px;
    flex-shrink: 0;
    margin-right: 20px;
    height: 60px;
    margin-top: 15px;

    .userName {
      margin-left: 10px;
      position: relative;
      left: 10px;
      top: -13px;
      color: rgb(110, 11, 241);
      font-weight: 500;
      font-size: 16px;
    }
  }
}
</style>
