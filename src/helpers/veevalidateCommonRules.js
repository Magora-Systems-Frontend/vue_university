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
