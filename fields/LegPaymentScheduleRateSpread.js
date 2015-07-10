var invert = require('invert-obj');

function LegPaymentScheduleRateSpread (legPaymentScheduleRateSpread) {
  this.message = legPaymentScheduleRateSpread;
}

LegPaymentScheduleRateSpread.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleRateSpread.Tag = '40385';

LegPaymentScheduleRateSpread.Type = 'PRICEOFFSET';

module.exports = LegPaymentScheduleRateSpread;