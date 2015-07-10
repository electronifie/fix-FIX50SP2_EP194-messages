var invert = require('invert-obj');

function LegComplexEventCreditEventType (legComplexEventCreditEventType) {
  this.message = legComplexEventCreditEventType;
}

LegComplexEventCreditEventType.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventType.Tag = '41367';

LegComplexEventCreditEventType.Type = 'STRING';

module.exports = LegComplexEventCreditEventType;