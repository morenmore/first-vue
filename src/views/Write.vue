<template>
  <div ref="editor">
    <p>Hello World!</p>
    <p>Some initial <strong>bold</strong> text</p>
    <p><br /></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editor: null
    }
  },
  mounted () {}
}
</script>

<style>
@import "https://cdn.quilljs.com/1.3.6/quill.snow.css";
</style>
