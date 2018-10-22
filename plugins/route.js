export default ({ app }) => {
  app.router.afterEach((to, from) => {
    console.log('afterEach from: ',from,'to  :',to.path)
  })
}
