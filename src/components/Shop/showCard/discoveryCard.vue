<template>
  <div>
    <ul>
      <template v-for='content in shopContentList'>
        <li>
          <div class='goodCard'>
            <div class='imageType'>
              <el-image :src='content.pict_url' fit='cover' />
            </div>
            <div class='titleBox'>
              <a :href='content.click_url' target='_blank' class='aType'>
                <span class='titleType'>{{ content.title }}</span>
              </a>
            </div>
            <div style='margin-top: 10px; margin-bottom: 10px'>
              <span class='zk_final_price'
              >原价{{ content.zk_final_price }}</span
              >
              <span class='coupon_amount'
              >卷后价：<span style='color: #ff4500'>{{
                  //@ts-ignore
                  (content.zk_final_price - content.coupon_amount).toFixed(2)
                }}</span></span
              >
            </div>
            <div
              style='
                color: #47494e;
                margin-top: 10px;
                margin-bottom: 10px;
                font-size: 16px;
              '
            >
              <span>
                {{ content.volume }}
              </span>
              <span> · </span>
              <span> 人已买 </span>
            </div>
            <a :href='content.click_url' target='_blank' class='shopButton'>领卷购买</a>
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
    shopContentList: {
      required: true
    }
  }
})

</script>

<style scoped>
.goodCard {
  width: 100%;
  height: 204px;
  background: white;
  box-shadow: 0 5px 10px #d4d4d4;
  margin-bottom: 10px;
  position: relative;
}

.aType {
  font-size: 22px;
  color: #47494e;
  text-decoration: none;
}

.titleType {
  cursor: pointer;
  font-weight: 600;
}

.imageType {
  width: 180px;
  height: 180px;
  margin: 10px;
  float: left;
}

.titleBox {
  padding-top: 10px;
  cursor: pointer;
  max-width: 690px;
  font-weight: 600;
}

.zk_final_price {
  color: #999;
  text-decoration: line-through;
  font-weight: 600;
  font-size: 16px;
}

.coupon_amount {
  margin-left: 10px;
  color: #ff4500;
  font-weight: 600;
  font-size: 16px;
}

.shopButton {
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 5px;
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
  position: absolute;
  bottom: 20px;
  right: 10px;
}

.shopButton:hover {
  background-color: #ff4500;
  border-color: #ff4500;
}

</style>