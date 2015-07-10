var invert = require('invert-obj');

function UnderlyingProvisionOptionExpirationDateOffsetPeriod (underlyingProvisionOptionExpirationDateOffsetPeriod) {
  this.message = underlyingProvisionOptionExpirationDateOffsetPeriod;
}

UnderlyingProvisionOptionExpirationDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExpirationDateOffsetPeriod.Tag = '42136';

UnderlyingProvisionOptionExpirationDateOffsetPeriod.Type = 'INT';

module.exports = UnderlyingProvisionOptionExpirationDateOffsetPeriod;