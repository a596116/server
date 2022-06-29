import { Application } from 'egg'

export default (app: Application) => {
    const { STRING, JSON } = app.Sequelize
    const User = app.model.define('user', {
        // id: {
        //     type: UUID,
        //     primaryKey: true,
        //     allowNull: false,
        //     defaultValue: UUIDV4,
        //     comment: '學生id'
        // },
        name: {
            type: STRING(36),
            allowNull: false,
            comment: '用戶姓名'
        },
        account: {
            type: STRING(36),
            allowNull: false,
            comment: '用戶帳號'
        },
        password: {
            type: STRING(36),
            allowNull: false,
            comment: '用戶密碼'
        },
        token: {
            type: STRING(36),
            allowNull: false,
            comment: '認證碼'
        },
        active: {
            type: STRING(5),
            comment: '活躍狀態'
        },
        avatar: {
            type: STRING(36),
            comment: '頭像'
        },
        permissions: {
            type: JSON,
            comment: '權限'
        },
    })

    return User
}