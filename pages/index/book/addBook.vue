<template>
  <div>
    添加数据
  </div>
</template>

<script>
  export default {
    middleware: ['addBookAuth'],
    name: "addBook",
    meta: {
      theme: 'dark'
    },
    head() {
      return {
        title: '添加书籍',
        meta: [
          {hid: Math.random(), name: '添加书籍', content: '添加书籍 ---- My custom description'}
        ]
      }
    },
    data() {
      return {}
    },
    created(){

    }
  }
</script>
