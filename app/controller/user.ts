import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async index() {
    try {
      const userList = await this.ctx.service.user.getUserList()
      if (userList) {
        this.ctx.body = {
          code: 20000,
          data: userList
        }
      }
      else {
        this.ctx.body = {
          code: 40000,
          message: '獲取用戶列表失敗'
        }
      }
    } catch (error) {
      this.ctx.body = {
        code: 40000,
        message: '獲取用戶列表失敗'
      }
    }
  }

  async create() {
    try {
      const user = this.ctx.request.body.user
      await this.ctx.service.user.createUser(user)
      this.ctx.body = {
        code: 20000,
        message: true
      }
    } catch (error) {
      this.ctx.body = {
        code: 40000,
        data: '新增失敗'
      }
    }
  }

  async update() {
    try {
      const obj = await this.ctx.request.body
      const id = await this.ctx.params.id
      await this.ctx.service.user.updateUser(id, obj)
      this.ctx.body = {
        code: 20000,
        message: '修改成功',
      }
    } catch (error) {
      this.ctx.body = {
        code: 40000,
        message: '修改失敗',
      }
    }
  }

  async destroy() {
    try {
      const id = await this.ctx.params.id
      await this.ctx.service.user.deleteUser(id)
      this.ctx.body = {
        code: 20000,
        message: true,
      }
    } catch (error) {
      this.ctx.body = {
        code: 30000,
        message: '刪除失敗',
      }
    }
  }

  // user/:id 用ID獲取用戶資訊
  async show() {
    try {
      const id = this.ctx.params.id
      const user = await this.ctx.service.user.getUser(id)
      if (user) {
        this.ctx.body = {
          code: 20000,
          data: user
        }
      } else {
        this.ctx.body = {
          code: 40000,
          message: '獲取用戶資訊失敗'
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
