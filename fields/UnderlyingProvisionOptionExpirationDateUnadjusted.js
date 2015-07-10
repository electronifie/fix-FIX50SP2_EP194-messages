var invert = require('invert-obj');

function UnderlyingProvisionOptionExpirationDateUnadjusted (underlyingProvisionOptionExpirationDateUnadjusted) {
  this.message = underlyingProvisionOptionExpirationDateUnadjusted;
}

UnderlyingProvisionOptionExpirationDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExpirationDateUnadjusted.Tag = '42133';

UnderlyingProvisionOptionExpirationDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionOptionExpirationDateUnadjusted;