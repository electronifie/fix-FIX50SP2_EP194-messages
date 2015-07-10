var invert = require('invert-obj');

function NoLegProvisionOptionExpirationDateBusinessCenters (noLegProvisionOptionExpirationDateBusinessCenters) {
  this.message = noLegProvisionOptionExpirationDateBusinessCenters;
}

NoLegProvisionOptionExpirationDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegProvisionOptionExpirationDateBusinessCenters.Tag = '40937';

NoLegProvisionOptionExpirationDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegProvisionOptionExpirationDateBusinessCenters;