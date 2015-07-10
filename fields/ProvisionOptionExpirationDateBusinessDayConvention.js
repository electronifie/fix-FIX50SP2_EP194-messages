var invert = require('invert-obj');

function ProvisionOptionExpirationDateBusinessDayConvention (provisionOptionExpirationDateBusinessDayConvention) {
  this.message = provisionOptionExpirationDateBusinessDayConvention;
}

ProvisionOptionExpirationDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

ProvisionOptionExpirationDateBusinessDayConvention.Tag = '40146';

ProvisionOptionExpirationDateBusinessDayConvention.Type = 'INT';

module.exports = ProvisionOptionExpirationDateBusinessDayConvention;