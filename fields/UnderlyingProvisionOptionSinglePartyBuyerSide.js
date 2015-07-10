var invert = require('invert-obj');

function UnderlyingProvisionOptionSinglePartyBuyerSide (underlyingProvisionOptionSinglePartyBuyerSide) {
  this.message = underlyingProvisionOptionSinglePartyBuyerSide;
}

UnderlyingProvisionOptionSinglePartyBuyerSide.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionSinglePartyBuyerSide.Tag = '42157';

UnderlyingProvisionOptionSinglePartyBuyerSide.Type = 'INT';

module.exports = UnderlyingProvisionOptionSinglePartyBuyerSide;