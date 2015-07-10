var invert = require('invert-obj');

function UnderlyingPaymentStreamInitialFixingDateBusinessCenter (underlyingPaymentStreamInitialFixingDateBusinessCenter) {
  this.message = underlyingPaymentStreamInitialFixingDateBusinessCenter;
}

UnderlyingPaymentStreamInitialFixingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInitialFixingDateBusinessCenter.Tag = '40600';

UnderlyingPaymentStreamInitialFixingDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingPaymentStreamInitialFixingDateBusinessCenter;