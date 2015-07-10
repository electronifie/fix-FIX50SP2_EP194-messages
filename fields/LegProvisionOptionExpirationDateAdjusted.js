var invert = require('invert-obj');

function LegProvisionOptionExpirationDateAdjusted (legProvisionOptionExpirationDateAdjusted) {
  this.message = legProvisionOptionExpirationDateAdjusted;
}

LegProvisionOptionExpirationDateAdjusted.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExpirationDateAdjusted.Tag = '40505';

LegProvisionOptionExpirationDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegProvisionOptionExpirationDateAdjusted;