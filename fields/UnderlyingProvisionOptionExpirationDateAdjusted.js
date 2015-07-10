var invert = require('invert-obj');

function UnderlyingProvisionOptionExpirationDateAdjusted (underlyingProvisionOptionExpirationDateAdjusted) {
  this.message = underlyingProvisionOptionExpirationDateAdjusted;
}

UnderlyingProvisionOptionExpirationDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExpirationDateAdjusted.Tag = '42139';

UnderlyingProvisionOptionExpirationDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionOptionExpirationDateAdjusted;