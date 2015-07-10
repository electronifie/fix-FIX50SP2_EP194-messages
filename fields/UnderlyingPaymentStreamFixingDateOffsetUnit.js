var invert = require('invert-obj');

function UnderlyingPaymentStreamFixingDateOffsetUnit (underlyingPaymentStreamFixingDateOffsetUnit) {
  this.message = underlyingPaymentStreamFixingDateOffsetUnit;
}

UnderlyingPaymentStreamFixingDateOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFixingDateOffsetUnit.Tag = '40609';

UnderlyingPaymentStreamFixingDateOffsetUnit.Type = 'STRING';

module.exports = UnderlyingPaymentStreamFixingDateOffsetUnit;