var invert = require('invert-obj');

function LegProvisionOptionExpirationDateUnadjusted (legProvisionOptionExpirationDateUnadjusted) {
  this.message = legProvisionOptionExpirationDateUnadjusted;
}

LegProvisionOptionExpirationDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegProvisionOptionExpirationDateUnadjusted.Tag = '40498';

LegProvisionOptionExpirationDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegProvisionOptionExpirationDateUnadjusted;