import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app
  router.get("/", controller.home.index)

  router.get('/user/info/:id', controller.admin.userInfo)
  router.post('/login', controller.admin.login)

  router.resources('user', '/user', controller.user) //用户的管理
  router.resources('data', '/data', controller.data) //資料的管理

  // 獲取所有資料
  router.get('/data/user', controller.getData.getUser)
  router.get('/data/user/:id', controller.getData.getUser)
  router.get('/data/blog/:id', controller.getData.getBlog)

  router.post('/upload/:id', controller.upload.index) //添加内容的图片
}
