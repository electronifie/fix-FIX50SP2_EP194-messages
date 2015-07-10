var invert = require('invert-obj');

function LegComplexEventCreditEventBusinessCenter (legComplexEventCreditEventBusinessCenter) {
  this.message = legComplexEventCreditEventBusinessCenter;
}

LegComplexEventCreditEventBusinessCenter.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventBusinessCenter.Tag = '2244';

LegComplexEventCreditEventBusinessCenter.Type = 'STRING';

module.exports = LegComplexEventCreditEventBusinessCenter;