function changeNav(e,that) {
  const name = e.currentTarget.dataset.name;
  const index = e.currentTarget.dataset.index;
  let nav = that.data.nav;
  nav.map(function(navItem){
    navItem.isCurrent = false;
  });
  nav[index].isCurrent = true;
  that.setData({
    toView: name,
    nav: nav,
    currentCategory: nav[index].id
  })
  that.getNewsList();
}

function showDetail(id) {
  wx.navigateTo({
    url: '/pages/detail/detail?id=' + id
  })
}
module.exports.changeNav = changeNav;
exports.showDetail = showDetail;