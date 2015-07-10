var invert = require('invert-obj');

function NoUnderlyingBusinessCenters (noUnderlyingBusinessCenters) {
  this.message = noUnderlyingBusinessCenters;
}

NoUnderlyingBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingBusinessCenters.Tag = '40962';

NoUnderlyingBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingBusinessCenters;