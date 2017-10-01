require('./lib/setupEnvironment');

const tunnel = require('contentful-webhook-tunnel');
const touch = require('touch');
const path = require('path');

const server = tunnel.createServer({
  spaces: [process.env.CONTENTFUL_SPACE_ID],
});

server.on('publish', function () {
  console.log('Received webhook for Publish event in Contentful');
  touch(path.resolve(__dirname, 'lib', 'config', 'roots.js'));
});

server.listen();
