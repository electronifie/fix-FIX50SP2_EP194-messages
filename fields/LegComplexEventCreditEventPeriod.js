var invert = require('invert-obj');

function LegComplexEventCreditEventPeriod (legComplexEventCreditEventPeriod) {
  this.message = legComplexEventCreditEventPeriod;
}

LegComplexEventCreditEventPeriod.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventPeriod.Tag = '41370';

LegComplexEventCreditEventPeriod.Type = 'INT';

module.exports = LegComplexEventCreditEventPeriod;