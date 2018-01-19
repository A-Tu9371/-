//app.js
App({
  onLaunch: function () {
    var that = this;
    wx.getUserInfo({
      success: function(res){
        that.globalData.userInfo = res.userInfo;
        that.globalData.logged = true
      }
    })
  },
  globalData: {
    userInfo: null,
    logged: false
  }
})