var invert = require('invert-obj');

function LegProvisionOptionSinglePartySellerSide (legProvisionOptionSinglePartySellerSide) {
  this.message = legProvisionOptionSinglePartySellerSide;
}

LegProvisionOptionSinglePartySellerSide.prototype.value = function () {
  return this.message;
};

LegProvisionOptionSinglePartySellerSide.Tag = '40458';

LegProvisionOptionSinglePartySellerSide.Type = 'INT';

module.exports = LegProvisionOptionSinglePartySellerSide;