const list = (resolve) => {
  return [{
      path: '/home',
      name: 'home',
      meta:{title:'首页'},
      redirect: "/home/addBook",
      component: resolve(__dirname, '../pages/index.vue'),
      children: [{
        path: 'bookList',
        name: 'bookList',
        meta:{title:'书籍列表'},
        component: resolve(__dirname, '../pages/index/book/BookList'),
      }, {
        path: 'addBook',
        name: 'addBook',
        meta:{title:'添加书籍'},
        component: resolve(__dirname, '../pages/index/book/addBook'),
      }]
    }
  ]
};
export default list;
