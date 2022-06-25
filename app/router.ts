import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.get('/user/info/:id', controller.admin.userInfo)
  router.post('/login', controller.admin.login)

  router.resources('user', '/api/user', controller.user) //用户的管理
  router.resources('data', '/api/data', controller.data) //資料的管理
}
