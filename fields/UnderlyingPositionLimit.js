var invert = require('invert-obj');

function UnderlyingPositionLimit (underlyingPositionLimit) {
  this.message = underlyingPositionLimit;
}

UnderlyingPositionLimit.prototype.value = function () {
  return this.message;
};

UnderlyingPositionLimit.Tag = '2037';

UnderlyingPositionLimit.Type = 'INT';

module.exports = UnderlyingPositionLimit;