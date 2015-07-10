var invert = require('invert-obj');

function UnderlyingProvisionOptionExpirationDateOffsetUnit (underlyingProvisionOptionExpirationDateOffsetUnit) {
  this.message = underlyingProvisionOptionExpirationDateOffsetUnit;
}

UnderlyingProvisionOptionExpirationDateOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionExpirationDateOffsetUnit.Tag = '42137';

UnderlyingProvisionOptionExpirationDateOffsetUnit.Type = 'STRING';

module.exports = UnderlyingProvisionOptionExpirationDateOffsetUnit;