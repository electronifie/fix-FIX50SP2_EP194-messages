var invert = require('invert-obj');

function ComplexEventCreditEventStandardSources (complexEventCreditEventStandardSources) {
  this.message = complexEventCreditEventStandardSources;
}

ComplexEventCreditEventStandardSources.prototype.value = function () {
  return this.message;
};

ComplexEventCreditEventStandardSources.Tag = '2136';

ComplexEventCreditEventStandardSources.Type = 'BOOLEAN';

module.exports = ComplexEventCreditEventStandardSources;