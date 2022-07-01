import { Controller } from 'egg'

export default class DataController extends Controller {
  // public async index() {
  //   try {
  //     const table = await this.ctx.params.id
  //     const id = this.ctx.query.id
  //     // const userList = await this.ctx.service.data.getDataList(table)
  //     const test = await this.ctx.service.data.getData(table, parseInt(id))
  //     this.ctx.body = {
  //       code: 20000,
  //       data: test
  //     }
  //   } catch (error) {
  //     this.ctx.body = {
  //       code: 40000,
  //       message: '獲取失敗'
  //     }
  //   }
  // }

  // data?id=[table]
  async create() {
    try {
      const data = await this.ctx.request.body
      const table = this.ctx.query.id
      await this.ctx.service.data.createData(table, data)
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
  // 更新資料 /data?id=[id]
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
      const table = await this.ctx.params.id
      const id = this.ctx.query.id
      await this.ctx.service.data.deleteData(table, parseInt(id))
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
}
