<template>
  <div class='couponsCard'>
    <ul>
      <template v-for='content in shopList'>
        <li>
          <div class='Box'>
            <div class='image'>
              <img :src='content.pict_url' />
            </div>
            <div class='recommend-item-title'>
              <a :href='content.coupon_click_url' target='_blank'>{{ content.title }}</a>
            </div>
            <div class='recommend-item-info'>
              <a
                :href='content.coupon_click_url'
                target='_blank'
                class='buy-btn'
                v-if="content.coupon_info !== ''"
              >领券购买</a
              >
              <span class='recommend-prise' v-if="content.coupon_info === ''"
              >晚了，无优惠卷</span
              >
              <span class='recommend-prise' v-if="content.coupon_info !== ''"
              >原价：{{ content.zk_final_price }}</span
              >
            </div>
            <span class='recommend-coupon-info' v-if="content.coupon_info !== ''">{{
                content.coupon_info
              }}</span>
          </div>

        </li>
      </template>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    shopList: {
      required: true
    }
  },
  setup(props) {
    return {}
  }
})
</script>

<style scoped lang='less'>
.couponsCard {
  ul {
    li {
      float: left;
      width: 265px;
      position: relative;
      box-shadow: 0 5px 10px #d4d4d4;
      background: #fff;
      padding: 10px;
      margin: 10px;
      height: 370px;
    }
  }
  .Box {
    position: relative;
    width: 265px;
    height: 370px;

    .image {
      img {
        width: 243px;
        height: 243px;
      }
    }

    .recommend-item-title a {
      margin-top: 10px;
      text-decoration: none;
      width: 245px;
      color: #47494e;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }

    .recommend-coupon-info {
      position: absolute;
      right: 12px;
      top: 20px;
      padding: 5px 10px;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      background: #c9302c;
      color: #fff;
    }

    .recommend-item-info {
      margin-top: 10px;
    }

    .recommend-item-cover {
      position: relative;
    }

    .buy-btn {
      text-decoration: none;
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      background-color: rgb(255, 255, 255);
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: 0;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      color: #fff;
      background-color: #f56c6c;
      border: 1px solid #f56c6c;
    }

    .recommend-prise {
      margin-left: 10px;
      font-weight: 600;
      color: #ebb563;
    }
  }
}
</style>
