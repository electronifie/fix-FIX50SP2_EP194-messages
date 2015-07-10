var invert = require('invert-obj');

function UnderlyingPaymentStreamPaymentDate (underlyingPaymentStreamPaymentDate) {
  this.message = underlyingPaymentStreamPaymentDate;
}

UnderlyingPaymentStreamPaymentDate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPaymentDate.Tag = '41938';

UnderlyingPaymentStreamPaymentDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingPaymentStreamPaymentDate;