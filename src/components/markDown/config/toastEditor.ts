import upLoadImage from '@/api/Image/upLoadImage'

export default class {
  editor: toastui.Editor

  constructor(el: string, initialValue: string, height: string) {
    this.editor = new toastui.Editor({
      el: document.querySelector(el),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: height,
      initialValue: initialValue,
      toolbarItems: this.myToolbar()
    })
    this.ImageHook()
  }

  private myToolbar() {
    return [
      ['heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      // Using Option: Customize the last button
      [
        {
          el: this.fullscreen(),
          command: 'bold',
          tooltip: 'Custom Bold'
        }
      ]
    ]
  }

  private fullscreen() {
    const button = document.createElement('button') as HTMLButtonElement
    button.innerHTML = '全屏'
    button.style.margin = '0'
    button.style.fontFamily = 'Microsoft YaHei'
    button.addEventListener('click', () => {
      const ui = document.querySelector(
        '.toastui-editor-defaultUI'
      ) as HTMLDivElement
      ui.classList.toggle('fullscreen')
    })
    document.documentElement.addEventListener(
      'keyup',
      (event: KeyboardEvent) => {
        if (event.key == 'Escape') {
          const ui = document.querySelector(
            '.toastui-editor-defaultUI'
          ) as HTMLDivElement
          ui.classList.remove('fullscreen')
        }
      }
    )
    return button
  }

  private ImageHook() {
    this.editor.removeHook('addImageBlobHook')

    this.editor.addHook(
      'addImageBlobHook',
      async (blob: any, callback: Function) => {
        const form = new FormData()

        form.append('file', blob, blob.name)
        const response = await upLoadImage.upLoad(form)
        console.log(response.data.url, blob.name)
        //TODO:图片提交
        /*
        例子：
        const response = await uploadImage(form)
        uploadImage 请求接口
        */
        callback(
          'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2634/love-two.jpeg',
          blob.name
        )
      }
    )
  }
}
