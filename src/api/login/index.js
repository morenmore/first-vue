import axios from 'axios'

const config = {
  baseUrl: 'http://127.0.0.1:3000'
}

function fetchLogin () {
  return axios.post(`${config.baseUrl}/login`)
}
export {
  fetchLogin
  //
}
