var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingDateBusinessDayCnvtn (underlyingPaymentScheduleFixingDateBusinessDayCnvtn) {
  this.message = underlyingPaymentScheduleFixingDateBusinessDayCnvtn;
}

UnderlyingPaymentScheduleFixingDateBusinessDayCnvtn.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingDateBusinessDayCnvtn.Tag = '40689';

UnderlyingPaymentScheduleFixingDateBusinessDayCnvtn.Type = 'INT';

module.exports = UnderlyingPaymentScheduleFixingDateBusinessDayCnvtn;