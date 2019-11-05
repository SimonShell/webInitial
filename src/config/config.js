module.exports = {
  version: '1.0',
  development: {
    host: 'http://test.openapi.chaoke.com:9000', //当前域名
    apiHost: 'http://openapi.chaoke.com:6059', //后端接口域名
    location: 'http://test.openapi.chaoke.com:9000',
    previewImages: 'https://ec.diwork.com',
    headJump: 'http://web.chaoke.com:91', //跳转到友空间
    YYSpaceApiHost: 'http://web.api.chaoke.com:6062', //友空间接口
  },
  test: {
    host: 'http://m.dev.esn.ren:93',
    apiHost: 'http://openapi.chaoke.com:6059',
    location: 'http://m.dev.esn.ren:93/static/templateCenter/index.html',
    previewImages: 'https://ec.diwork.com',
    headJump: 'http://web.chaoke.com:91',
    YYSpaceApiHost: 'http://web.api.chaoke.com:6062',
	},
  daily: {
    host: 'http://172.20.1.177:93',
    apiHost: 'http://172.20.1.177:6059',
    location: 'http://172.20.1.177:93/static/templateCenter/index.html',
    previewImages: 'https://ec.diwork.com',
    headJump: 'http://web.chaoke.com:91',
    YYSpaceApiHost: 'http://web.api.chaoke.com:6062',
  },
  prevProduction: {
    host: 'https://m-pub.esn.ren',
    apiHost: 'https://open.esn.ren',
    location: 'https://m-pub.esn.ren/static/templateCenter/index.html',
    previewImages: 'https://ec.diwork.com',
    headJump: 'https://pub.esn.ren',
    YYSpaceApiHost: 'https://web-api.esn.ren',
  },
  production: {
    host: 'https://mz.diwork.com',
    apiHost: 'https://openapi.diwork.com',
    location: 'https://mz.diwork.com/static/templateCenter/index.html',
    previewImages: 'https://ec.diwork.com',
    headJump: 'https://ec.diwork.com',
    YYSpaceApiHost: 'https://web-api.diwork.com',
  },
}
