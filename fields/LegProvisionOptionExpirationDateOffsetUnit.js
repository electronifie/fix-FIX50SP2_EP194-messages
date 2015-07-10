var invert = require('invert-obj');

function LegProvisionOptionExpirationDateOffsetUnit (legProvisionOptionExpirationDateOffsetUnit) {
  this.message = legProvisionOptionExpirationDateOffsetUnit;
}

LegProvisionOptionExpirationDateOffsetUnit.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExpirationDateOffsetUnit.Tag = '40503';

LegProvisionOptionExpirationDateOffsetUnit.Type = 'STRING';

module.exports = LegProvisionOptionExpirationDateOffsetUnit;