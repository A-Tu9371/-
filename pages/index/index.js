//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
//获取应用实例
const app = getApp()
const common = require('../../mods/js/common.js');
Page({
  data: {
    nav: [],
    currentCategory: 1,
    toView: '',
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
    const that = this;
    qcloud.request({
      url: `${config.service.host}/weapp/getCategory`,
      login: false,
      method: 'POST',
      success(result) {
        util.showSuccess('请求成功完成')
        result.data.data.map(function(item){
          item.isCurrent = false;
        })
        result.data.data[0].isCurrent = true;
        that.setData({
          nav: result.data.data,
          toView: result.data.data[0].name
        })
        that.getNewsList();
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  },
  getNewsList: function(){
    util.showBusy('请求中...');
    const that = this;
    qcloud.request({
      url: `${config.service.host}/weapp/getNewsList`,
      login: false,
      method: 'POST',
      data: {
        category: that.data.currentCategory
      },
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
  changeNav: function (e) {
    const that = this;
    common.changeNav(e, that);
  },
  search: function(e){
    const that = this;
    let searchContent = e.detail.value;
    qcloud.request({
      url: `${config.service.host}/weapp/search`,
      login: false,
      method: 'POST',
      data: {
        searchContent: searchContent
      },
      success(result) {
        util.showSuccess('请求成功完成')
        console.log(result)
        that.setData({
          list: result.data.data
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  }
  
})
