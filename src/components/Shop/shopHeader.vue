<template>
  <div class="myHeader">
    <span class="blogFont">休闲客栈-卷场</span>
    <div class="searchFont">
      <ul>
        <li>
          <router-link to="/discovery">发现</router-link>
        </li>
        <li>
          <router-link to="/coupons">卷场</router-link>
        </li>
        <li>
          <router-link to="/specials">特惠</router-link>
        </li>
      </ul>
    </div>
    <div class="search">
      <input placeholder="搜索" v-model="myInput"/>
      <img
          style="cursor: pointer"
          src="~@/assets/image/red_search.png"
          width="20"
          class="myImg"
          @click="searchBtn(myInput)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {useRouter} from 'vue-router'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const myInput = ref(props.title)
    const router = useRouter()
    const searchBtn = (text: any) => {
      router.push('/mall/store/search/' + text)
    }
    return {myInput, searchBtn}
  }
})
</script>

<style scoped lang="less">
.router-link-active {
  color: red !important;
}

.myHeader {
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 5px 6px -5px rgba(133, 133, 133, 0.6);

  .blogFont {
    font-size: 1.3em;
    color: #c9302c;
    font-weight: bold;
    line-height: 60px;
    margin-left: 60px;
  }

  .searchFont {
    float: right;
    height: 60px;
    width: 420px;
    margin-right: 80px;

    ul {
      margin-left: 20px;
      margin-top: 18px;
      transform: translate(-50%, -50%);

      li {
        a {
          text-decoration: none;
          font-weight: 600;
          font-size: 20px;
          color: black;
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
        border-bottom: 2px solid #ff0600;
        transition: 0.2s all linear;
      }

      li:hover::before {
        width: 100%;
        top: 0;
        right: 0;
        transition-delay: 0.1s;
        border-bottom-color: #ff0400;
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
      font-size: 16px;
      color: rgba(0, 0, 0, 0.664);
      height: 30px;
      line-height: 30px;
      outline: 1.5px solid #c9302c;
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
  }
}
</style>
