function changeNav(e,that) {
  const item = 'item' + e.currentTarget.dataset.index;
  const index = e.currentTarget.dataset.index;
  let nav = that.data.nav;
  nav.map(function(navItem){
    navItem.isCurrent = false;
  });
  nav[index].isCurrent = true;
  that.setData({
    toView: item,
    nav: nav
  })
}

function showDetail(id) {
  wx.navigateTo({
    url: '/pages/detail/detail?id=' + id
  })
}
module.exports.changeNav = changeNav;
exports.showDetail = showDetail;