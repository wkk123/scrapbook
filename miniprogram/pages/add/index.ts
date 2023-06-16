import { formatTime, formatDate } from '../../utils/util'

// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    date: formatDate(formatTime(new Date())),
    accountType: ['消费','餐饮','旅游','交通','收入','退款'],
    selectorType: [
      {
        id: '1',
        name: '消费',
      },
      {
        id: '2',
        name: '消2',
      },
      {
        id: '3',
        name: '消3',
      },
      {
        id: '4',
        name: '消4',
      },
      {
        id: '5',
        name: '消5',
      },
    ],
    typeIndex: 0,
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
  //  选择分类
  bindTypeChange:(e)=>{
    // console.log('e', e.detail.value);
    // this.setData({
    //   typeIndex: e.detail.value
    // })
  },
  // 选择日期
  bindDateChange: (e)=> {
    this.setData({
      date: formatDate(e.detail.value)
    })
  },
})
