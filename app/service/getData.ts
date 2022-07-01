import { Service } from 'egg'

export default class GetDataService extends Service {
    // 獲取用戶所有資料
    async getUserList(page: number, order: string, search: string, permission: string, active: string) {
        try {
            return await this.app.model.User.findAndCountAll({
                order: [['id', order]], // 排序 ASC 正序 DESC 逆序
                where: {
                    name: { $like: `%${search}%` },
                    permissions: {
                        p: { $like: `%${permission}%` }
                    },
                    active: { $like: `%${active}%` },
                },
                limit: 5, //一頁有3筆資料
                offset: 5 * (page - 1) //第幾頁
            })
        } catch (error) {
            return false
        }
    }

    // 獲取用戶所有資料
    async getBlogList(page: number, order: string, search: string, category: string) {
        try {
            return await this.app.model.Blog.findAndCountAll({
                order: [['id', order]], // 排序 ASC 正序 DESC 逆序
                where: {
                    title: { $like: `%${search}%` },
                    category: { $like: `%${category}%` }
                },
                limit: 5, //一頁有3筆資料
                offset: 5 * (page - 1) //第幾頁
            })
        } catch (error) {
            return false
        }
    }
}
