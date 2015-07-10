var invert = require('invert-obj');

function ProvisionOptionExpirationDateOffsetUnit (provisionOptionExpirationDateOffsetUnit) {
  this.message = provisionOptionExpirationDateOffsetUnit;
}

ProvisionOptionExpirationDateOffsetUnit.prototype.value = function () {
  return this.message;
};

ProvisionOptionExpirationDateOffsetUnit.Tag = '40150';

ProvisionOptionExpirationDateOffsetUnit.Type = 'STRING';

module.exports = ProvisionOptionExpirationDateOffsetUnit;