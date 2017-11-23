const app = getApp();
Page({
  data:{
     entity:null
  },
  onLoad(options) {
      const id = options.id;
      const entity = app.globalData.vehicles.filter(vehicle => {
        return id == vehicle.id;
      })
      this.setData({
         entity:entity[0]
      });
      // wx.setNavigationBarTitle({
      //   title:this.data.entity.header
      // })
      // console.log(entity);
      // console.log(id);
      // getApp
      // global
      // entities
  }
})