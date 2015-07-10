var invert = require('invert-obj');

function LegComplexEventCreditEventStandardSources (legComplexEventCreditEventStandardSources) {
  this.message = legComplexEventCreditEventStandardSources;
}

LegComplexEventCreditEventStandardSources.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventStandardSources.Tag = '2245';

LegComplexEventCreditEventStandardSources.Type = 'BOOLEAN';

module.exports = LegComplexEventCreditEventStandardSources;