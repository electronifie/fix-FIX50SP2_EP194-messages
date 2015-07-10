var invert = require('invert-obj');

function ProvisionOptionExpirationDateOffsetPeriod (provisionOptionExpirationDateOffsetPeriod) {
  this.message = provisionOptionExpirationDateOffsetPeriod;
}

ProvisionOptionExpirationDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

ProvisionOptionExpirationDateOffsetPeriod.Tag = '40149';

ProvisionOptionExpirationDateOffsetPeriod.Type = 'INT';

module.exports = ProvisionOptionExpirationDateOffsetPeriod;