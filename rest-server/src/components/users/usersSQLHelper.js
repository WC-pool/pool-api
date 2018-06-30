export const getUsersHelper = (uid) => {
  return `
  SELECT * FROM users WHERE uid = '${uid}'
  `
}