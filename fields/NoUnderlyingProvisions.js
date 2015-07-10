var invert = require('invert-obj');

function NoUnderlyingProvisions (noUnderlyingProvisions) {
  this.message = noUnderlyingProvisions;
}

NoUnderlyingProvisions.prototype.value = function () {
  return this.message;
};

NoUnderlyingProvisions.Tag = '42149';

NoUnderlyingProvisions.Type = 'NUMINGROUP';

module.exports = NoUnderlyingProvisions;