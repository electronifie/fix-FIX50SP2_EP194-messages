var invert = require('invert-obj');

function UnderlyingPaymentStreamType (underlyingPaymentStreamType) {
  this.message = underlyingPaymentStreamType;
}

UnderlyingPaymentStreamType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamType.Tag = '40568';

UnderlyingPaymentStreamType.Type = 'INT';

module.exports = UnderlyingPaymentStreamType;