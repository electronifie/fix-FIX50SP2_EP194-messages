var invert = require('invert-obj');

function LegProvisionOptionExpirationDateOffsetDayType (legProvisionOptionExpirationDateOffsetDayType) {
  this.message = legProvisionOptionExpirationDateOffsetDayType;
}

LegProvisionOptionExpirationDateOffsetDayType.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExpirationDateOffsetDayType.Tag = '40504';

LegProvisionOptionExpirationDateOffsetDayType.Type = 'INT';

module.exports = LegProvisionOptionExpirationDateOffsetDayType;