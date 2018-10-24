<template>
  <el-menu :default-active="$route.path" background-color="#001529" text-color="#fff" active-text-color="#ffd04b"
           :router=true>
    <el-submenu index="autoRoute">
      <template slot="title">
        <span>自动路由</span>
      </template>
      <el-menu-item index="/book/BookList" route="/book/BookList">书籍列表</el-menu-item>
      <el-menu-item index="/book/addBook" route="/book/addBook">添加书籍</el-menu-item>
    </el-submenu>
    <el-submenu index="userRoute">
      <template slot="title">
        <span>自定义路由</span>
      </template>
      <el-menu-item index="/home/bookList" route="/home/bookList">书籍列表</el-menu-item>
      <el-menu-item index="/home/addBook" route="/home/addBook">添加书籍</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: 'leftMenu',
    data() {
      return {}
    },
    methods: {}
  }
</script>
