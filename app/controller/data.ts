import { Controller } from 'egg'

export default class DataController extends Controller {
  public async index() {
    try {
      const table = await this.ctx.params.id
      const id = this.ctx.query.id
      // const userList = await this.ctx.service.data.getDataList(table)
      const test = await this.ctx.service.data.getData(table, parseInt(id))
      this.ctx.body = {
        code: 20000,
        data: test
      }
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
      const data = await this.ctx.service.data.updateData(table, parseInt(id), obj)
      if (data) {
        this.ctx.body = {
          code: 20000,
          message: '修改成功',
        }
      } else {
        this.ctx.body = {
          code: 40000,
          message: '修改失敗',
        }
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

  // data/:id 根據id(table)對應表查詢所有資料
  // params page:第幾頁
  async show() {
    try {
      const table = await this.ctx.params.id //表名
      const q = this.ctx.query //查詢條件
      const page = q.p || '1' //第幾頁
      const order = q.o || 'asc'
      const search = q.s || ''
      const permission = q.m || ''
      const active = q.a || ''
      const dataList = await this.ctx.service.data.getDataList(table, parseInt(page), order, search, permission, active)
      if (dataList) {
        this.ctx.body = {
          code: 20000,
          data: dataList
        }
      } else {
        this.ctx.body = {
          code: 40000,
          message: '獲取資料失敗'
        }
      }
    } catch (error) {
      this.ctx.body = {
        code: 40000,
        message: '獲取失敗'
      }
    }
  }
}
