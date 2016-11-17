import moment from 'moment';
import { ROOT_PATH } from './constants';

export function blogPath(path) {
  if (path[0] === '/') { return `${ROOT_PATH}${path}`; }
  return `${ROOT_PATH}/${path}`;
}

export function formatDate(date) {
  return moment(date).format('MMM DD YYYY');
}
