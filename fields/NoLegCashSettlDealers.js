var invert = require('invert-obj');

function NoLegCashSettlDealers (noLegCashSettlDealers) {
  this.message = noLegCashSettlDealers;
}

NoLegCashSettlDealers.prototype.value = function () {
  return this.message;
};

NoLegCashSettlDealers.Tag = '41342';

NoLegCashSettlDealers.Type = 'NUMINGROUP';

module.exports = NoLegCashSettlDealers;