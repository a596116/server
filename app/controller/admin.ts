import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async login() {
    try {
      const user = this.ctx.request.body.user
      const token = await this.ctx.service.user.login(user.account, user.password)
      if (token) {
        this.ctx.body = { //傳回token
          code: 20000,
          data: token
        }
      } else {
        this.ctx.body = {
          code: 40000,
          message: '登入失敗'
        }
      }
    } catch (error) {
      this.ctx.body = {
        code: 40000,
        message: '登入失敗'
      }
    }
  }

  // /user/info/:id 用token獲取用戶資訊,保持登入狀態
  public async userInfo() {
    try {
      const user_token = this.ctx.params.id
      const user = await this.ctx.service.user.userInfo(user_token)
      if (user) {
        this.ctx.body = {
          code: 20000,
          data: user
        }
      } else {
        this.ctx.body = {
          code: 40000,
          message: '獲取用戶失敗'
        }
      }
    } catch (error) {
      this.ctx.body = {
        code: 40000,
        message: '獲取用戶失敗'
      }
    }
  }
}
