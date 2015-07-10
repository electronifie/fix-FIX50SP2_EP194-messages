var invert = require('invert-obj');

function LegComplexEventDayType (legComplexEventDayType) {
  this.message = legComplexEventDayType;
}

LegComplexEventDayType.prototype.value = function () {
  return this.message;
};

LegComplexEventDayType.Tag = '41393';

LegComplexEventDayType.Type = 'INT';

module.exports = LegComplexEventDayType;