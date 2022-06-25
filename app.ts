import { Application } from 'egg'

export default (app: Application) => {
    app.beforeStart(async () => {
        // 初始化数据库
        // sync方法會根據模型創建表
        // await app.model.sync({ force: true }) //開發環境使用,會刪除數據
        await app.model.sync()
    })
}