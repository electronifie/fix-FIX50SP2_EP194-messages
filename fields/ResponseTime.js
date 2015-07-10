var invert = require('invert-obj');

function ResponseTime (responseTime) {
  this.message = responseTime;
}

ResponseTime.prototype.value = function () {
  return this.message;
};

ResponseTime.Tag = '1914';

ResponseTime.Type = 'UTCTIMESTAMP';

module.exports = ResponseTime;