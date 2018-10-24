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
    data() {
      return {}
    },
    created(){

    }
  }
</script>
