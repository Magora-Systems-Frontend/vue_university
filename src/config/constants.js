export const {
  API_URL_PROD = 'https://magora-react-university-api.herokuapp.com',
  API_VERSION = '1',
} = process.env || {} ;

export const ROUTES = {
  HOME_PAGE: '/',
  TEST_PAGE: '/test',
};

export const API_METHODS = {
  COURSES: '/courses',
  CATEGORIES: '/categories',
  COMMENTS: '/comments',
};
