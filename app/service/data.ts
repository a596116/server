import { Service } from 'egg'

export default class DataService extends Service {
  // 新增資料
  public async createData(table: string, data: object) {
    const tableName = table[0].toUpperCase() + table.slice(1) //將table字首轉換為大寫
    try {
      await this.app.model[tableName].create(data)
      return true
    } catch (error) {
      return false
    }
  }
  // 獲取所有Data
  async getDataList(table: string, page: number, order: string, search: string, permission: string, active: string) {
    const tableName = table[0].toUpperCase() + table.slice(1) //將table字首轉換為大寫
    try {
      return await this.app.model[tableName].findAndCountAll({
        order: [['id', order]], // 排序 ASC 正序 DESC 逆序
        where: {
          name: { $like: `%${search}%` },
          permissions: {
            p: { $like: `%${permission}%` }
          },
          active: { $like: `%${active}%` },
        },
        limit: 3, //一頁有3筆資料
        offset: 3 * (page - 1) //第幾頁
      })
    } catch (error) {
      return false
    }
  }

  // 更新Data
  async updateData(table: string, id: number, obj: object) {
    try {
      const tableName = table[0].toUpperCase() + table.slice(1) //將table字首轉換為大寫
      return await this.app.model[tableName].update(obj, { // 修改tableName理的資料
        where: { id }
      })
    } catch (error) {
      return false
    }
  }

  // 刪除資料
  async deleteData(table: string, id: number) {
    const tableName = table[0].toUpperCase() + table.slice(1) //將table字首轉換為大寫
    try {
      await this.app.model[tableName].destroy({
        where: {
          id
        }
      })
      return true
    } catch (error) {
      return false
    }
  }


  // 獲取單筆資料
  async getData(table: string, id: number) {
    const tableName = table[0].toUpperCase() + table.slice(1) //將table字首轉換為大寫
    try {
      return await this.app.model[tableName].findOne({ where: { id: id } })
    } catch (error) {
      return false
    }
  }
  async test() {
    return await this.app.model.Test.findAll()
  }
}
