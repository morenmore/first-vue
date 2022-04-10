// import Vue from "vue";
import Quill from 'quill'

// Vue.use(Quill)

const Font = Quill.import('formats/font')
// We do not add Aref Ruqaa since it is the default
Font.whitelist = ['mirza', 'roboto']
Quill.register(Font, true)

const editor = new Quill(this.$refs.editor, {
  modules: {
    toolbar: [
      //   [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      ['image', 'video']
    ]
  },
  // theme: 'bubble',
  theme: 'snow',
  formats: [
    // 'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'image',
    'video'
  ],
  placeholder: 'Type something in here!'
})

export default editor
