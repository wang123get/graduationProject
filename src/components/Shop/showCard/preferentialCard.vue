<template>
  <div class="Box" @click="toSell(couponClickUrl)">
    <div class="imageBox">
      <img :src="imageURL" style="object-fit: cover"/>
      <div class="savePrice">省{{ couponAmount }}元</div>
    </div>
    <div class="textBox">
      <div class="price">
        <span class="em">￥{{ zkFinalPrice }}</span>
        <span></span>
        劵后价：<span>{{
          (Number(zkFinalPrice) - couponAmount).toFixed(2)
        }}</span>
      </div>
      <div class="sellNumber">
        <span>{{ buyNumber }}</span> ·人已购买
      </div>
      <div class="goodsTitle">
        {{ goodsTitle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    imageURL: {
      type: String,
      required: true
    },
    buyNumber: {
      type: Number,
      required: true
    },
    goodsTitle: {
      type: String,
      required: true
    },
    couponClickUrl: {
      type: String,
      required: true
    },
    zkFinalPrice: {
      type: String,
      required: true
    },
    couponAmount: {
      required: true
    }
  },
  setup() {
    const toSell = (couponClickUrl: string) => {
      window.open('https://' + couponClickUrl, '_blank')
    }
    return {toSell}
  }
})
</script>

<style scoped lang="less">
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

  .price {
    color: #f40;
    margin-bottom: 10px;
    font-size: 18px;

    .em {
      text-decoration: line-through;
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
</style>
