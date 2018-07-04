import request from '@/utils/request'
export function fetchList(query){
  return request ({
    url:'/article/list', //请求数据
    method:'get',
    params:query //请求参数
  })
}
