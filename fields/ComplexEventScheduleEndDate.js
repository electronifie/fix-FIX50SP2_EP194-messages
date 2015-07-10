var invert = require('invert-obj');

function ComplexEventScheduleEndDate (complexEventScheduleEndDate) {
  this.message = complexEventScheduleEndDate;
}

ComplexEventScheduleEndDate.prototype.value = function () {
  return this.message;
};

ComplexEventScheduleEndDate.Tag = '41033';

ComplexEventScheduleEndDate.Type = 'LOCALMKTDATE';

module.exports = ComplexEventScheduleEndDate;