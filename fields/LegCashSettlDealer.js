var invert = require('invert-obj');

function LegCashSettlDealer (legCashSettlDealer) {
  this.message = legCashSettlDealer;
}

LegCashSettlDealer.prototype.value = function () {
  return this.message;
};

LegCashSettlDealer.Tag = '41343';

LegCashSettlDealer.Type = 'STRING';

module.exports = LegCashSettlDealer;