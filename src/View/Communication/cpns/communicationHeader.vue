<template>
  <div class='myHeader'>
    <div class='title'>
      <span class='titileName'>休闲客栈</span>
    </div>
    <div class='pageList'>
      <ul>
        <li>
          <a @click='chickRouterM()'>首页</a>
        </li>
        <li>
          <a @click='chickRouterC()'>摸鱼</a>
        </li>
        <li>
          <el-dropdown style='margin-top: 4px' @command='handleCooand'>
            <span>
              <a>分类</a>
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
          <a @click='chickRouterT()'>时间轴</a>
        </li>
        <li>
          <a @click='chickRouterP()'>标签</a>
        </li>
      </ul>
    </div>
    <div class='UserInfo'>
      <el-dropdown @command='handleCooand'>
        <span>
          <el-avatar
            src='https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2634/avatar.jpg'
          />
          <span class='userName'
          >awddawsdwad
            <el-icon class='el-icon--right' style='color: #656c76'>
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

<script lang='ts'>
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

    const chickRouterC = () => {
      router.push('/communication')
    }

    const chickRouterP = () => {
    }

    const chickRouterT = () => {
      router.push({
        path: 'home/login'
      })
    }
    return {
      chickRouterM,
      chickRouterT,
      chickRouterP,
      handleCooand,
      chickRouterC
    }
  }
})
</script>

<style scoped lang='less'>
.myHeader {
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  background-color: white;
  box-shadow: 0 5px 6px -5px rgba(133, 133, 133, 0.6);
  font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial !important;

  .title {
    width: 124px;
    margin-left: 100px;
    flex-shrink: 0;
    float: left;

    .titileName {
      font-size: 1.3em;
      line-height: 60px;
      color: #3377ff;
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

        a {
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          color: #656c76;
        }
      }

      li::before {
        content: '';
        position: absolute;
        top: 0;
        right: 100%;
        width: 0;
        height: 100%;
        border-bottom: 2px solid #2c99ff;
        transition: 0.2s all linear;
      }

      li:hover::before {
        width: 100%;
        top: 0;
        right: 0;
        transition-delay: 0.1s;
        border-bottom-color: #2c99ff;
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
      color: #656c76;
      font-weight: 500;
      font-size: 16px;
    }
  }
}
</style>
