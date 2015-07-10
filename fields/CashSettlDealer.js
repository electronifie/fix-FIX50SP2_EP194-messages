var invert = require('invert-obj');

function CashSettlDealer (cashSettlDealer) {
  this.message = cashSettlDealer;
}

CashSettlDealer.prototype.value = function () {
  return this.message;
};

CashSettlDealer.Tag = '40032';

CashSettlDealer.Type = 'STRING';

module.exports = CashSettlDealer;