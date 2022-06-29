import { Application } from 'egg'

export default (app: Application) => {
    const { JSON } = app.Sequelize
    const Test = app.model.define('test', {
        test: {
            type: JSON,
            comment: '測試'
        },
    })

    return Test
}