var invert = require('invert-obj');

function ProvisionOptionExpirationDateOffsetDayType (provisionOptionExpirationDateOffsetDayType) {
  this.message = provisionOptionExpirationDateOffsetDayType;
}

ProvisionOptionExpirationDateOffsetDayType.prototype.value = function () {
  return this.message;
};

ProvisionOptionExpirationDateOffsetDayType.Tag = '40151';

ProvisionOptionExpirationDateOffsetDayType.Type = 'INT';

module.exports = ProvisionOptionExpirationDateOffsetDayType;