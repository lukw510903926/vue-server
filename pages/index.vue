<template>
  <el-container>
    <el-header>
      <el-row type="flex">
        <el-col :span=20> vue-nuxt 服务端渲染</el-col>
        <el-col :span=4 class="login-user">
          {{loginUser}}
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="220px" v-bind:style="asideStyle">
        <LeftMenu/>
      </el-aside>
      <el-main>
        <transition name="move" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import LeftMenu from './LeftMenu.vue'

  export default {
    components: {
      LeftMenu
    },
    /**
     * 运行在服务端 页面初始化之前执行 可以用来获取服务端数据
     * @param context
     * @returns {{loginUser: string}}
     */
    asyncData(context) {
      return {loginUser: '超级管理员'}
    },
    data() {
      return {
        asideStyle: {
          minHeight: 100 + 'vh'
        }
      };
    },
    mounted() {
      this.$http.getRequest("/user/list").then(response =>console.log('data:',response));
    },
    created() {
    }
  };
</script>
<style scoped>
  .login-user {
    text-align: right;
    margin-right: 20px;
  }
</style>
