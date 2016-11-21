import moment from 'moment';
import { ROOT_PATH } from './config/constants';

let assetManifest = null;

export function getAsset(name) {
  if (!assetManifest) {
    // eslint-disable-next-line global-require
    assetManifest = require('../public/webpack/manifest.json');
  }

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
