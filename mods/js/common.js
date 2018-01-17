function changeNav(e,that) {
  const item = e.currentTarget.dataset.toview;
  const index = e.currentTarget.dataset.index;
  that.setData({
    toView: item,
    currentIndex: index
  })
}
module.exports.changeNav = changeNav;