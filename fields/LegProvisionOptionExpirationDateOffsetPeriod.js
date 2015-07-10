var invert = require('invert-obj');

function LegProvisionOptionExpirationDateOffsetPeriod (legProvisionOptionExpirationDateOffsetPeriod) {
  this.message = legProvisionOptionExpirationDateOffsetPeriod;
}

LegProvisionOptionExpirationDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExpirationDateOffsetPeriod.Tag = '40502';

LegProvisionOptionExpirationDateOffsetPeriod.Type = 'INT';

module.exports = LegProvisionOptionExpirationDateOffsetPeriod;