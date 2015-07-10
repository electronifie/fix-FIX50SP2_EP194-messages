var invert = require('invert-obj');

function ComplexEventCreditEventMinimumSources (complexEventCreditEventMinimumSources) {
  this.message = complexEventCreditEventMinimumSources;
}

ComplexEventCreditEventMinimumSources.prototype.value = function () {
  return this.message;
};

ComplexEventCreditEventMinimumSources.Tag = '2137';

ComplexEventCreditEventMinimumSources.Type = 'INT';

module.exports = ComplexEventCreditEventMinimumSources;