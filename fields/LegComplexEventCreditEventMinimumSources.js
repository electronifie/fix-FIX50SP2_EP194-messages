var invert = require('invert-obj');

function LegComplexEventCreditEventMinimumSources (legComplexEventCreditEventMinimumSources) {
  this.message = legComplexEventCreditEventMinimumSources;
}

LegComplexEventCreditEventMinimumSources.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventMinimumSources.Tag = '2246';

LegComplexEventCreditEventMinimumSources.Type = 'INT';

module.exports = LegComplexEventCreditEventMinimumSources;