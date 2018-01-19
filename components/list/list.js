// components/list.js
const common = require('../../mods/js/common.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
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
    }
  }
})
