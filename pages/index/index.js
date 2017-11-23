import testDrive from '../../modules/test-drive';
console.log(testDrive);
const app = getApp()

Page({
  data: {
    slides:null
  },
  onLoad () {
    // 全局数据 globalData
    this.setData({
      slides:
        app.globalData.slides
    })
  },
  testDrive() {
    // console.log('试驾');
    testDrive()
  },
  // testDrive:testDrive,
  // testDrive,
  readMore(event){
    let id = event.target.dataset.id;
    // console.log(`/pages/vehicles/show?id=${id}`);
    wx.navigateTo({
      url:`/pages/vehicles/show?id=${id}`
    })
  }
})
