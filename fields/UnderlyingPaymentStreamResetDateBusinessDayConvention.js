var invert = require('invert-obj');

function UnderlyingPaymentStreamResetDateBusinessDayConvention (underlyingPaymentStreamResetDateBusinessDayConvention) {
  this.message = underlyingPaymentStreamResetDateBusinessDayConvention;
}

UnderlyingPaymentStreamResetDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamResetDateBusinessDayConvention.Tag = '40593';

UnderlyingPaymentStreamResetDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingPaymentStreamResetDateBusinessDayConvention;