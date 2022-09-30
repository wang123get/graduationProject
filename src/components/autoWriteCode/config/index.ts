export function write(textList: string[]) {
  const textEl = document.querySelector('#text')
  const texts = textList

  let index = 0
  let charIndex = 0
  let delta = 200

  let start: any = null
  let isDeleting = false

  function type(time: any) {
    window.requestAnimationFrame(type)
    if (!start) {
      start = time
    }
    let progress = time - start
    if (progress > delta) {
      let text = texts[index]
      if (!isDeleting) {
        // @ts-ignore
        textEl.innerHTML = text.slice(0, ++charIndex)
        delta = 200 - Math.random() * 100
      } else {
        // @ts-ignore
        textEl.innerHTML = text.slice(0, charIndex--)
      }
      start = time

      if (charIndex === text.length) {
        isDeleting = true
        delta = 100
        start = time + 1200
      }

      if (charIndex < 0) {
        isDeleting = false
        start = time + 200
        index = ++index % texts.length
      }
    }
  }

  window.requestAnimationFrame(type)
}
