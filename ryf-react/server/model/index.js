const Sequelize = require ('sequelize')
// 数据库 sql 
// koa 数据json
// yarn add mysql2  安装驱动
const sequelize = new Sequelize('antd','root','360.728z', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('success');
  })
  .catch(err => {
    console.log(err)
  })
module.exports = sequelize