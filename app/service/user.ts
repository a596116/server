import { Service } from 'egg'

export default class UserService extends Service {
  // 新增帳號
  public async createUser(user: string) {
    try {
      await this.app.model.User.create(user)
      return true
    } catch (error) {
      return false
    }
  }
  // 獲取所有用戶
  async getUserList() {
    try {
      return await this.app.model.User.findAll()
    } catch (error) {
      return false
    }
  }

  // 獲取用戶資訊
  async userInfo(token: string) {
    const userAccount = this.ctx.app.jwt.verify(token, this.ctx.app.config.jwt.secret)
    try {
      return await this.app.model.User.findOne({ where: { account: userAccount } })
    } catch (error) {
      return false
    }
  }

  // 更新用戶
  async updateUser(id: number, obj) {
    try {
      return await this.app.model.User.update(obj, {
        where: { id }
      })
    } catch (error) {
      return false
    }
  }

  // 刪除用戶
  async deleteUser(id: number) {
    try {
      await this.app.model.User.destroy({
        where: {
          id
        }
      })
      return true
    } catch (error) {
      return false
    }
  }

  // 登入
  async login(account: string, password: string) {
    try {
      const user = await this.app.model.User.findOne({ where: { account } })
      if (user) {
        let usr = user.dataValues
        if (password == usr.password && account == usr.account) {
          return this.app.jwt.sign(account, this.app.config.jwt.secret)
        } else {
          return false
        }
      } else {
        return false
      }
    } catch (error) {
      return false
    }
  }

  // 獲取用戶資訊
  async getUser(id: string) {
    try {
      return await this.app.model.User.findOne({ where: { id: id } })
    } catch (error) {
      return false
    }
  }
}
