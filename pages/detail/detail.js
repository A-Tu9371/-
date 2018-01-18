// pages/detail/detail.js
const common = require('../../mods/js/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  showDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    common.showDetail(id)
  }
})