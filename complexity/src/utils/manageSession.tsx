export const saveToken = () => {
  sessionStorage.setItem(
    'complexity_token',
    `I2QczxNjlXY9fzjN5pi5pLlj1pv5W8Kw08PnngealrA5JAtmqqcqX9eILRJNnp1UpCxHJ0oq8GJzIlEeIbhB0fczLgj9XvCJ1fM`,
  )
  window.location.href = '/'
}

export const removeToken = () => {
  sessionStorage.removeItem('complexity_token')
  window.location.href = '/'
}
