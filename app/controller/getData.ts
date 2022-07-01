import { Controller } from 'egg'

export default class getDataController extends Controller {
    // data/:id 根據id(table)對應表查詢所有資料
    // params page:第幾頁
    async getUser() {
        try {
            const page = this.ctx.params.id || 1
            const q = this.ctx.query //查詢條件
            const order = q.o || 'asc'
            const search = q.s || ''
            const permission = q.m || ''
            const active = q.a || ''
            const dataList = await this.ctx.service.getData.getUserList(parseInt(page), order, search, permission, active)
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

    async getBlog() {
        try {
            const page = this.ctx.params.id || 1
            const q = this.ctx.query //查詢條件
            const order = q.o || 'asc'
            const search = q.s || ''
            const category = q.m || ''
            const dataList = await this.ctx.service.getData.getBlogList(parseInt(page), order, search, category)
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