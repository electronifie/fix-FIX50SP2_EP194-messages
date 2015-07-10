var invert = require('invert-obj');

function ProvisionOptionExpirationDateAdjusted (provisionOptionExpirationDateAdjusted) {
  this.message = provisionOptionExpirationDateAdjusted;
}

ProvisionOptionExpirationDateAdjusted.prototype.value = function () {
  return this.message;
};

ProvisionOptionExpirationDateAdjusted.Tag = '40152';

ProvisionOptionExpirationDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = ProvisionOptionExpirationDateAdjusted;