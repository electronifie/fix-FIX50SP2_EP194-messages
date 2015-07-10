var invert = require('invert-obj');

function LegPaymentScheduleXIDRef (legPaymentScheduleXidref) {
  this.message = legPaymentScheduleXidref;
}

LegPaymentScheduleXIDRef.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleXIDRef.Tag = '41534';

LegPaymentScheduleXIDRef.Type = 'XIDREF';

module.exports = LegPaymentScheduleXIDRef;