var invert = require('invert-obj');

function UnderlyingCashSettlDealer (underlyingCashSettlDealer) {
  this.message = underlyingCashSettlDealer;
}

UnderlyingCashSettlDealer.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlDealer.Tag = '42040';

UnderlyingCashSettlDealer.Type = 'STRING';

module.exports = UnderlyingCashSettlDealer;