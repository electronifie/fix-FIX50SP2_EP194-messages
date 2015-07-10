var invert = require('invert-obj');

function ThrottleTimeUnit (throttleTimeUnit) {
  this.message = throttleTimeUnit;
}

ThrottleTimeUnit.prototype.value = function () {
  return this.message;
};

ThrottleTimeUnit.Tag = '1615';

ThrottleTimeUnit.Type = 'INT';

module.exports = ThrottleTimeUnit;