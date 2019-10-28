import {configure, extend} from 'vee-validate';

const config = {
  skipOptional: false,
};
configure(config);

extend('required', value => {
  if (value) {
    return true;
  }
  return 'This field is required';
});

extend('email', value => {
  const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (value.match(regExp)) {
    return true;
  }
  return 'Please input valid email address';
});

extend('password', value => {
  if (value && value.length >= 6) {
    return true;
  }
  return 'Password should contain at least 6 symbols';
});

extend('confirmed', {
  params: [{ name: 'password', isTarget: true }],
  validate: (value, { password }) => {
    return value === password;
  },
  message: 'Confirmation password should match with password'
});
