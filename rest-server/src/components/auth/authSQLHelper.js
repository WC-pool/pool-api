export const signUpHelper = (name, email, uid, image) => {
  return `INSERT INTO users (name, email, uid, image)
  VALUES ('${name}', '${email}', '${uid}', '${image}')
  ON CONFLICT DO NOTHING
  RETURNING id, email, uid
  `;
}