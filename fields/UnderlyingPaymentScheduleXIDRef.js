var invert = require('invert-obj');

function UnderlyingPaymentScheduleXIDRef (underlyingPaymentScheduleXidref) {
  this.message = underlyingPaymentScheduleXidref;
}

UnderlyingPaymentScheduleXIDRef.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleXIDRef.Tag = '41882';

UnderlyingPaymentScheduleXIDRef.Type = 'XIDREF';

module.exports = UnderlyingPaymentScheduleXIDRef;