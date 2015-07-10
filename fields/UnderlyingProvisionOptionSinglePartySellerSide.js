var invert = require('invert-obj');

function UnderlyingProvisionOptionSinglePartySellerSide (underlyingProvisionOptionSinglePartySellerSide) {
  this.message = underlyingProvisionOptionSinglePartySellerSide;
}

UnderlyingProvisionOptionSinglePartySellerSide.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionSinglePartySellerSide.Tag = '42158';

UnderlyingProvisionOptionSinglePartySellerSide.Type = 'INT';

module.exports = UnderlyingProvisionOptionSinglePartySellerSide;