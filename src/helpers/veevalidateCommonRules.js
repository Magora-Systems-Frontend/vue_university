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
