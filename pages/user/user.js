// pages/user/user.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    that.setData({
      userInfo: app.globalData.userInfo
    })
  },
  myFav: function(){
    wx.navigateTo({
      url: '/pages/myfav/myfav',
    })
  }
})