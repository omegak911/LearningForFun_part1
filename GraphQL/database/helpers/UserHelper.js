import User from '../collections/User';

const createUser = ({ username, password }) => {
  let user = new User({
    username,
    password
  })
  return user.save();
}

const validateUser = ({ username, password }) =>
  User.findOne({ username, password })

export { createUser, validateUser };