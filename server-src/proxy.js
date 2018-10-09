'use strict';

const CONFIG = require('config');

const proxy     = require('../utils/proxy');
const httpAuth  = require('../utils/http-auth.js');
const utilities = require('../utils/utilities.js');

exports.post = (url, data) => {
    console.log('data.body', data.body);
  return proxy.post("http://ea05cd32.ngrok.io/createGift",  data.body || {});
};

exports.put = (url, data) => {
  return proxy.put(formatUrl(url), populateHeaders(data), data.body || {});
};

exports.get = (url) => {
    console.log(url);
  return proxy.get('');
};

exports.delete = (url, data) => {
  return proxy.del(formatUrl(url), populateHeaders(data));
};
