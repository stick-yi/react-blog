let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
  getAtrticleList: ipUrl + 'getAtrticleList', // 首页接口
  getArticleById: ipUrl + 'getArticleById/', // 详细页接口
  getTypeInfo: ipUrl + 'getTypeInfo', // 获取文章类别
  getListById: ipUrl + 'getListById/', // 根据类别id获得文章列表
}

export default servicePath