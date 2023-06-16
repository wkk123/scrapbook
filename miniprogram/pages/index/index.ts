import { formatTime, formatDate } from '../../utils/util'

// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    date: formatDate(formatTime(new Date())),
    accountType: ['','消费','餐饮','旅游','交通','收入','退款'],
    // list: [
    //   {
    //     date:'10月1日',
    //     income:'10.00',
    //     expend:'10.00',
    //     type: 1,
    //     name: '早餐',
    //     money: '10.00'
    //   },
    //   {
    //     date:'10月2日',
    //     income:'10.00',
    //     expend:'10.00',
    //     type: 1,
    //     name: '早餐',
    //     money: '10.00'
    //   },
    //   {
    //     date:'10月2日',
    //     income:'10.00',
    //     expend:'10.00',
    //     type: 1,
    //     name: '早餐',
    //     money: '10.00'
    //   },
    //   {
    //     date:'10月2日',
    //     income:'10.00',
    //     expend:'10.00',
    //     type: 1,
    //     name: '早餐',
    //     money: '10.00'
    //   },
    //   {
    //     date:'10月2日',
    //     income:'10.00',
    //     expend:'10.00',
    //     type: 1,
    //     name: '早餐',
    //     money: '10.00'
    //   },
    //   {
    //     date:'10月2日',
    //     income:'10.00',
    //     expend:'10.00',
    //     type: 1,
    //     name: '早餐',
    //     money: '10.00'
    //   }
    // ],
    list: [],
  },
  onLoad() {
    // @ts-ignore
    const list = wx.getStorageSync('scrapbookList') || [];
    // wx.setStorageSync('scrapbookList', a);
    if(list){
      this.setData({
        list: list,
      })
    }
  },
  goToAdd: ()=>{
    wx.navigateTo({
      url:'/pages/add/index'
    })
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: formatDate(e.detail.value)
    })
  },
})
