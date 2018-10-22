<template>
  <div>
    书籍列表
  </div>
</template>

<script>
  export default {
    name: "BookList",
    data() {
      return {}
    },
    head() {
      return {
        title: '书籍列表',
        meta: [
          {hid: Math.random(), name: '书籍列表', content: '书籍列表 ---- My custom description'},
          {hid: Math.random(), name: '书籍列表2', content: '书籍列表  My custom description222'}
        ]
      }
    }

  }
</script>

<style scoped>

</style>
