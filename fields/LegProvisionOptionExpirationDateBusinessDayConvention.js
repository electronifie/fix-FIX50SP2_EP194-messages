var invert = require('invert-obj');

function LegProvisionOptionExpirationDateBusinessDayConvention (legProvisionOptionExpirationDateBusinessDayConvention) {
  this.message = legProvisionOptionExpirationDateBusinessDayConvention;
}

LegProvisionOptionExpirationDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExpirationDateBusinessDayConvention.Tag = '40499';

LegProvisionOptionExpirationDateBusinessDayConvention.Type = 'INT';

module.exports = LegProvisionOptionExpirationDateBusinessDayConvention;