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
      url: `${config.service.host}/weapp/getNewsDetail`,
      login: false,
      method: 'POST',
      data: {
        id: id
      },
      success(result) {
        result.data.data.createtime = util.formatTime(new Date(result.data.data.createtime));
        result.data.data.updatatime = util.formatTime(new Date(result.data.data.updatatime));

        that.setData({
          detail: result.data.data
        })
      },
      fail(error) {
        console.log('request fail', error);
      }
    })
  },
  addFav: function(e){
    let item = e.currentTarget.dataset.item;
    item.id = null;
    qcloud.request({
      url: `${config.service.host}/weapp/addMyFav`,
      login: false,
      method: 'POST',
      data: {
        item: item
      },
      success(result) {
        util.showSuccess('已收藏')
      },
      fail(error) {
        console.log('request fail', error);
      }
    })
  }
})