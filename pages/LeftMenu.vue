<template>
  <el-menu :default-active="$route.path" @open="handleOpen" @close="handleClose" background-color="#001529"
           text-color="#fff" active-text-color="#ffd04b" :router=true>
    <el-menu-item index="/book/BookList" route="/book/BookList">书籍列表</el-menu-item>
    <el-menu-item index="/book/addBook" route="/book/addBook">添加书籍</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'leftMenu',
    data() {
      return {}
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
