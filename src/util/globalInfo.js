class UserInfo {
  // 이름
  static get name () {
    return localStorage.getItem('name') || ''
  }

  static set name (value) {
    localStorage.setItem('name', value)
  }

  static get token () {
    return localStorage.getItem('token') || ''
  }

  static set token (value) {
    localStorage.setItem('token', value)
  }

  // 초기화
  static Clear () {
    localStorage.setItem('name', '')
  }
}

export default { UserInfo }
