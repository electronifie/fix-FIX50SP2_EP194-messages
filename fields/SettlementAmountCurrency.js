var invert = require('invert-obj');

function SettlementAmountCurrency (settlementAmountCurrency) {
  this.message = settlementAmountCurrency;
}

SettlementAmountCurrency.prototype.value = function () {
  return this.message;
};

SettlementAmountCurrency.Tag = '1702';

SettlementAmountCurrency.Type = 'CURRENCY';

module.exports = SettlementAmountCurrency;