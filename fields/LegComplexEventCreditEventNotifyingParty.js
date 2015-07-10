var invert = require('invert-obj');

function LegComplexEventCreditEventNotifyingParty (legComplexEventCreditEventNotifyingParty) {
  this.message = legComplexEventCreditEventNotifyingParty;
}

LegComplexEventCreditEventNotifyingParty.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventNotifyingParty.Tag = '2243';

LegComplexEventCreditEventNotifyingParty.Type = 'INT';

module.exports = LegComplexEventCreditEventNotifyingParty;