var invert = require('invert-obj');

function NoUnderlyingProvisionDateBusinessCenters (noUnderlyingProvisionDateBusinessCenters) {
  this.message = noUnderlyingProvisionDateBusinessCenters;
}

NoUnderlyingProvisionDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingProvisionDateBusinessCenters.Tag = '42190';

NoUnderlyingProvisionDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingProvisionDateBusinessCenters;