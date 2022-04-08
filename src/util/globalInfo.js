class user {
  static get id () {
    return localStorage.getItem('id') || ''
  }

  static set id (value) {
    localStorage.setItem('id', value)
  }

  static get name () {
    return localStorage.getItem('name') || ''
  }

  static set name (value) {
    localStorage.setItem('name', value)
  }

  static get email () {
    return localStorage.getItem('email') || ''
  }

  static set email (value) {
    localStorage.setItem('email', value)
  }

  static get token () {
    return localStorage.getItem('token') || ''
  }

  static set token (value) {
    localStorage.setItem('token', value)
  }

  // 초기화
  static clear () {
    localStorage.removeItem('id')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    location.reload()
  }
}

export default { user }
