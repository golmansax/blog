'use strict';

/* eslint-disable no-console */

require('./lib/setupEnvironment');

var tunnel = require('contentful-webhook-tunnel');
var touch = require('touch');
var path = require('path');

var server = tunnel.createServer({
  spaces: [process.env.CONTENTFUL_SPACE_ID]
});

server.on('publish', function () {
  console.log('Received webhook for Publish event in Contentful');
  touch(path.resolve(__dirname, 'lib', 'config', 'roots.js'));
});

server.listen();