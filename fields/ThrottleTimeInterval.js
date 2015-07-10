var invert = require('invert-obj');

function ThrottleTimeInterval (throttleTimeInterval) {
  this.message = throttleTimeInterval;
}

ThrottleTimeInterval.prototype.value = function () {
  return this.message;
};

ThrottleTimeInterval.Tag = '1614';

ThrottleTimeInterval.Type = 'INT';

module.exports = ThrottleTimeInterval;