
Component({
  data: {},
  methods: {
    onLogin() {
      console.log('点击登录')
    },
    onBannerClick() {
      console.log('点击流浪补给站')
    },
    onFeatureClick(e: any) {
      const feature = e.currentTarget.dataset.feature
      console.log('点击功能:', feature)
    },
    onBottomCardClick(e: any) {
      const type = e.currentTarget.dataset.type
      console.log('点击底部卡片:', type)
    }
  },
})
