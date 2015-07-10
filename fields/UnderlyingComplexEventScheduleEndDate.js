var invert = require('invert-obj');

function UnderlyingComplexEventScheduleEndDate (underlyingComplexEventScheduleEndDate) {
  this.message = underlyingComplexEventScheduleEndDate;
}

UnderlyingComplexEventScheduleEndDate.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventScheduleEndDate.Tag = '41752';

UnderlyingComplexEventScheduleEndDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingComplexEventScheduleEndDate;