var invert = require('invert-obj');

function NoProvisionOptionExpirationDateBusinessCenters (noProvisionOptionExpirationDateBusinessCenters) {
  this.message = noProvisionOptionExpirationDateBusinessCenters;
}

NoProvisionOptionExpirationDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoProvisionOptionExpirationDateBusinessCenters.Tag = '40955';

NoProvisionOptionExpirationDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoProvisionOptionExpirationDateBusinessCenters;