/* eslint-disable no-console */

import mkdirp from 'mkdirp';
import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import RedirectPage from '../views/RedirectPage';

function getRedirectHtml(redirectUrl) {
  const html = renderToStaticMarkup(<RedirectPage redirectUrl={redirectUrl} />);
  return `<!DOCTYPE html>${html}`;
}

const REDIRECTS = [
  {
    from: '/posts/2017/06/08/the-most-important-change-i-made-when-i-became-self-employed/',
    to: [
      '/posts/2017/06/08',
      '/time-tracking-the-most-important-change-i-made-when-i-became-self-employed/',
    ].join(''),
  },
];

const ROOT_PATH = path.resolve(__dirname, '..', '..', 'public');

REDIRECTS.forEach(({ from, to }) => {
  // Need to ignore leading / in 'from' URL
  const outputPath = path.resolve(ROOT_PATH, from.substring(1), 'index.html');

  mkdirp.sync(path.dirname(outputPath));

  const html = getRedirectHtml(`/blog${to}`);
  fs.writeFileSync(outputPath, html);

  console.log('Successfully created RedirectPage');
  console.log(`  From: ${from}`);
  console.log(`  To: ${to}`);
});
