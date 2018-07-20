import User from '../collections/User';

const createUser = ({ username, password }) => {
  console.log(username, password)
  let user = new User({
    username,
    password
  })
  return user.save();
}

const validateUser = ({ username, password }) =>
  User.find({ username }, (err, result) => {
    if (err) return console.error(err);
    console.log('this is validateUser result: ', result);
    if (result.password === password) {
      return result;
    } else {
      return 'invalid password';
    }
  })

export { createUser, validateUser };