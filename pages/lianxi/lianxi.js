Page({

    /**
     * 页面的初始数据
     */
    data: {
      iconSize: [20, 30, 40, 50, 60, 70],
      iconType: [
        'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
      ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },
  onLoad: function (res) {
    var that = this
    wx.request({
      url: 'http://www.sojson.com/open/api/weather/json.shtml?city=杭州',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data.forecast)
       
        that.setData({
          Industry: res.data.data.forecast,
     res:res.data
        })
      },
      fail: function () {
        console.log("fail")
      },
      complete: function () {
        that.setData({
          isshow: false
        })
      }
    })
  },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

    onbindtap: function() {

      var that = this
      wx.request({
        url: 'http://www.sojson.com/open/api/weather/json.shtml?city=杭州',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data.data.forecast)
          that.setData({
            Industry: res.data.data.forecast
          })
        },
        fail: function () {
          console.log("fail")
        },
        complete: function () {
          that.setData({
            isshow: false
          })
        }
      })
     
    }
  },

)