var invert = require('invert-obj');

function NoLegComplexEventCreditEvents (noLegComplexEventCreditEvents) {
  this.message = noLegComplexEventCreditEvents;
}

NoLegComplexEventCreditEvents.prototype.value = function () {
  return this.message;
};

NoLegComplexEventCreditEvents.Tag = '41366';

NoLegComplexEventCreditEvents.Type = 'NUMINGROUP';

module.exports = NoLegComplexEventCreditEvents;