var invert = require('invert-obj');

function UnderlyingComplexEventCreditEventDayType (underlyingComplexEventCreditEventDayType) {
  this.message = underlyingComplexEventCreditEventDayType;
}

UnderlyingComplexEventCreditEventDayType.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCreditEventDayType.Tag = '41722';

UnderlyingComplexEventCreditEventDayType.Type = 'INT';

module.exports = UnderlyingComplexEventCreditEventDayType;