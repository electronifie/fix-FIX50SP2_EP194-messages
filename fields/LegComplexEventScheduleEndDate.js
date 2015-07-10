var invert = require('invert-obj');

function LegComplexEventScheduleEndDate (legComplexEventScheduleEndDate) {
  this.message = legComplexEventScheduleEndDate;
}

LegComplexEventScheduleEndDate.prototype.value = function () {
  return this.message;
};

LegComplexEventScheduleEndDate.Tag = '41402';

LegComplexEventScheduleEndDate.Type = 'LOCALMKTDATE';

module.exports = LegComplexEventScheduleEndDate;