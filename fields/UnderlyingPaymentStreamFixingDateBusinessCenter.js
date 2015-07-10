var invert = require('invert-obj');

function UnderlyingPaymentStreamFixingDateBusinessCenter (underlyingPaymentStreamFixingDateBusinessCenter) {
  this.message = underlyingPaymentStreamFixingDateBusinessCenter;
}

UnderlyingPaymentStreamFixingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFixingDateBusinessCenter.Tag = '40607';

UnderlyingPaymentStreamFixingDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingPaymentStreamFixingDateBusinessCenter;