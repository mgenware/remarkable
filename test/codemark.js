/*global describe*/
'use strict';

var path = require('path');
var utils = require('./utils');
var Remarkable = require('../');

describe('Codemark', () => {
  var md = new Remarkable('full', {
    html: true,
    typographer: true,
    linkify: true
  });

  utils.addTests(path.join(__dirname, 'fixtures/codemark'), md);
});
