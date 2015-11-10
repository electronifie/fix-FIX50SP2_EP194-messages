var invert = require('invert-obj');

function ProvisionOptionSinglePartyBuyerSide (provisionOptionSinglePartyBuyerSide) {
  this.message = provisionOptionSinglePartyBuyerSide;
}

ProvisionOptionSinglePartyBuyerSide.prototype.value = function () {
  return this.message;
};


ProvisionOptionSinglePartyBuyerSide.Keys = {
  'BUY': '1',
  'SELL': '2',
};

ProvisionOptionSinglePartyBuyerSide.Tag = '40099';

ProvisionOptionSinglePartyBuyerSide.Type = 'INT';

ProvisionOptionSinglePartyBuyerSide.Values = invert(ProvisionOptionSinglePartyBuyerSide.Keys);

module.exports = ProvisionOptionSinglePartyBuyerSide;