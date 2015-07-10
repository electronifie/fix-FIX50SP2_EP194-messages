var invert = require('invert-obj');

function UnderlyingPaymentStreamDayCount (underlyingPaymentStreamDayCount) {
  this.message = underlyingPaymentStreamDayCount;
}

UnderlyingPaymentStreamDayCount.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamDayCount.Tag = '40572';

UnderlyingPaymentStreamDayCount.Type = 'INT';

module.exports = UnderlyingPaymentStreamDayCount;