export interface queryShopPagination {
  id: number
  title: string
  page: number
}

export interface queryRecommendType {
  id: number
  title: string
}

export interface queryPreferentialType {
  page: number
}

export interface searchType {
  page: number,
  keyword: string,
}