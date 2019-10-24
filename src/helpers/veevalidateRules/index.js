import { extend } from 'vee-validate';

extend('magic', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});
