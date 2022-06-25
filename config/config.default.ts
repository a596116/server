import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'
import path from 'path'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1656122742526_1462'

  // add your egg config in here
  config.middleware = []

  // json web token
  config.jwt = {
    secret: 'haodai',
  }

  // csrf
  config.security = {
    csrf: {
      enable: false
    }
  }

  config.view = {
    defaultViewEngine: 'nunjucks',
  }

  // 跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  }

  // sql
  config.sequelize = {
    dialect: 'mysql',
    host: '103.61.139.237',
    port: '3308',
    user: 'haodai',
    password: '123456',
    database: 'server',
    timezone: '+08:00',
    define: {  // model的全局配置
      timestamps: true,   // 添加create,update,delete时间戳
      // paranoid: true,   // 添加软删除
      freezeTableName: true,  // 防止修改表名为复数
      underscored: false  // 防止驼峰式字段被默认转为下划线
    },
    // 打印日志
    logging: true,
    // 时间格式化
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    }
  }

  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/public')
  }
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  }
}
