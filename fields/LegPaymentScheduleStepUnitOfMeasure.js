var invert = require('invert-obj');

function LegPaymentScheduleStepUnitOfMeasure (legPaymentScheduleStepUnitOfMeasure) {
  this.message = legPaymentScheduleStepUnitOfMeasure;
}

LegPaymentScheduleStepUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleStepUnitOfMeasure.Tag = '41542';

LegPaymentScheduleStepUnitOfMeasure.Type = 'STRING';

module.exports = LegPaymentScheduleStepUnitOfMeasure;