import jsonp from 'common/js/jsonp'
<<<<<<< HEAD
import {commonParams, options} from './config'

export function getSingerList() {
  var url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

=======
import {commonParams, options} from 'api/config'
export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
>>>>>>> 3feab8da5fc2bae560e68a9e0e6d2bffbf072059
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })
<<<<<<< HEAD

=======
>>>>>>> 3feab8da5fc2bae560e68a9e0e6d2bffbf072059
  return jsonp(url, data, options)
}
