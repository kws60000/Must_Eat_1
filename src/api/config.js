import axios from 'axios'
import qs from 'qs'

const host = location.protocol + '//' + process.env.R_URL

// 사용자 에러 처리
export const axiosPost = (url, params) => {
  return new Promise(function (resolve, reject) {
    axios
      .post(host + url, qs.stringify(params))
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        console.log(err)
      })
  })
}
