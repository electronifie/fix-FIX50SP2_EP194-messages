var invert = require('invert-obj');

function ThrottleCountIndicator (throttleCountIndicator) {
  this.message = throttleCountIndicator;
}

ThrottleCountIndicator.prototype.value = function () {
  return this.message;
};


ThrottleCountIndicator.Keys = {
  OUTSTANDING_REQUESTS_UNCHANGED: '0',
  OUTSTANDING_REQUESTS_DECREASED: '1',
};

ThrottleCountIndicator.Tag = '1686';

ThrottleCountIndicator.Type = 'INT';

ThrottleCountIndicator.Values = invert(ThrottleCountIndicator.Keys);

module.exports = ThrottleCountIndicator;