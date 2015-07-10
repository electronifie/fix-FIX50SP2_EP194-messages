var invert = require('invert-obj');

function PaymentLegRefID (paymentLegRefId) {
  this.message = paymentLegRefId;
}

PaymentLegRefID.prototype.value = function () {
  return this.message;
};

PaymentLegRefID.Tag = '41304';

PaymentLegRefID.Type = 'STRING';

module.exports = PaymentLegRefID;