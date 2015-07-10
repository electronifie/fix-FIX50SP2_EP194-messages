var invert = require('invert-obj');

function BusinessCenter (businessCenter) {
  this.message = businessCenter;
}

BusinessCenter.prototype.value = function () {
  return this.message;
};

BusinessCenter.Tag = '40471';

BusinessCenter.Type = 'STRING';

module.exports = BusinessCenter;