import Mock from  'mockjs'
import articleAPI from './article'


Mock.mock(/\/article\/list/, 'get', articleAPI.getList);  //mock url => 提供地址  提供数据

export default Mock