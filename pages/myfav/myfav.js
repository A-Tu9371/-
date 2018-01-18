// pages/myfav/myfav.js
const common = require('../../mods/js/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
      text: '内容内容内容内容',
      isTop: true,
      countView: 111,
      image: "../../images/pic_1.png"
    }, {
      title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
      text: '内容内容内容内容',
      isTop: true,
      countView: 111,
      image: "../../images/pic_1.png"
    }, {
      title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
      text: '内容内容内容内容',
      isTop: true,
      countView: 111,
      image: "../../images/pic_1.png"
    }, {
      title: '新闻标题新闻标题新闻标题新闻标题新闻标题',
      text: '内容内容内容内容',
      isTop: true,
      countView: 111,
      image: "../../images/pic_1.png"
    }, {
      title: '新闻标题新闻标题新闻标题新闻标题新闻标题',
      text: '内容内容内容内容',
      isTop: true,
      countView: 111,
      image: "../../images/pic_1.png"
    }, {
      title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
      text: '内容内容内容内容',
      isTop: true,
      countView: 111,
      image: "../../images/pic_1.png"
    }]
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