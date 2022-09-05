<template>
  <div class='discovery'>
    <div class='box'>
      <div class='contentList'>
        <ul>
          <template v-for='tag in showPageData'>
            <router-link :to="'/discovery/' + tag.title">
              <li>
                <span style='line-height: 40px'>{{ tag.title }}</span>
              </li>
            </router-link>
          </template>
        </ul>
      </div>
      <div class='contentBox'>
        <router-view />
      </div>
      <div class='myBanner'>
        <el-carousel indicator-position='none'>
          <el-carousel-item v-for='image in bannerImg' :key='image'>
            <el-image :src='image' fit='cover' />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { ShopPagination } from '@/Api/shop/types'


export default defineComponent({
  name: 'discovery',
  components: { },
  setup() {
    const store = useStore()
    const getContentID = () => {
      store.dispatch('Discovery/shopListActions')
    }
    getContentID()

    const showPageData = computed(() => store.getters['Discovery/getIDList']) as unknown as ShopPagination[]

    const bannerImg = [
      '//gw.alicdn.com/bao/uploaded/i3/2930255252/O1CN01Zh4mw21ofSuQ7nYDa_!!0-item_pic.jpg',
      '//gw.alicdn.com/bao/uploaded/i1/713464357/O1CN01pJBIg41i3YQyp0L6e_!!0-item_pic.jpg',
      '//gw.alicdn.com/bao/uploaded/i3/1721421581/O1CN01Vd1Er41NY8slYTkDV_!!0-item_pic.jpg',
      '//gw.alicdn.com/bao/uploaded/i1/4217952040/O1CN01pgzcpR1QwMfdWnE1P_!!0-item_pic.jpg',
      '//gw.alicdn.com/bao/uploaded/i2/3697925558/O1CN01Bb3Biw1qvc6m2FG6r_!!0-item_pic.jpg'
    ]

    const loadState = computed(() => store.getters['Discovery/getLoadState'])
    return { bannerImg, showPageData, loadState }
  }
})
</script>

<style scoped lang='less'>
.router-link-exact-active {
  li {
    background: red !important;
    color: white;
  }
}

.box {
  position: relative;
  width: 1140px;
  margin: 20px auto;

  .contentList {
    background: white;
    width: 105px;
    text-align: center;
    box-shadow: var(--el-box-shadow-light);
    float: left;

    ul {

      .IDLoading {

      }

      li {
        height: 40px;
        cursor: pointer;
      }

      li:hover {
        background: red;
        color: white;
      }
    }
  }


  .contentBox {
    width: 710px;
    margin-left: 130px;
    margin-right: 10px;
  }


  .myBanner {
    width: 275px;
    height: 275px;
    position: absolute;
    top: 0;
    box-shadow: 0 5px 10px #d4d4d4;
    right: 0;
  }


}

</style>
