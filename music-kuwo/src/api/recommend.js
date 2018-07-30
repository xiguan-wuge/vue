import jsonp from './jsonp';
import { URL, PARAM, OPTION } from './config';

export function getCarousel() {
  const data = Object.assign({}, PARAM, {
    g_tk: 701075693,
    uin: 0,
    platform: 'h5',
    needNewCode: 1,
    _: new Date().getTime()
  })
  return jsonp(URL.carousel, data,OPTION ) //carousel 旋转木马
}