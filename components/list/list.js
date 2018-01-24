// components/list.js
const common = require('../../mods/js/common.js')
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    isFav: {
      type: null,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showDetail: function (e) {
      let id = e.currentTarget.dataset.id;
      common.showDetail(id)
    },
    cancelFav: function(e){
      let id = e.currentTarget.dataset.id;
      util.showBusy('正在删除...');
      const that = this;
      qcloud.request({
        url: `${config.service.host}/weapp/delMyFav`,
        method: 'POST',
        login: false,
        data: {
          id: id
        },
        success(result) {
          util.showSuccess('删除成功')
          var page = getCurrentPages();
          page[page.length - 1].refresh();
        },
        fail(error) {
          util.showModel('请求失败', error);
          console.log('request fail', error);
        }
      })
    }
  }
})
