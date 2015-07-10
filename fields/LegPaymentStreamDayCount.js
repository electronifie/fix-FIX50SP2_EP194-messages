var invert = require('invert-obj');

function LegPaymentStreamDayCount (legPaymentStreamDayCount) {
  this.message = legPaymentStreamDayCount;
}

LegPaymentStreamDayCount.prototype.value = function () {
  return this.message;
};

LegPaymentStreamDayCount.Tag = '40283';

LegPaymentStreamDayCount.Type = 'INT';

module.exports = LegPaymentStreamDayCount;