var invert = require('invert-obj');

function LegProvisionOptionSinglePartyBuyerSide (legProvisionOptionSinglePartyBuyerSide) {
  this.message = legProvisionOptionSinglePartyBuyerSide;
}

LegProvisionOptionSinglePartyBuyerSide.prototype.value = function () {
  return this.message;
};

LegProvisionOptionSinglePartyBuyerSide.Tag = '40457';

LegProvisionOptionSinglePartyBuyerSide.Type = 'INT';

module.exports = LegProvisionOptionSinglePartyBuyerSide;