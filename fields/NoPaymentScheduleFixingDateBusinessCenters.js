var invert = require('invert-obj');

function NoPaymentScheduleFixingDateBusinessCenters (noPaymentScheduleFixingDateBusinessCenters) {
  this.message = noPaymentScheduleFixingDateBusinessCenters;
}

NoPaymentScheduleFixingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoPaymentScheduleFixingDateBusinessCenters.Tag = '40977';

NoPaymentScheduleFixingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoPaymentScheduleFixingDateBusinessCenters;