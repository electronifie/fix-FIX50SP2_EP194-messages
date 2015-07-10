var invert = require('invert-obj');

function LegPaymentScheduleReceiveSide (legPaymentScheduleReceiveSide) {
  this.message = legPaymentScheduleReceiveSide;
}

LegPaymentScheduleReceiveSide.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleReceiveSide.Tag = '40380';

LegPaymentScheduleReceiveSide.Type = 'INT';

module.exports = LegPaymentScheduleReceiveSide;