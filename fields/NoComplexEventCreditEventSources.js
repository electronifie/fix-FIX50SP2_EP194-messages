var invert = require('invert-obj');

function NoComplexEventCreditEventSources (noComplexEventCreditEventSources) {
  this.message = noComplexEventCreditEventSources;
}

NoComplexEventCreditEventSources.prototype.value = function () {
  return this.message;
};

NoComplexEventCreditEventSources.Tag = '41029';

NoComplexEventCreditEventSources.Type = 'NUMINGROUP';

module.exports = NoComplexEventCreditEventSources;