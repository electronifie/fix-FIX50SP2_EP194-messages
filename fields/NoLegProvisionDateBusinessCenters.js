var invert = require('invert-obj');

function NoLegProvisionDateBusinessCenters (noLegProvisionDateBusinessCenters) {
  this.message = noLegProvisionDateBusinessCenters;
}

NoLegProvisionDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegProvisionDateBusinessCenters.Tag = '40939';

NoLegProvisionDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegProvisionDateBusinessCenters;