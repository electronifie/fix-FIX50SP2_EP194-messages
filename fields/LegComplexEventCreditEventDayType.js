var invert = require('invert-obj');

function LegComplexEventCreditEventDayType (legComplexEventCreditEventDayType) {
  this.message = legComplexEventCreditEventDayType;
}

LegComplexEventCreditEventDayType.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventDayType.Tag = '41372';

LegComplexEventCreditEventDayType.Type = 'INT';

module.exports = LegComplexEventCreditEventDayType;