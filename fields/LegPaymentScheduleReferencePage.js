var invert = require('invert-obj');

function LegPaymentScheduleReferencePage (legPaymentScheduleReferencePage) {
  this.message = legPaymentScheduleReferencePage;
}

LegPaymentScheduleReferencePage.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleReferencePage.Tag = '40417';

LegPaymentScheduleReferencePage.Type = 'STRING';

module.exports = LegPaymentScheduleReferencePage;