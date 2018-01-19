//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
//获取应用实例
const app = getApp()
const common = require('../../mods/js/common.js');
Page({
  data: {
    nav: [{
      categoryName: '体育',
      id: 'sports',
      isCurrent: true
    }, {
      categoryName: '娱乐',
      id: 'sports',
      isCurrent: false
    }, {
      categoryName: '时尚',
      id: 'sports',
      isCurrent: false
    }, {
      categoryName: '体育',
      id: 'sports',
      isCurrent: false
    }, {
      categoryName: '娱乐',
      id: 'sports',
      isCurrent: false
    }, {
      categoryName: '时尚',
      id: 'sports',
      isCurrent: false
    }, {
      categoryName: '体育',
      id: 'sports',
      isCurrent: false
    }, {
      categoryName: '体育',
      id: 'sports',
      isCurrent: false
    }],
    toView: 'item0',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    list: []
  },
  onReady: function(){
    util.showBusy('请求中...');
    const that = this;
    qcloud.request({
      url: `${config.service.host}/weapp/demo`,
      login: false,
      success(result) {
        util.showSuccess('请求成功完成')
        that.setData({
          list: result.data.data
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  },
  onLoad: function () {

  },
  changeNav: function (e) {
    const that = this;
    common.changeNav(e, that);
  }
  
})
