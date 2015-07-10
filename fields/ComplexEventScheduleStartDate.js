var invert = require('invert-obj');

function ComplexEventScheduleStartDate (complexEventScheduleStartDate) {
  this.message = complexEventScheduleStartDate;
}

ComplexEventScheduleStartDate.prototype.value = function () {
  return this.message;
};

ComplexEventScheduleStartDate.Tag = '41032';

ComplexEventScheduleStartDate.Type = 'LOCALMKTDATE';

module.exports = ComplexEventScheduleStartDate;