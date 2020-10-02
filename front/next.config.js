const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true,
  target: 'serverless',
  poweredByHeader: false,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/categorias.html': { page:'/categorias'},
      '/blog.html': { page:'/blog'},
      '/comparador.html':{page:'/comparador'}
    }
  }
})
