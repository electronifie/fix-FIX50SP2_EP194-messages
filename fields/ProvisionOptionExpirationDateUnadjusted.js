var invert = require('invert-obj');

function ProvisionOptionExpirationDateUnadjusted (provisionOptionExpirationDateUnadjusted) {
  this.message = provisionOptionExpirationDateUnadjusted;
}

ProvisionOptionExpirationDateUnadjusted.prototype.value = function () {
  return this.message;
};

ProvisionOptionExpirationDateUnadjusted.Tag = '40145';

ProvisionOptionExpirationDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = ProvisionOptionExpirationDateUnadjusted;