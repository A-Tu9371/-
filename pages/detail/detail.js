// pages/detail/detail.js
// const common = require('../../mods/js/common.js');
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    userInfo: {},
    logged: false
  },
  onReady: function(){
    if (app.globalData.logged){
      this.setData({
        userInfo: app.globalData.userInfo,
        logged: app.globalData.logged
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    const that = this;
    qcloud.request({
      url: `${config.service.host}/weapp/demo`,
      login: false,
      data: {
        id: id
      },
      success(result) {
        that.setData({
          detail: result.data.data
        })
      },
      fail(error) {
        console.log('request fail', error);
      }
    })
  }
})