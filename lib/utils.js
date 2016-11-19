import moment from 'moment';
import assetManifest from '../public/webpack/manifest.json';
import { ROOT_PATH } from './config/constants';

export function getAsset(name) {
  if (!assetManifest[name]) {
    throw new Error(`Asset not found: ${name}`);
  }

  return `/webpack/${assetManifest[name]}`;
}

export function blogPath(path) {
  if (path[0] === '/') { return `${ROOT_PATH}${path}`; }
  return `${ROOT_PATH}/${path}`;
}

export function formatDate(date) {
  return moment(date).format('MMM DD YYYY');
}

export function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/--/g, '-');
}
