import request from './network.js'

const baseURL = "http://152.136.185.210:8000"
export function getMultiData(){
  return request({
    url: baseURL + '/api/w6/home/multidata'
  })
}

export function getGoodsData(type, page){
  return request({
    url: baseURL + '/api/w6/home/data',
    data: {
      type,
      page
    }
  })
}