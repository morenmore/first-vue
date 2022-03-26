import axios from 'axios'

const config = {
  baseUrl: ''
}

function fetchUserInfo (id, password) {
  console.log('data', id, password)
  return axios.post(`${config.baseUrl}/login`, { id, password })
}
export {
  fetchUserInfo
  //
}
