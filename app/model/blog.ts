import { Application } from 'egg'

export default (app: Application) => {
    const { STRING, TEXT } = app.Sequelize
    const Blog = app.model.define('blog', {
        title: {
            type: STRING(100),
            comment: '標題'
        },
        content: {
            type: TEXT,
            comment: '內容'
        },
        category: {
            type: STRING(36),
            comment: '類別'
        },
        image: {
            type: STRING(100),
            comment: '圖片'
        }
    })

    return Blog
}