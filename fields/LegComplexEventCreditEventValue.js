var invert = require('invert-obj');

function LegComplexEventCreditEventValue (legComplexEventCreditEventValue) {
  this.message = legComplexEventCreditEventValue;
}

LegComplexEventCreditEventValue.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventValue.Tag = '41368';

LegComplexEventCreditEventValue.Type = 'STRING';

module.exports = LegComplexEventCreditEventValue;