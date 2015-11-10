var invert = require('invert-obj');

function ThrottleType (throttleType) {
  this.message = throttleType;
}

ThrottleType.prototype.value = function () {
  return this.message;
};


ThrottleType.Keys = {
  'INBOUND_RATE': '0',
  'OUTSTANDING_REQUESTS': '1',
};

ThrottleType.Tag = '1612';

ThrottleType.Type = 'INT';

ThrottleType.Values = invert(ThrottleType.Keys);

module.exports = ThrottleType;