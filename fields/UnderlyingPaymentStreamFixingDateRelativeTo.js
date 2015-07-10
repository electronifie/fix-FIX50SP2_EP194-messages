var invert = require('invert-obj');

function UnderlyingPaymentStreamFixingDateRelativeTo (underlyingPaymentStreamFixingDateRelativeTo) {
  this.message = underlyingPaymentStreamFixingDateRelativeTo;
}

UnderlyingPaymentStreamFixingDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFixingDateRelativeTo.Tag = '40605';

UnderlyingPaymentStreamFixingDateRelativeTo.Type = 'INT';

module.exports = UnderlyingPaymentStreamFixingDateRelativeTo;