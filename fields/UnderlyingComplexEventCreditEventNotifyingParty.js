var invert = require('invert-obj');

function UnderlyingComplexEventCreditEventNotifyingParty (underlyingComplexEventCreditEventNotifyingParty) {
  this.message = underlyingComplexEventCreditEventNotifyingParty;
}

UnderlyingComplexEventCreditEventNotifyingParty.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCreditEventNotifyingParty.Tag = '2278';

UnderlyingComplexEventCreditEventNotifyingParty.Type = 'INT';

module.exports = UnderlyingComplexEventCreditEventNotifyingParty;