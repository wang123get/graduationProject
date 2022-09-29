function loadMore(toDo: Function) {
  window.addEventListener('scroll', () => {
    //滚动视口高度（也就是当前元素的真实高度
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    //可见区域高度
    let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    //滚动条顶部到浏览器顶部高度
    let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop

    if (clientHeight + scrollTop == scrollHeight) {
      toDo()
    }
  })
}

export { loadMore }