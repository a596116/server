import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'
import path from 'path'

const Op = require('sequelize').Op

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1656122742526_1462'

  // add your egg config in here
  config.middleware = []

  //设置上传文件
  config.multipart = {
    fileSize: 300 * 1000 * 1000, //设置上传限制为300M
  }

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
    port: 3308,
    username: 'haodai',
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
    },
    operatorsAliases: {
      $eq: Op.eq,
      $ne: Op.ne,
      $gte: Op.gte,
      $gt: Op.gt,
      $lte: Op.lte,
      $lt: Op.lt,
      $not: Op.not,
      $in: Op.in,
      $notIn: Op.notIn,
      $is: Op.is,
      $like: Op.like,
      $notLike: Op.notLike,
      $iLike: Op.iLike,
      $notILike: Op.notILike,
      $regexp: Op.regexp,
      $notRegexp: Op.notRegexp,
      $iRegexp: Op.iRegexp,
      $notIRegexp: Op.notIRegexp,
      $between: Op.between,
      $notBetween: Op.notBetween,
      $overlap: Op.overlap,
      $contains: Op.contains,
      $contained: Op.contained,
      $adjacent: Op.adjacent,
      $strictLeft: Op.strictLeft,
      $strictRight: Op.strictRight,
      $noExtendRight: Op.noExtendRight,
      $noExtendLeft: Op.noExtendLeft,
      $and: Op.and,
      $or: Op.or,
      $any: Op.any,
      $all: Op.all,
      $values: Op.values,
      $col: Op.col
    },
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
