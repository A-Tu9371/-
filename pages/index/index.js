//index.js
//获取应用实例
const app = getApp()
const common = require('../../mods/js/common.js');
Page({
  data: {
    nav: [{
      categoryName: '体育',
      id: 'sports'
    }, {
      categoryName: '娱乐',
      id: 'sports'
    }, {
        categoryName: '时尚',
        id: 'sports'
    }, {
      categoryName: '体育',
      id: 'sports'
    }, {
      categoryName: '娱乐',
      id: 'sports'
    }, {
      categoryName: '时尚',
      id: 'sports'
    }, {
      categoryName: '体育',
      id: 'sports'
    }, {
      categoryName: '体育',
      id: 'sports'
    }],
    toView: 'item1',
    currentIndex: 0
  },
  onLoad: function () {

  },
  changeNav: function(e){
    const that = this;
    common.changeNav(e,that);
  }
})
