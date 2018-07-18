import Loki from 'lokijs'
// db 配置，初始化，连接，数据查询
// db 句柄，代表着数据库，数据库名(一个项目一个库)->collections(table的别称)->rows(数据记录)->columns(列名)

// sql查询，典型的异步操作，用promise来封装吧，连接数据库要时间，查询要时间，返回结果要路上时间
export const db = new Loki('notes',{
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 3000,
  persistenceMethod: 'localStorage'
})
//类似于mySQL建表
function databaseInitialize () {
  const notes = db.getCollection('notes');
  if(notes === null) {
    db.addCollection('notes')
  }
}
export function loadCollection(collection) {
  // 数据库操作 是异步操作
  return new Promise(resolve => {
    db.loadDatabase({}, ()=> {
      const _collection = db.getCollection(collection) || db.addCollection(collection);
      resolve(_collection);
    })
  })
}