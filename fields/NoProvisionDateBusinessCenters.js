var invert = require('invert-obj');

function NoProvisionDateBusinessCenters (noProvisionDateBusinessCenters) {
  this.message = noProvisionDateBusinessCenters;
}

NoProvisionDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoProvisionDateBusinessCenters.Tag = '40957';

NoProvisionDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoProvisionDateBusinessCenters;