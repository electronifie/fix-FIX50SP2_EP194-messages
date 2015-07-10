var invert = require('invert-obj');

function PaymentStreamAveragingMethod (paymentStreamAveragingMethod) {
  this.message = paymentStreamAveragingMethod;
}

PaymentStreamAveragingMethod.prototype.value = function () {
  return this.message;
};


PaymentStreamAveragingMethod.Keys = {
  UNWEIGHTED: '0',
  WEIGHTED: '1',
};

PaymentStreamAveragingMethod.Tag = '40806';

PaymentStreamAveragingMethod.Type = 'INT';

PaymentStreamAveragingMethod.Values = invert(PaymentStreamAveragingMethod.Keys);

module.exports = PaymentStreamAveragingMethod;