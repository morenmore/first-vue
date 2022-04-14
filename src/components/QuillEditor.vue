<template>
  <div>
    <div ref="editor"></div>
  </div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.editor = new Quill(this.$refs.editor, {
      modules: {
        toolbar:
          // this.$refs.toolbar
          [
            [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            //       [{ align: [] }],
            //       [{ list: "ordered" }, { list: "bullet" }],
            //       [{ color: [] }, { background: [] }],
            //       [{ font: [] }],
            ['link', 'image', 'video'],
            ['clean']
          ]
      },
      theme: 'snow',
      formats: [
        'header',
        'size',
        'bold',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'code-block'
      ]
    })
  },
  destroyed () {
    this.editor.history.clear()
  }
}
</script>

<style></style>
