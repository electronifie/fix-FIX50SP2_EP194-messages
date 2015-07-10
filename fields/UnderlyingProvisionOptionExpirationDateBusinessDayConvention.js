var invert = require('invert-obj');

function UnderlyingProvisionOptionExpirationDateBusinessDayConvention (underlyingProvisionOptionExpirationDateBusinessDayConvention) {
  this.message = underlyingProvisionOptionExpirationDateBusinessDayConvention;
}

UnderlyingProvisionOptionExpirationDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExpirationDateBusinessDayConvention.Tag = '42134';

UnderlyingProvisionOptionExpirationDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingProvisionOptionExpirationDateBusinessDayConvention;