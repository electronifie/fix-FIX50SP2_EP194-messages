var invert = require('invert-obj');

function UnderlyingPaymentStreamAveragingMethod (underlyingPaymentStreamAveragingMethod) {
  this.message = underlyingPaymentStreamAveragingMethod;
}

UnderlyingPaymentStreamAveragingMethod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamAveragingMethod.Tag = '40637';

UnderlyingPaymentStreamAveragingMethod.Type = 'INT';

module.exports = UnderlyingPaymentStreamAveragingMethod;