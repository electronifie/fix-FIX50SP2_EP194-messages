var invert = require('invert-obj');

function NoThrottles (noThrottles) {
  this.message = noThrottles;
}

NoThrottles.prototype.value = function () {
  return this.message;
};

NoThrottles.Tag = '1610';

NoThrottles.Type = 'NUMINGROUP';

module.exports = NoThrottles;