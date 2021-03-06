const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  token: state => state.user.token,
  userId: state => state.user.userId,
  userName: state => state.user.userName,
  roles: state => state.user.roles,
  menus: state => state.user.menus
}
export default getters
