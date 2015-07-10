var invert = require('invert-obj');

function LegComplexEventCreditEventUnit (legComplexEventCreditEventUnit) {
  this.message = legComplexEventCreditEventUnit;
}

LegComplexEventCreditEventUnit.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventUnit.Tag = '41371';

LegComplexEventCreditEventUnit.Type = 'STRING';

module.exports = LegComplexEventCreditEventUnit;