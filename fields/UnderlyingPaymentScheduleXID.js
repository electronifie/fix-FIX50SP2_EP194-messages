var invert = require('invert-obj');

function UnderlyingPaymentScheduleXID (underlyingPaymentScheduleXid) {
  this.message = underlyingPaymentScheduleXid;
}

UnderlyingPaymentScheduleXID.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleXID.Tag = '41881';

UnderlyingPaymentScheduleXID.Type = 'XID';

module.exports = UnderlyingPaymentScheduleXID;