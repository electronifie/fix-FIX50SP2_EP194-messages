var invert = require('invert-obj');

function LegStreamTerminationDateOffsetDayType (legStreamTerminationDateOffsetDayType) {
  this.message = legStreamTerminationDateOffsetDayType;
}

LegStreamTerminationDateOffsetDayType.prototype.value = function () {
  return this.message;
};

LegStreamTerminationDateOffsetDayType.Tag = '40263';

LegStreamTerminationDateOffsetDayType.Type = 'INT';

module.exports = LegStreamTerminationDateOffsetDayType;