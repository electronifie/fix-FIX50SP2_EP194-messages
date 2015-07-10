var invert = require('invert-obj');

function UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention (underlyingPaymentStreamInitialFixingDateBusinessDayConvention) {
  this.message = underlyingPaymentStreamInitialFixingDateBusinessDayConvention;
}

UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention.Tag = '40599';

UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention;