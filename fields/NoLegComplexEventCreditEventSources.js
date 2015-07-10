var invert = require('invert-obj');

function NoLegComplexEventCreditEventSources (noLegComplexEventCreditEventSources) {
  this.message = noLegComplexEventCreditEventSources;
}

NoLegComplexEventCreditEventSources.prototype.value = function () {
  return this.message;
};

NoLegComplexEventCreditEventSources.Tag = '41398';

NoLegComplexEventCreditEventSources.Type = 'NUMINGROUP';

module.exports = NoLegComplexEventCreditEventSources;