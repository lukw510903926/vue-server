export default function (context) {

  console.log('全局的中间件');
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent;
  let isServer = process.server;
  let currentPath = context.route.path;
  if (currentPath === '/') {
    if (isServer) {
      context.redirect('/home/addBook')
    } else {
      context.route.push('/home/addBook')
    }
  }
}
