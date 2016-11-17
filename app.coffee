dotenv = require 'dotenv'
dotenv.config(silent: true)

require 'babel-register'
require 'babel-polyfill'
module.exports = require './lib/config'
