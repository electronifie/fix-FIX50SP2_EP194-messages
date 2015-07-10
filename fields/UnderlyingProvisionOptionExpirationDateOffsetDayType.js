var invert = require('invert-obj');

function UnderlyingProvisionOptionExpirationDateOffsetDayType (underlyingProvisionOptionExpirationDateOffsetDayType) {
  this.message = underlyingProvisionOptionExpirationDateOffsetDayType;
}

UnderlyingProvisionOptionExpirationDateOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExpirationDateOffsetDayType.Tag = '42138';

UnderlyingProvisionOptionExpirationDateOffsetDayType.Type = 'INT';

module.exports = UnderlyingProvisionOptionExpirationDateOffsetDayType;