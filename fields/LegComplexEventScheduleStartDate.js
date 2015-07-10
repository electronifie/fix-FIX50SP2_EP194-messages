var invert = require('invert-obj');

function LegComplexEventScheduleStartDate (legComplexEventScheduleStartDate) {
  this.message = legComplexEventScheduleStartDate;
}

LegComplexEventScheduleStartDate.prototype.value = function () {
  return this.message;
};

LegComplexEventScheduleStartDate.Tag = '41401';

LegComplexEventScheduleStartDate.Type = 'LOCALMKTDATE';

module.exports = LegComplexEventScheduleStartDate;