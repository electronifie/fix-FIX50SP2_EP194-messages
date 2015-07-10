var invert = require('invert-obj');

function UnderlyingComplexEventScheduleStartDate (underlyingComplexEventScheduleStartDate) {
  this.message = underlyingComplexEventScheduleStartDate;
}

UnderlyingComplexEventScheduleStartDate.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventScheduleStartDate.Tag = '41751';

UnderlyingComplexEventScheduleStartDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingComplexEventScheduleStartDate;