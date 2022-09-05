export interface ShopPagination {
  id: number
  title: string
}

export interface Goods {
  category_id: number
  category_name: null
  click_url: string
  commission_rate: string
  coupon_amount: number
  coupon_click_url: string
  coupon_end_time: null
  coupon_info: null
  coupon_remain_count: number
  coupon_share_url: string
  coupon_start_fee: string
  coupon_start_time: null
  coupon_total_count: number
  item_description: string
  item_id: number
  level_one_category_id: number
  level_one_category_name: null
  nick: null
  pict_url: string
  seller_id: number
  shop_title: null
  small_images: null
  title: string
  user_type: number
  volume: number
  zk_final_price: string
}

export interface recommendType {
  type: number
  favorites_id: number
  favorites_title: string
}

export interface recommendContentList {
  category_id: number
  click_url: string
  commission_rate: string
  coupon_amount: number
  coupon_click_url: string
  coupon_end_time: string
  coupon_info: string
  coupon_remain_count: number
  coupon_share_url: string
  coupon_start_fee: string
  coupon_start_time: string
  coupon_total_count: number
  item_id: number
  level_one_category_id: number
  nick: string
  pict_url: string
  reserve_price: string
  seller_id: number
  shop_title: string
  small_images: {}
  title: string
  user_type: number
  volume: number
  white_image: string
  zk_final_price: string
}

export interface preferentialType {
  category_id: number
  category_name: null
  click_url: string
  commission_rate: string
  coupon_amount: number
  coupon_click_url: string
  coupon_end_time: string
  coupon_info: null
  coupon_remain_count: number
  coupon_share_url: string
  coupon_start_fee: string
  coupon_start_time: string
  coupon_total_count: number
  item_description: string
  item_id: number
  level_one_category_id: number
  level_one_category_name: string
  nick: string
  pict_url: string
  seller_id: number
  shop_title: null
  small_images: {}
  title: string
  user_type: number
  volume: number
  zk_final_price: string
}

export interface searchType {
  category_id: number
  category_name: string
  commission_rate: string
  commission_type: string
  coupon_amount: string
  coupon_end_time: string
  coupon_id: string
  coupon_info: string
  coupon_remain_count: number
  coupon_share_url: string
  coupon_start_fee: string
  coupon_start_time: string
  coupon_total_count: number
  include_dxjh: string
  include_mkt: string
  info_dxjh: string
  item_description: string
  item_id: number
  item_url: string
  level_one_category_id: number
  level_one_category_name: string
  nick: string
  num_iid: number
  pict_url: string
  presale_deposit: string
  presale_end_time: number
  presale_start_time: number
  presale_tail_end_time: number
  presale_tail_start_time: number
  provcity: string
  real_post_fee: string
  reserve_price: string
  seller_id: number
  shop_dsr: number
  shop_title: string
  short_title: string
  small_images: {}
  title: string
  tk_total_commi: string
  tk_total_sales: string
  url: string,
  user_type: number,
  volume: number,
  white_image: string,
  x_id: string,
  zk_final_price: string,
  jdd_num: number,
  jdd_price: null,
  oetime: null,
  ostime: null
}
