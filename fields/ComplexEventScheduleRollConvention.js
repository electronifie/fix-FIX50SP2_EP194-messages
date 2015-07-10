var invert = require('invert-obj');

function ComplexEventScheduleRollConvention (complexEventScheduleRollConvention) {
  this.message = complexEventScheduleRollConvention;
}

ComplexEventScheduleRollConvention.prototype.value = function () {
  return this.message;
};

ComplexEventScheduleRollConvention.Tag = '41036';

ComplexEventScheduleRollConvention.Type = 'STRING';

module.exports = ComplexEventScheduleRollConvention;