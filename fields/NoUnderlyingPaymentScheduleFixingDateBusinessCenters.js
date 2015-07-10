var invert = require('invert-obj');

function NoUnderlyingPaymentScheduleFixingDateBusinessCenters (noUnderlyingPaymentScheduleFixingDateBusinessCenters) {
  this.message = noUnderlyingPaymentScheduleFixingDateBusinessCenters;
}

NoUnderlyingPaymentScheduleFixingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentScheduleFixingDateBusinessCenters.Tag = '40966';

NoUnderlyingPaymentScheduleFixingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentScheduleFixingDateBusinessCenters;