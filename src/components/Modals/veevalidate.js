import { extend } from 'vee-validate';

// extend('email', {
//   validate(value) {
//     // return value.length <= length;
//     if (value) {
//
//     }
//     return 'field is required';
//   },
//   message: '',
// });

extend('minLength', {
  params: ['min'],
  validate(value, { length }) {
    return value.length >= length;
  }
});
