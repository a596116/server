import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async index() {
    try {
      const table = await this.ctx.params.id
      // const userList = await this.ctx.service.data.getDataList(table)
      this.ctx.body = table
    } catch (error) {
      this.ctx.body = {
        code: 40000,
        message: '獲取失敗'
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
      const table = await this.ctx.params.id
      const id = this.ctx.query.id
      await this.ctx.service.data.updateData(table, parseInt(id), obj)
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

  // user/:id 根據id對應表查詢所有資料
  async show() {
    try {
      const table = await this.ctx.params.id
      const userList = await this.ctx.service.data.getDataList(table)
      this.ctx.body = userList
    } catch (error) {
      this.ctx.body = {
        code: 40000,
        message: '獲取失敗'
      }
    }
  }
}
