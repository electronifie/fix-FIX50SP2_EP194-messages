var invert = require('invert-obj');

function ProvisionOptionSinglePartySellerSide (provisionOptionSinglePartySellerSide) {
  this.message = provisionOptionSinglePartySellerSide;
}

ProvisionOptionSinglePartySellerSide.prototype.value = function () {
  return this.message;
};

ProvisionOptionSinglePartySellerSide.Tag = '40100';

ProvisionOptionSinglePartySellerSide.Type = 'INT';

module.exports = ProvisionOptionSinglePartySellerSide;