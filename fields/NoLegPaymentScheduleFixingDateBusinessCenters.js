var invert = require('invert-obj');

function NoLegPaymentScheduleFixingDateBusinessCenters (noLegPaymentScheduleFixingDateBusinessCenters) {
  this.message = noLegPaymentScheduleFixingDateBusinessCenters;
}

NoLegPaymentScheduleFixingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegPaymentScheduleFixingDateBusinessCenters.Tag = '40927';

NoLegPaymentScheduleFixingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegPaymentScheduleFixingDateBusinessCenters;