var invert = require('invert-obj');

function NoUnderlyingCashSettlDealers (noUnderlyingCashSettlDealers) {
  this.message = noUnderlyingCashSettlDealers;
}

NoUnderlyingCashSettlDealers.prototype.value = function () {
  return this.message;
};

NoUnderlyingCashSettlDealers.Tag = '42039';

NoUnderlyingCashSettlDealers.Type = 'NUMINGROUP';

module.exports = NoUnderlyingCashSettlDealers;