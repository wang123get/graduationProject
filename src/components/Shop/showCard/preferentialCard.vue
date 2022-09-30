<template>
  <ul>
    <template v-for="content in goodList">
      <li>
        <div class="contentBox">
          <div class="Box" @click="toSell(content.coupon_click_url)">
            <div class="imageBox">
              <img :src="content.pict_url" style="object-fit: cover" />
              <div class="savePrice">省{{ content.coupon_amount }}元</div>
            </div>
            <div class="textBox">
              <div class="price">
                <span class="em">￥{{ content.zk_final_price }}</span>
                <span></span>
                劵后价：<span>{{
                  (
                    Number(content.zk_final_price) - content.coupon_amount
                  ).toFixed(2)
                }}</span>
              </div>
              <div class="sellNumber">
                <span>{{ content.volume }}</span> ·人已购买
              </div>
              <div class="goodsTitle">
                {{ content.title }}
              </div>
            </div>
          </div>
        </div>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import { preferentialType } from '@/Api/shop/types'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    goodList: {
      required: true
    }
  },
  setup(props) {
    const toSell = (couponClickUrl: string) => {
      window.open('https:' + couponClickUrl, '_blank')
    }
    return { toSell }
  }
})
</script>

<style scoped lang="less">
.contentBox {
  background-color: white;
  margin-bottom: 20px;
  float: left;
  margin: 5px;
  padding: 5px;
  width: 275px;
  height: 400px;
  margin-top: 20px;
  border: 1px solid #dfdfdf;

  .Box {
    width: 275px;
    height: 390px;
    cursor: pointer;

    .imageBox {
      position: relative;
      margin-bottom: 10px;

      img {
        width: 263px;
        height: 263px;
        display: inline-block;
        overflow: hidden;
      }

      .savePrice {
        background: #c9302c;
        color: #fff;
        font-size: 14px;
        text-align: center;
        padding: 4px 18px;
        position: absolute;
        font-weight: 600;
        top: 5px;
        right: 0;
      }
    }

    .sellNumber {
      font-size: 14px;
      color: #7f828b;
      margin-bottom: 5px;
    }

    .textBox {
      width: 263px;
      margin: 0 auto;

      .price {
        color: #f40;
        margin-bottom: 10px;
        font-size: 18px;

        .em {
          text-decoration: line-through;
        }
      }
    }

    .goodsTitle {
      font-weight: 600;
      min-height: 43px;
      font-size: 16px;
      color: #000;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
}

.contentBox:hover {
  border: 1px solid #c9302c;
}
</style>
