var invert = require('invert-obj');

function LegPaymentScheduleXID (legPaymentScheduleXid) {
  this.message = legPaymentScheduleXid;
}

LegPaymentScheduleXID.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleXID.Tag = '41533';

LegPaymentScheduleXID.Type = 'XID';

module.exports = LegPaymentScheduleXID;